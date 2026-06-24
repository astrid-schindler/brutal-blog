<template>
  <div class="photography-gallery relative min-h-[100svh] overflow-hidden bg-white text-stone-700">
    <div class="photography-gallery__bar sticky top-0 z-30 grid w-full grid-cols-12 gap-x-[var(--layout-gap)] bg-white p-5 text-[clamp(1.1rem,2.5vw,2.25rem)] font-light leading-none text-stone-700 max-lg:grid-cols-8 max-lg:text-[clamp(1rem,3vw,1.75rem)] max-md:grid-cols-4 max-md:px-4 max-md:text-base">
      <p class="col-span-2 pl-1 max-lg:col-span-3 max-md:col-span-2">Photography</p>
      <p class="col-span-6 max-lg:col-span-3 max-md:hidden">
        (c) Flash Archive
      </p>
      <p class="col-span-4 text-right max-lg:col-span-2 max-md:col-span-2">
        36 Images
      </p>
    </div>

    <div
      class="photography-gallery__grid grid grid-cols-2 gap-x-[16vw] gap-y-[clamp(5rem,9vw,8.5rem)] px-[clamp(2rem,6vw,4rem)] py-[clamp(6rem,12vw,12rem)] lg:grid-cols-3 lg:gap-x-[12vw] xl:grid-cols-4 max-md:grid-cols-1 max-md:gap-y-16 max-md:px-6 max-md:py-20"
    >
      <article
        v-for="photo in photos"
        :key="photo.id"
        class="photography-gallery__item group relative grid min-h-[clamp(12rem,24vw,19rem)] content-center"
      >
        <button
          type="button"
          class="photography-gallery__thumb relative z-10 flex h-full w-full cursor-pointer items-center justify-center p-0 transition-opacity duration-150 hover:opacity-75 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-stone-700"
          @click="openPhoto(photo)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="max-h-[clamp(11rem,25vw,20rem)] w-full object-contain"
            loading="lazy"
          >
        </button>

        <button
          type="button"
          class="photography-gallery__caption pointer-events-none absolute left-1/2 top-1/2 z-20 grid w-[calc(100%+5rem)] -translate-x-1/2 -translate-y-1/2 grid-cols-[auto_1fr] gap-x-2 text-left text-xs font-light leading-tight text-stone-700 transition-opacity duration-100 max-md:static max-md:mt-3 max-md:w-full max-md:translate-x-0 max-md:translate-y-0 max-md:grid-cols-[auto_1fr] max-md:text-[0.72rem]"
          tabindex="-1"
          aria-hidden="true"
        >
          <span class="photography-gallery__number">({{ photo.id }})</span>
          <span class="relative min-w-0 break-words">
            <span class="transition-opacity duration-100 group-hover:opacity-0">
              {{ photo.caption }}
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
      class="fixed inset-0 z-[70] bg-white"
      role="dialog"
      aria-modal="true"
      :aria-label="activePhoto.caption"
      @click.self="closePhoto"
    >
      <button
        type="button"
        class="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 px-3 py-2 text-xs font-light uppercase text-stone-700 lg:bottom-auto lg:left-5 lg:top-5 lg:translate-x-0"
        @click="closePhoto"
      >
        (Close)
      </button>

      <p class="fixed left-5 top-5 z-[80] hidden text-xs font-light leading-tight text-stone-700 lg:block">
        ({{ activePhoto.id }}) {{ activePhoto.caption }}
      </p>

      <button
        type="button"
        class="absolute left-1/2 top-1/2 h-[calc(100svh-7rem)] w-[calc(100%-2.5rem)] -translate-x-1/2 -translate-y-1/2 lg:w-[72%]"
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

const galleryPhotos = [
  ["photo-01.jpg", "DSCF3119_FLASH-01.jpg", "Tiny camera, big mood"],
  ["photo-02.jpg", "EDEN005-R3-BANANA-00.jpg", "Banana on folding chair"],
  ["photo-03.jpg", "0B1D72F0-ESPRESSO_105_c.jpeg", "Espresso before the crash"],
  ["photo-04.jpg", "IMG_8549_PICKLE-POWER.jpg", "Pickle on charging laptop"],
  ["photo-05.jpg", "R1-09143-ORANGE-0013.jpg", "Orange balanced, no notes"],
  ["photo-06.jpg", "DSCF3891_DAISY-LOAFERS.jpg", "Loafers growing daisies"],
  ["photo-07.jpg", "IMG_0737_RECEIPT-POSE.jpg", "Receipt with main character energy"],
  ["photo-08.jpg", "R1-08416-PEDESTAL-ROLL.jpg", "Toilet roll on pedestal"],
  ["photo-09.jpg", "IMG_8523_TWO-PHONES.jpg", "Two phones, zero answers"],
  ["photo-10.jpg", "000090670032_BLACK-SOCKS.jpg", "Black socks as sculpture"],
  ["photo-11.jpg", "R1-09262-CABLE-BOUQUET.jpg", "Cable bouquet"],
  ["photo-12.jpg", "IMG_2340_GUMMY-DINNER.jpg", "Gummy bear for dinner"],
  ["photo-13.jpg", "R1-08053-PLANT-THERAPY.jpg", "Plant therapy, horizontal"],
  ["photo-14.jpg", "IMG_3461_UMBRELLA-INDOORS.jpg", "Umbrella indoors"],
  ["photo-15.jpg", "R1-04548-TOMATO-020A.jpg", "Cherry tomato proof"],
  ["photo-16.jpg", "000697690009_SNEAKER-GLASS.jpg", "One sneaker under glass"],
  ["photo-17.jpg", "DSCF3273_AFTERPARTY-HAT.jpg", "Party hat afterparty"],
  ["photo-18.jpg", "IMG_4991_LEMON-TOTE.jpg", "Lemons in a tote"],
  ["photo-19.jpg", "IMG_9042_HALF-HIDDEN.jpg", "Almost hiding"],
  ["photo-20.jpg", "IMG_4924_FRIES-IN-VASE.jpg", "French fry in a vase"],
  ["photo-21.jpg", "000620230025_MIRROR-FLASH.jpg", "Mirror flash defense"],
  ["photo-22.jpg", "DSCF3267_GLOVE-PEAR.jpg", "Pear in glove"],
  ["photo-23.jpg", "IMG_7515_PEANUT-MEETING.jpg", "Peanut meeting"],
  ["photo-24.jpg", "IMG_7854-2_KEY-CORD.jpg", "Key on a cord"],
  ["photo-25.jpg", "0ADCEE76_FRAME-FACE_102_o.jpeg", "Frame within a face"],
  ["photo-26.jpg", "IMG_4057_CACTUS-COFFEE.jpg", "Cactus coffee"],
  ["photo-27.jpg", "IMG_0024_DISCO-INSPECTION.jpg", "Disco ball inspection"],
  ["photo-28.jpg", "R1-04548-CHAIR-009A.jpg", "Chair wearing glasses"],
  ["photo-29.jpg", "IMG_2322_BUTTER-SOLO.jpg", "Butter served alone"],
  ["photo-30.jpg", "000253570030_BALLOON-DOG.jpg", "Balloon dog walk"],
  ["photo-31.jpg", "IMG_1569_BAGUETTE-SESSION.jpg", "Baguette listening session"],
  ["photo-32.jpg", "000090670002_MASK-MAYBE.jpg", "Mask says maybe"],
  ["photo-33.jpg", "R1-05973-UMBRELLA-CEREAL.jpg", "Umbrella cereal"],
  ["photo-34.jpg", "IMG_1583_LADDER-PORTRAIT.jpg", "Ladder portrait"],
  ["photo-35.jpg", "DSCF4044_CUCUMBER-STRAP.jpg", "Cucumber with strap"],
  ["photo-36.jpg", "EDEN006_THREE-BLACK-COATS.jpg", "Three black coats"],
];

const photos = galleryPhotos.map(([file, caption, title], index) => {
  const id = String(index + 1).padStart(2, "0");

  return {
    id,
    file,
    caption,
    title,
    src: imageContext(`./${file}`),
    alt: `${title}, flash photography ${id}`,
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

<style scoped>
.photography-gallery__thumb {
  border: 0;
  background: transparent;
  box-shadow: none;
  transition:
    opacity 220ms ease,
    transform 520ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 520ms ease;
}

.photography-gallery__bar {
  box-shadow: 0 1px 0 rgba(68, 64, 60, 0.28) !important;
}

.photography-gallery__item:nth-child(6n + 2) {
  margin-top: clamp(1.5rem, 5vw, 4rem);
}

.photography-gallery__item:nth-child(6n + 4) {
  margin-top: clamp(-1rem, -2vw, -0.5rem);
}

.photography-gallery__item:nth-child(6n + 5) {
  margin-top: clamp(2rem, 6vw, 5rem);
}

.photography-gallery__item:nth-child(5n + 1) img {
  max-height: clamp(14rem, 31vw, 25rem);
}

.photography-gallery__item:nth-child(5n + 3) img {
  max-height: clamp(9rem, 18vw, 15rem);
}

.photography-gallery__item:nth-child(7n + 4) img {
  width: min(100%, 18rem);
}

.photography-gallery__caption {
  text-wrap: balance;
}

.photography-gallery__number {
  opacity: 0.82;
}

.photography-gallery__thumb img {
  display: block;
  filter: saturate(0.92) contrast(0.98);
  transform-origin: center;
}

.photography-gallery__thumb:hover,
.photography-gallery__thumb:focus-visible {
  opacity: 1;
  transform: scale(1.025);
}

.photography-gallery__thumb:hover img,
.photography-gallery__thumb:focus-visible img {
  filter: saturate(1) contrast(1.04);
}

@media (max-width: 768px) {
  .photography-gallery__item,
  .photography-gallery__item:nth-child(6n + 2),
  .photography-gallery__item:nth-child(6n + 4),
  .photography-gallery__item:nth-child(6n + 5) {
    margin-top: 0;
  }
}
</style>
