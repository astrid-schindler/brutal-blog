<template>
  <div class="relative min-h-[100svh] overflow-hidden border-y-4 border-stone-950 bg-[var(--peace-mint)] text-stone-950">
    <div class="sticky top-0 z-30 grid w-full grid-cols-12 gap-x-[var(--layout-gap)] border-b-4 border-stone-950 bg-[var(--honey-light)] p-5 text-xs font-black uppercase text-stone-950 shadow-[0_6px_0_#1c1917] max-lg:grid-cols-8 max-md:grid-cols-4 max-md:px-4">
      <p class="col-span-2 pl-1 max-lg:col-span-3 max-md:col-span-2">Photography</p>
      <p class="col-span-10 max-lg:col-span-5 max-md:col-span-2 max-md:text-right">
        36 Images
      </p>
    </div>

    <div
      class="grid grid-cols-2 gap-x-[18vw] gap-y-[clamp(5rem,9vw,8.5rem)] px-[clamp(2.5rem,7vw,3.75rem)] py-[clamp(6.5rem,13vw,12.5rem)] lg:grid-cols-3 lg:gap-x-[16vw] xl:grid-cols-4 max-md:gap-x-[14vw] max-md:gap-y-20 max-md:px-8 max-md:py-28"
    >
      <article
        v-for="photo in photos"
        :key="photo.id"
        class="group relative min-h-[clamp(7.5rem,18vw,15rem)]"
      >
        <button
          type="button"
          class="relative top-1/2 z-10 flex h-full w-full -translate-y-1/2 cursor-pointer items-center justify-center border-4 border-stone-950 bg-[var(--honey-light)] p-2 shadow-[6px_6px_0_#1c1917] transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#1c1917,8px_8px_0_var(--peace-lilac)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-stone-950"
          @click="openPhoto(photo)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="max-h-[clamp(8rem,22vw,17rem)] w-full object-contain"
            loading="lazy"
          >
        </button>

        <button
          type="button"
          class="pointer-events-none absolute top-1/2 z-20 flex w-[calc(100%+2.5rem)] -translate-y-1/2 gap-x-1 text-left text-xs font-black uppercase leading-tight text-neutral-100 mix-blend-difference transition-opacity duration-100 -left-10 max-md:-left-6 max-md:w-[calc(100%+1.5rem)] max-md:text-[0.68rem]"
          tabindex="-1"
          aria-hidden="true"
        >
          <span>({{ photo.id }})</span>
          <span class="relative min-w-0 flex-1 break-words">
            <span class="transition-opacity duration-100 group-hover:opacity-0">
              {{ photo.filename }}
            </span>
            <span class="absolute left-0 top-0 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
              View Photo
            </span>
          </span>
        </button>
      </article>
    </div>

    <div
      v-if="activePhoto"
      class="fixed inset-0 z-[70] bg-[var(--honey-light)]"
      role="dialog"
      aria-modal="true"
      :aria-label="activePhoto.filename"
      @click.self="closePhoto"
    >
      <button
        type="button"
        class="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 border-4 border-stone-950 bg-[var(--peace-lilac)] px-3 py-2 text-xs font-black uppercase text-stone-950 shadow-[5px_5px_0_#1c1917] lg:bottom-auto lg:left-5 lg:top-5 lg:translate-x-0"
        @click="closePhoto"
      >
        (Close)
      </button>

      <button
        type="button"
        class="absolute left-1/2 top-1/2 h-[calc(100svh-7rem)] w-[calc(100%-2.5rem)] -translate-x-1/2 -translate-y-1/2 lg:w-[70%]"
        @click="closePhoto"
      >
        <img
          :src="activePhoto.src"
          :alt="activePhoto.alt"
          class="h-full w-full object-contain"
        >
      </button>
    </div>
  </div>
</template>

<script>
const imageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/images",
  false,
  /\.(jpe?g|png)$/
);

const photos = imageContext
  .keys()
  .sort()
  .map((key, index) => {
    const filename = key.replace("./", "");
    const id = String(index + 1).padStart(2, "0");

    return {
      id,
      filename,
      src: imageContext(key),
      alt: `Photography reference ${id}`,
    };
  });

export default {
  name: "PhotographyGallery",
  data() {
    return {
      photos,
      activePhoto: null,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    openPhoto(photo) {
      this.activePhoto = photo;
    },
    closePhoto() {
      this.activePhoto = null;
    },
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.closePhoto();
      }
    },
  },
};
</script>
