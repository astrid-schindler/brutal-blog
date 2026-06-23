<template>
  <div class="brutal-copy col-start-7 col-span-4 max-lg:col-start-5 max-lg:col-span-3 max-md:col-start-auto max-md:col-span-full max-md:min-w-0">
    <p class="pb-6 text-justify tracking-wide text-xs max-md:[overflow-wrap:anywhere]">
      Do you have a short question, then feel free to use the contact form. I'm looking forward to hearing from you.
    </p>
    <form ref="form" @submit.prevent="$emit('submit-form', $refs.form)">
      <div class="relative z-0 mb-6 w-full group">
        <input type="email" name="user_email" id="floating_email" class="block w-full border-2 border-stone-950 bg-white px-3 py-3 text-sm font-black tracking-widest text-black shadow-[4px_4px_0_#1c1917] appearance-none focus:outline-none focus:ring-0 focus:shadow-[6px_6px_0_#ff3b30] peer" placeholder=" " required />
        <label for="floating_email" class="absolute left-2 top-3 bg-[var(--brutal-paper)] px-1 text-xs font-black uppercase tracking-[.25em] text-stone-950 duration-150 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 max-md:tracking-[0.12em] max-md:[overflow-wrap:anywhere]">Your e-mail address</label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="user_name" id="floating_name" class="block w-full border-2 border-stone-950 bg-white px-3 py-3 text-sm font-black tracking-widest text-black shadow-[4px_4px_0_#1c1917] appearance-none focus:outline-none focus:ring-0 focus:shadow-[6px_6px_0_#ff3b30] peer" placeholder=" " required />
        <label for="floating_name" class="absolute left-2 top-3 bg-[var(--brutal-paper)] px-1 text-xs font-black uppercase tracking-[.25em] text-stone-950 duration-150 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 max-md:tracking-[0.12em] max-md:[overflow-wrap:anywhere]">Your name</label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <textarea rows="5" name="message" id="floating_message" class="block w-full border-2 border-stone-950 bg-white px-3 py-3 text-sm font-black tracking-widest text-gray-900 shadow-[4px_4px_0_#1c1917] appearance-none focus:outline-none focus:ring-0 focus:shadow-[6px_6px_0_#ff3b30] peer" placeholder=" " required />
        <label for="floating_message" class="absolute left-2 top-3 bg-[var(--brutal-paper)] px-1 text-xs font-black uppercase tracking-[.25em] text-stone-950 duration-150 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 max-md:tracking-[0.12em] max-md:[overflow-wrap:anywhere]">Your message</label>
      </div>
      <the-button class="hover:text-emerald-300" button-icon="fa-envelope" button-text="Get it out!"></the-button>
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
