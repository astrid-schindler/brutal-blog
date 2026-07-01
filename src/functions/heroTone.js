export function isOverHomeHero(routePath = "/") {
  var homeSection = document.getElementById("home");

  if (!homeSection || routePath !== "/") {
    return false;
  }

  var {bottom, top} = homeSection.getBoundingClientRect();
  var probeY = 48;
  return top <= probeY && bottom > probeY;
}
