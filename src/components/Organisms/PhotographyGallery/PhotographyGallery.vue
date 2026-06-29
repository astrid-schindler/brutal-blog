<template>
  <div class="photography-gallery relative min-h-[100svh] overflow-hidden text-stone-700">
    <div class="photography-gallery__bar sticky top-0 z-30 grid w-full grid-cols-12 gap-x-[var(--layout-gap)] p-5 text-[clamp(1.1rem,2.5vw,2.25rem)] font-light leading-none text-stone-700 max-lg:grid-cols-8 max-lg:text-[clamp(1rem,3vw,1.75rem)] max-md:grid-cols-4 max-md:px-4 max-md:text-base">
      <p class="col-span-2 pl-1 max-lg:col-span-3 max-md:col-span-2">
        <span class="block">Photography</span>
        <span class="block pt-1 text-[0.55rem] font-light leading-tight tracking-normal">
          AI-generated photos
        </span>
      </p>
      <p class="col-span-6 max-lg:col-span-3 max-md:hidden">
        (c) Flash Archive
      </p>
      <p class="col-span-4 text-right max-lg:col-span-2 max-md:col-span-2">
        {{ photos.length }} Images
      </p>
    </div>

    <div
      class="photography-gallery__grid grid w-full min-w-0 grid-cols-[repeat(auto-fit,minmax(min(17rem,100%),1fr))] gap-x-[clamp(1.5rem,4.5vw,4rem)] gap-y-[clamp(3.5rem,7vw,6.5rem)] px-[clamp(1rem,4vw,4rem)] py-[clamp(5rem,10vw,9rem)] max-sm:gap-y-12 max-sm:px-4 max-sm:py-16"
    >
      <article
        v-for="photo in photos"
        :key="photo.id"
        class="photography-gallery__item group relative grid min-h-[clamp(17rem,32vw,27rem)] content-center"
      >
        <button
          type="button"
          class="photography-gallery__thumb relative z-10 flex h-full w-full cursor-pointer items-center justify-center p-0 transition-opacity duration-150 hover:opacity-75 focus-visible:outline-none"
          @click="openPhoto(photo)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="h-[clamp(16rem,30vw,26rem)] w-full object-contain max-md:h-[clamp(18rem,68vw,29rem)] max-sm:h-[min(74svh,27rem)]"
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
      class="photography-gallery__modal fixed inset-0 z-[70] grid place-items-center"
      role="dialog"
      aria-modal="true"
      :aria-label="activePhoto.caption"
      @click.self="closePhoto"
    >
      <button
        type="button"
        class="photography-gallery__modal-control photography-gallery__modal-close fixed bottom-5 left-1/2 z-[80] px-3 py-2 text-xs font-light uppercase text-stone-700 lg:bottom-auto lg:left-5 lg:top-5"
        @click="closePhoto"
      >
        (Close)
      </button>

      <p class="fixed left-5 top-5 z-[80] hidden text-xs font-light leading-tight text-stone-700 lg:block">
        ({{ activePhoto.id }}) {{ activePhoto.caption }}{{ activeSeriesLabel }}
      </p>

      <button
        type="button"
        class="photography-gallery__modal-image-button h-[min(76svh,54rem)] w-[min(calc(100%-2rem),82rem)] max-md:h-[min(70svh,calc(100svh-9rem))] lg:w-[min(76vw,76rem)]"
        @click="closePhoto"
      >
        <img
          :src="activeSlide.src"
          :alt="activeSlide.alt"
          class="photography-gallery__modal-image h-full w-full object-contain"
        >
      </button>

      <div
        v-if="activePhoto.series.length > 1"
        class="photography-gallery__series fixed bottom-16 left-0 right-0 z-[80] mx-auto flex max-w-[calc(100%-2rem)] items-center gap-2 overflow-x-auto px-1 py-1 lg:bottom-5"
        :aria-label="`${activePhoto.caption} photo series`"
      >
        <button
          v-for="(slide, index) in activePhoto.series"
          :key="slide.file"
          type="button"
          class="photography-gallery__series-thumb"
          :class="{ 'photography-gallery__series-thumb--active': index === activeSeriesIndex }"
          :aria-label="`Show image ${index + 1} of ${activePhoto.series.length}`"
          @click.stop="activeSeriesIndex = index"
        >
          <img :src="slide.src" :alt="slide.alt" loading="lazy">
        </button>
      </div>

      <button
        type="button"
        class="photography-gallery__modal-control photography-gallery__modal-arrow photography-gallery__modal-arrow--prev"
        aria-label="Previous photo"
        @click.stop="showPreviousPhoto"
      >
        ←
      </button>
      <button
        type="button"
        class="photography-gallery__modal-control photography-gallery__modal-arrow photography-gallery__modal-arrow--next"
        aria-label="Next photo"
        @click.stop="showNextPhoto"
      >
        →
      </button>
    </div>
  </div>
</template>

<script>
var mainImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery",
  false,
  /\.(jpe?g|png)$/
);

var session61ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/session-61",
  false,
  /\.(jpe?g|png)$/
);

var session02ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/session-02",
  false,
  /\.(jpe?g|png)$/
);

var session03ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/session-03",
  false,
  /\.(jpe?g|png)$/
);

var session07ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/session-07",
  false,
  /\.(jpe?g|png)$/
);

var session08ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/session-08",
  false,
  /\.(jpe?g|png)$/
);

var session70ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/session-70",
  false,
  /\.(jpe?g|png)$/
);

var retro01ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/retro-01-strecke",
  false,
  /\.(jpe?g|png)$/
);

var retro02ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/retro-02-strecke",
  false,
  /\.(jpe?g|png)$/
);

var retro08ImageContext = require.context(
  "@/components/Pages/HomePage/PhotographyGallery/retro-08-strecke",
  false,
  /\.(jpe?g|png)$/
);

var imageContexts = {
  gallery: mainImageContext,
  retro01: retro01ImageContext,
  retro02: retro02ImageContext,
  retro08: retro08ImageContext,
  session02: session02ImageContext,
  session03: session03ImageContext,
  session07: session07ImageContext,
  session08: session08ImageContext,
  session61: session61ImageContext,
  session70: session70ImageContext,
};

var session61Files = [
  "photo_121.jpg",
  "photo_122.jpg",
  "photo_123.jpg",
  "photo_124.jpg",
  "photo_125.jpg",
  "photo_126.jpg",
  "photo_127.jpg",
  "photo_128.jpg",
  "photo_129.jpg",
  "photo_130.jpg",
];

var session02Files = [
  "photo_094.jpg",
  "photo_095.jpg",
  "photo_096.jpg",
  "photo_097.jpg",
  "photo_098.jpg",
  "photo_099.jpg",
  "photo_100.jpg",
  "photo_101.jpg",
  "photo_102.jpg",
  "photo_103.jpg",
  "photo_104.jpg",
  "photo_105.jpg",
  "photo_106.jpg",
  "photo_107.jpg",
];

var session03Files = [
  "photo_108.jpg",
  "photo_109.jpg",
  "photo_110.jpg",
];

var session07Files = [
  "photo_111.jpg",
  "photo_112.jpg",
  "photo_113.jpg",
  "photo_114.jpg",
  "photo_115.jpg",
  "photo_116.jpg",
  "photo_117.jpg",
];

var session08Files = [
  "photo_118.jpg",
  "photo_119.jpg",
  "photo_120.jpg",
];

var session70Files = [
  "photo_131.jpg",
  "photo_132.jpg",
  "photo_133.jpg",
  "photo_134.jpg",
  "photo_135.jpg",
  "photo_136.jpg",
  "photo_137.jpg",
];

var retro01Files = [
  "photo_091.jpg",
  "photo_092.jpg",
  "photo_093.jpg",
  "photo_094.jpg",
  "photo_095.jpg",
  "photo_096.jpg",
  "photo_097.jpg",
  "photo_098.jpg",
  "photo_099.jpg",
  "photo_100.jpg",
];

var retro02Files = [
  "photo_101.jpg",
  "photo_102.jpg",
  "photo_103.jpg",
  "photo_104.jpg",
  "photo_105.jpg",
  "photo_106.jpg",
  "photo_107.jpg",
  "photo_108.jpg",
  "photo_109.jpg",
  "photo_110.jpg",
  "photo_111.jpg",
  "photo_112.jpg",
  "photo_113.jpg",
  "photo_114.jpg",
];

var retro08Files = [
  "photo_115.jpg",
  "photo_116.jpg",
  "photo_117.jpg",
];

var attachedSeries = {
  "gallery/photo_061.jpg": {
    folder: "retro01",
    files: retro01Files,
  },
  "gallery/photo_062.jpg": {
    folder: "retro02",
    files: retro02Files,
  },
  "gallery/photo_068.jpg": {
    folder: "retro08",
    files: retro08Files,
  },
  "gallery/photo_064.jpg": {
    folder: "session61",
    files: session61Files,
  },
  "gallery/photo_065.jpg": {
    folder: "session02",
    files: session02Files,
  },
  "gallery/photo_050.jpg": {
    folder: "session03",
    files: session03Files,
  },
  "gallery/photo_031.jpg": {
    folder: "session07",
    files: session07Files,
  },
  "gallery/photo_071.jpg": {
    folder: "session08",
    files: session08Files,
  },
  "gallery/photo_073.jpg": {
    folder: "session70",
    files: session70Files,
  },
};

var galleryPhotos = [
  ["gallery", "photo_006.jpg", "photo_006.jpg", "One sneaker under glass"],
  ["gallery", "photo_064.jpg", "photo_064.jpg", "Desert tail lights"],
  ["gallery", "photo_063.jpg", "photo_063.jpg", "Bicycles under the canal bridge"],
  ["gallery", "photo_030.jpg", "photo_030.jpg", "Oranges in the hallway"],
  ["gallery", "photo_035.jpg", "photo_035.jpg", "Rooftop towel after rain"],
  ["gallery", "photo_053.jpg", "photo_053.jpg", "Train compartment morning"],
  ["gallery", "photo_033.jpg", "photo_033.jpg", "Disco ball inspection"],
  ["gallery", "photo_040.jpg", "photo_040.jpg", "Balcony coffee morning"],
  ["gallery", "photo_084.jpg", "photo_084.jpg", "Ivory blazer parquet"],
  ["gallery", "photo_087.jpg", "photo_087.jpg", "Rooftop camel coat"],
  ["gallery", "photo_034.jpg", "photo_034.jpg", "Receipt with main character energy"],
  ["gallery", "photo_043.jpg", "photo_043.jpg", "Grapefruit in the kitchen sink"],
  ["gallery", "photo_046.jpg", "photo_046.jpg", "Flowers in the bathroom sink"],
  ["gallery", "photo_079.jpg", "photo_079.jpg", "Stairwell keys"],
  ["gallery", "photo_025.jpg", "photo_025.jpg", "Kitchen flash after midnight"],
  ["gallery", "photo_051.jpg", "photo_051.jpg", "Hotel floor morning blonde"],
  ["gallery", "photo_059.jpg", "photo_059.jpg", "Plant therapy, horizontal"],
  ["gallery", "photo_068.jpg", "photo_068.jpg", "Station wagon rain"],
  ["gallery", "photo_089.jpg", "photo_089.jpg", "Train platform couture"],
  ["gallery", "photo_004.jpg", "photo_004.jpg", "Mattress in the morning field"],
  ["gallery", "photo_085.jpg", "photo_085.jpg", "Diner velvet suit"],
  ["gallery", "photo_066.jpg", "photo_066.jpg", "Lake lantern"],
  ["gallery", "photo_065.jpg", "photo_065.jpg", "Motel boot morning"],
  ["gallery", "photo_093.jpg", "photo_093.jpg", "Firelight portrait"],
  ["gallery", "photo_037.jpg", "photo_037.jpg", "Courtyard doorway portrait"],
  ["gallery", "photo_028.jpg", "photo_028.jpg", "Cucumber with strap"],
  ["gallery", "photo_081.jpg", "photo_081.jpg", "Rural bicycle sunset"],
  ["gallery", "photo_058.jpg", "photo_058.jpg", "Gas station blue hour"],
  ["gallery", "photo_091.jpg", "photo_091.jpg", "Motel mirror velvet"],
  ["gallery", "photo_061.jpg", "photo_061.jpg", "Toilet roll on pedestal"],
  ["gallery", "photo_054.jpg", "photo_054.jpg", "Chair wearing glasses"],
  ["gallery", "photo_048.jpg", "photo_048.jpg", "Attic room in winter light"],
  ["gallery", "photo_086.jpg", "photo_086.jpg", "Stairwell column dress"],
  ["gallery", "photo_056.jpg", "photo_056.jpg", "Ditch bouquet and bicycle wheel"],
  ["gallery", "photo_007.jpg", "photo_007.jpg", "Espresso before the crash"],
  ["gallery", "photo_050.jpg", "photo_050.jpg", "Hotel room, morning window"],
  ["gallery", "photo_062.jpg", "photo_062.jpg", "Orange balanced, no notes"],
  ["gallery", "photo_077.jpg", "photo_077.jpg", "Coastal rock morning"],
  ["gallery", "photo_027.jpg", "photo_027.jpg", "Canal railing at dusk"],
  ["gallery", "photo_044.jpg", "photo_044.jpg", "Key on a cord"],
  ["gallery", "photo_003.jpg", "photo_003.jpg", "Ferry deck at sunrise"],
  ["gallery", "photo_005.jpg", "photo_005.jpg", "Bouquet at the night bus stop"],
  ["gallery", "photo_078.jpg", "photo_078.jpg", "Velvet sofa morning"],
  ["gallery", "photo_052.jpg", "photo_052.jpg", "Diner window at 2am"],
  ["gallery", "photo_067.jpg", "photo_067.jpg", "Bathroom mirror flash"],
  ["gallery", "photo_055.jpg", "photo_055.jpg", "Cherry tomato proof"],
  ["gallery", "photo_069.jpg", "photo_069.jpg", "Fire clearing"],
  ["gallery", "photo_001.jpg", "photo_001.jpg", "Mask says maybe"],
  ["gallery", "photo_073.jpg", "photo_073.jpg", "Attic record light"],
  ["gallery", "photo_032.jpg", "photo_032.jpg", "Rehearsal room flash"],
  ["gallery", "photo_071.jpg", "photo_071.jpg", "Clawfoot flash"],
  ["gallery", "photo_031.jpg", "photo_031.jpg", "Apple at the laundromat"],
  ["gallery", "photo_076.jpg", "photo_076.jpg", "Headlight asphalt"],
  ["gallery", "photo_075.jpg", "photo_075.jpg", "Road atlas still life"],
  ["gallery", "photo_049.jpg", "photo_049.jpg", "Almost hiding"],
  ["gallery", "photo_057.jpg", "photo_057.jpg", "Corner shop after closing"],
  ["gallery", "photo_082.jpg", "photo_082.jpg", "Garage motorcycle"],
  ["gallery", "photo_036.jpg", "photo_036.jpg", "Baguette listening session"],
  ["gallery", "photo_038.jpg", "photo_038.jpg", "Ladder portrait"],
  ["gallery", "photo_074.jpg", "photo_074.jpg", "Wooden bus shelter"],
  ["gallery", "photo_002.jpg", "photo_002.jpg", "Black socks as sculpture"],
  ["gallery", "photo_060.jpg", "photo_060.jpg", "Friends on the wet side street"],
  ["gallery", "photo_039.jpg", "photo_039.jpg", "Empty pool at sunset"],
  ["gallery", "photo_047.jpg", "photo_047.jpg", "Elevator bouquet flash"],
  ["gallery", "photo_072.jpg", "photo_072.jpg", "River blanket"],
  ["gallery", "photo_070.jpg", "photo_070.jpg", "Platform dawn"],
  ["gallery", "photo_083.jpg", "photo_083.jpg", "Rain window portrait"],
  ["gallery", "photo_042.jpg", "photo_042.jpg", "Back seat by the lake"],
  ["gallery", "photo_029.jpg", "photo_029.jpg", "Disco ball in the saucepan"],
  ["gallery", "photo_045.jpg", "photo_045.jpg", "Bathroom haircut flash"],
  ["gallery", "photo_088.jpg", "photo_088.jpg", "Empty pool fashion"],
  ["gallery", "photo_041.jpg", "photo_041.jpg", "Gummy bear for dinner"],
  ["gallery", "photo_026.jpg", "photo_026.jpg", "Party hat afterparty"],
];

var photos = galleryPhotos.map(([folder, file, caption, title], index) => {
  var id = String(index + 1).padStart(3, "0");
  var src = imageContexts[folder](`./${file}`);
  var alt = `${title}, flash photography ${id}`;
  var photoFile = `${folder}/${file}`;
  var series = [{
    file: photoFile,
    src,
    alt,
  }];
  var attachedPhotoSeries = attachedSeries[photoFile];

  if (attachedPhotoSeries) {
    series.push(...attachedPhotoSeries.files.map((seriesFile, seriesIndex) => ({
      file: `${attachedPhotoSeries.folder}/${seriesFile}`,
      src: imageContexts[attachedPhotoSeries.folder](`./${seriesFile}`),
      alt: `${title}, photo series image ${seriesIndex + 2}`,
    })));
  }

  return {
    id,
    file: photoFile,
    caption,
    title,
    src,
    alt,
    series,
  };
});

export default {
  name: "PhotographyGallery",
  data() {
    return {
      photos,
      activePhotoIndex: null,
      activeSeriesIndex: 0,
    };
  },
  computed: {
    activePhoto() {
      return this.activePhotoIndex === null ? null : this.photos[this.activePhotoIndex];
    },
    activeSlide() {
      return this.activePhoto ? this.activePhoto.series[this.activeSeriesIndex] : null;
    },
    activeSeriesLabel() {
      if (!this.activePhoto || this.activePhoto.series.length < 2) {
        return "";
      }

      return ` / ${this.activeSeriesIndex + 1} of ${this.activePhoto.series.length}`;
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    openPhoto(photo) {
      this.activePhotoIndex = this.photos.findIndex((item) => item.file === photo.file);
      this.activeSeriesIndex = 0;
    },
    closePhoto() {
      this.activePhotoIndex = null;
      this.activeSeriesIndex = 0;
    },
    showPreviousPhoto() {
      if (this.activePhotoIndex === null) {
        return;
      }

      if (this.activeSeriesIndex > 0) {
        this.activeSeriesIndex -= 1;
        return;
      }

      this.activePhotoIndex = (this.activePhotoIndex - 1 + this.photos.length) % this.photos.length;
      this.activeSeriesIndex = this.activePhoto.series.length - 1;
    },
    showNextPhoto() {
      if (this.activePhotoIndex === null) {
        return;
      }

      if (this.activeSeriesIndex < this.activePhoto.series.length - 1) {
        this.activeSeriesIndex += 1;
        return;
      }

      this.activePhotoIndex = (this.activePhotoIndex + 1) % this.photos.length;
      this.activeSeriesIndex = 0;
    },
    handleKeydown(event) {
      if (this.activePhotoIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        this.closePhoto();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.showPreviousPhoto();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.showNextPhoto();
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
  background: var(--page-background);
  box-shadow: none !important;
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

.photography-gallery__caption {
  text-wrap: balance;
}

.photography-gallery__number {
  opacity: 0.82;
}

.photography-gallery__thumb img {
  display: block;
  max-height: 100%;
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

.photography-gallery__modal {
  background: var(--page-background);
}

.photography-gallery__modal,
.photography-gallery__modal * {
  transform: none !important;
}

.photography-gallery__modal-image-button {
  border: 0;
  background: transparent;
  box-shadow: none;
}

.photography-gallery__modal-image {
  display: block;
  filter: saturate(0.96) contrast(1);
}

.photography-gallery__modal-control {
  border: 0;
  background: transparent;
  box-shadow: none;
}

.photography-gallery__series {
  width: max-content;
  scrollbar-width: none;
}

.photography-gallery__series::-webkit-scrollbar {
  display: none;
}

.photography-gallery__series-thumb {
  width: 2.6rem;
  height: 2.6rem;
  flex: 0 0 auto;
  padding: 0;
  border: 1px solid transparent;
  background: transparent;
  opacity: 0.48;
  transition:
    opacity 160ms ease,
    border-color 160ms ease;
}

.photography-gallery__series-thumb:hover,
.photography-gallery__series-thumb:focus-visible,
.photography-gallery__series-thumb--active {
  border-color: currentColor;
  opacity: 1;
}

.photography-gallery__series-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photography-gallery__modal-close {
  right: 0;
  left: 0;
  width: max-content;
  margin-inline: auto;
}

.photography-gallery__modal-arrow {
  position: fixed;
  top: 50%;
  z-index: 80;
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  color: #44403c;
  font-size: 1.4rem;
  line-height: 1;
}

.photography-gallery__modal-arrow--prev {
  left: clamp(1rem, 3vw, 2rem);
}

.photography-gallery__modal-arrow--next {
  right: clamp(1rem, 3vw, 2rem);
}

@media (min-width: 1024px) {
  .photography-gallery__modal-close {
    right: auto;
    left: 1.25rem;
    margin-inline: 0;
  }
}

@media (max-width: 768px) {
  .photography-gallery__item,
  .photography-gallery__item:nth-child(6n + 2),
  .photography-gallery__item:nth-child(6n + 4),
  .photography-gallery__item:nth-child(6n + 5) {
    margin-top: 0;
  }

  .photography-gallery__modal-arrow {
    bottom: 5rem;
    top: auto;
  }
}
</style>
