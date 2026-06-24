<template>
  <div class="contact-form brutal-copy col-start-7 col-span-4 max-lg:col-start-5 max-lg:col-span-3 max-md:col-start-auto max-md:col-span-full max-md:min-w-0">
    <p class="pb-6 text-justify tracking-wide text-xs max-md:[overflow-wrap:anywhere]">
      Do you have a short question, then feel free to use the contact form. I'm looking forward to hearing from you.
    </p>
    <form ref="form" @submit.prevent="$emit('submit-form', $refs.form)">
      <div class="relative z-0 mb-6 w-full group">
        <input type="email" name="user_email" id="floating_email" class="block w-full border border-stone-700 bg-white px-3 py-3 text-sm font-light tracking-normal text-stone-700 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label for="floating_email" class="absolute left-2 top-3 bg-white px-1 text-xs font-light tracking-normal text-stone-700 duration-150 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 max-md:[overflow-wrap:anywhere]">Your e-mail address</label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="user_name" id="floating_name" class="block w-full border border-stone-700 bg-white px-3 py-3 text-sm font-light tracking-normal text-stone-700 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label for="floating_name" class="absolute left-2 top-3 bg-white px-1 text-xs font-light tracking-normal text-stone-700 duration-150 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 max-md:[overflow-wrap:anywhere]">Your name</label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <textarea rows="5" name="message" id="floating_message" class="block w-full border border-stone-700 bg-white px-3 py-3 text-sm font-light tracking-normal text-stone-700 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label for="floating_message" class="absolute left-2 top-3 bg-white px-1 text-xs font-light tracking-normal text-stone-700 duration-150 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 max-md:[overflow-wrap:anywhere]">Your message</label>
      </div>
      <the-button class="hover:text-stone-700" button-icon="fa-envelope" button-text="Get it out!"></the-button>
    </form>
  </div>
</template>

<script>
import TheButton from "@/components/Atoms/TheButton/TheButton";

export default {
  name: "ContactForm",
  components: {TheButton},
  emits: ["submit-form"],
}
</script>

<style scoped>
.contact-form {
  padding: clamp(1rem, 2.4vw, 1.5rem);
}

.contact-form form {
  display: grid;
  gap: 1.35rem;
}

.contact-form form > div {
  margin-bottom: 0;
}

.contact-form :deep(input),
.contact-form :deep(textarea) {
  border: 1px solid #44403c;
  padding: 0.85rem 0.75rem;
  font-weight: 300;
}

.contact-form :deep(label) {
  background: #ffffff;
  font-weight: 300;
}

.contact-form :deep(input:focus),
.contact-form :deep(textarea:focus) {
  outline: 1px solid #44403c;
  outline-offset: 2px;
}

.contact-form :deep(button) {
  border: 1px solid #44403c;
  padding: 0.75rem 1rem;
  font-weight: 300;
}

@media (max-width: 1024px) {
  .contact-form {
    grid-column: 1 / -1;
    width: min(100%, 34rem);
    margin-inline: auto;
    text-align: center;
  }

  .contact-form p {
    text-align: center;
  }

  .contact-form form {
    display: grid;
    justify-items: center;
  }

  .contact-form form > div {
    width: 100%;
  }

  .contact-form :deep(button) {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .contact-form {
    width: 100%;
  }

  .contact-form :deep(input),
  .contact-form :deep(textarea) {
    width: 100%;
  }
}
</style>
