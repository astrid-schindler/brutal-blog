var {spawn} = require("child_process");

var isWindows = process.platform === "win32";
var npmCommand = isWindows ? "npm.cmd" : "npm";

var processes = [
  spawn(npmCommand, ["run", "graphql"], {stdio: "inherit"}),
  spawn(npmCommand, ["run", "serve"], {stdio: "inherit"}),
];

var shuttingDown = false;

function stopAll(signal = "SIGTERM") {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  processes.forEach((childProcess) => {
    if (!childProcess.killed) {
      childProcess.kill(signal);
    }
  });
}

processes.forEach((childProcess) => {
  childProcess.on("exit", (code, signal) => {
    if (!shuttingDown && code !== 0) {
      console.error(`Dev process exited with ${signal || code}.`);
      stopAll();
      process.exit(code || 1);
    }
  });
});

process.on("SIGINT", () => stopAll("SIGINT"));
process.on("SIGTERM", () => stopAll("SIGTERM"));
