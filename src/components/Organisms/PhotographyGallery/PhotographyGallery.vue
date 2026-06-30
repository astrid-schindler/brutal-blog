<template>
  <div class="photography-gallery relative min-h-[100svh] overflow-hidden text-stone-700">
    <div class="photography-gallery__bar sticky top-[clamp(3.25rem,6vw,4.5rem)] z-30 grid w-full grid-cols-12 gap-x-[var(--layout-gap)] p-5 text-[clamp(0.74rem,1.68vw,1.51rem)] font-light leading-none text-stone-700 max-lg:grid-cols-8 max-lg:text-[clamp(0.67rem,2vw,1.17rem)] max-md:grid-cols-4 max-md:px-4 max-md:text-[0.67rem]">
      <p class="col-span-12 pl-1 max-lg:col-span-8 max-md:col-span-4">
        <span class="block text-[clamp(1.1rem,2.5vw,2.25rem)] max-lg:text-[clamp(1rem,3vw,1.75rem)] max-md:text-base">Photography</span>
        <span class="block pt-1 text-[0.55rem] font-light leading-tight tracking-normal max-md:text-[0.5rem]">
          Personal Archive / {{ photos.length }} Images
        </span>
      </p>
    </div>

    <div
      class="photography-gallery__grid grid w-full min-w-0 grid-cols-[repeat(auto-fit,minmax(min(17rem,100%),1fr))] gap-x-[clamp(1.5rem,4.5vw,4rem)] gap-y-[clamp(3.5rem,7vw,6.5rem)] px-[clamp(1rem,4vw,4rem)] py-[clamp(5rem,10vw,9rem)] max-sm:gap-y-12 max-sm:px-4 max-sm:py-16"
    >
      <article
        v-for="photo in photos"
        :key="photo.id"
        class="photography-gallery__item group relative grid min-h-[clamp(17rem,32vw,27rem)] content-center"
        :class="photoOrientationClass(photo)"
      >
        <button
          type="button"
          class="photography-gallery__thumb relative z-10 flex h-[clamp(16rem,30vw,26rem)] w-full cursor-pointer items-center justify-center p-0 transition-opacity duration-150 hover:opacity-75 focus-visible:outline-none max-md:h-[clamp(18rem,68vw,29rem)] max-sm:h-[min(74svh,27rem)]"
          @click="openPhoto(photo)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="h-auto max-h-full max-w-full object-contain"
            loading="lazy"
            @load="setPhotoOrientation(photo, $event)"
          >
        </button>

        <button
          type="button"
          class="photography-gallery__caption pointer-events-none z-20 mt-5 grid w-full grid-cols-[auto_1fr] gap-x-2 text-left text-xs font-light leading-tight text-stone-700 transition-opacity duration-100 max-md:mt-3 max-md:text-[0.72rem]"
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
  ["gallery", "photo_006.jpg", "DSCF0068.JPG", "One sneaker under glass"],
  ["gallery", "photo_064.jpg", "IMG_4064.JPG", "Desert tail lights"],
  ["gallery", "photo_063.jpg", "R1-063-14.JPG", "Bicycles under the canal bridge"],
  ["gallery", "photo_030.jpg", "000030.JPG", "Oranges in the hallway"],
  ["gallery", "photo_035.jpg", "DSCF1035.JPG", "Rooftop towel after rain"],
  ["gallery", "photo_053.jpg", "IMG_2053.JPG", "Train compartment morning"],
  ["gallery", "photo_033.jpg", "R2-033-09.JPG", "Disco ball inspection"],
  ["gallery", "photo_040.jpg", "000040.JPG", "Balcony coffee morning"],
  ["gallery", "photo_084.jpg", "DSCF2084.JPG", "Ivory blazer parquet"],
  ["gallery", "photo_087.jpg", "IMG_5087.JPG", "Rooftop camel coat"],
  ["gallery", "photo_034.jpg", "R1-034-22.JPG", "Receipt with main character energy"],
  ["gallery", "photo_043.jpg", "000043.JPG", "Grapefruit in the kitchen sink"],
  ["gallery", "photo_046.jpg", "DSCF3046.JPG", "Flowers in the bathroom sink"],
  ["gallery", "photo_079.jpg", "IMG_6079.JPG", "Stairwell keys"],
  ["gallery", "photo_025.jpg", "R3-025-04.JPG", "Kitchen flash after midnight"],
  ["gallery", "photo_051.jpg", "000051.JPG", "Hotel floor morning blonde"],
  ["gallery", "photo_059.jpg", "DSCF4059.JPG", "Plant therapy, horizontal"],
  ["gallery", "photo_068.jpg", "IMG_7068.JPG", "Station wagon rain"],
  ["gallery", "photo_089.jpg", "R1-089-18.JPG", "Train platform couture"],
  ["gallery", "photo_004.jpg", "000004.JPG", "Mattress in the morning field"],
  ["gallery", "photo_085.jpg", "DSCF5085.JPG", "Diner velvet suit"],
  ["gallery", "photo_066.jpg", "IMG_8066.JPG", "Lake lantern"],
  ["gallery", "photo_065.jpg", "R2-065-11.JPG", "Motel boot morning"],
  ["gallery", "photo_093.jpg", "000093.JPG", "Firelight portrait"],
  ["gallery", "photo_037.jpg", "DSCF6037.JPG", "Courtyard doorway portrait"],
  ["gallery", "photo_028.jpg", "IMG_9028.JPG", "Cucumber with strap"],
  ["gallery", "photo_081.jpg", "R1-081-03.JPG", "Rural bicycle sunset"],
  ["gallery", "photo_058.jpg", "000058.JPG", "Gas station blue hour"],
  ["gallery", "photo_091.jpg", "DSCF7091.JPG", "Motel mirror velvet"],
  ["gallery", "photo_061.jpg", "IMG_1061.JPG", "Toilet roll on pedestal"],
  ["gallery", "photo_054.jpg", "R3-054-16.JPG", "Chair wearing glasses"],
  ["gallery", "photo_048.jpg", "000048.JPG", "Attic room in winter light"],
  ["gallery", "photo_086.jpg", "DSCF8086.JPG", "Stairwell column dress"],
  ["gallery", "photo_056.jpg", "IMG_3056.JPG", "Ditch bouquet and bicycle wheel"],
  ["gallery", "photo_007.jpg", "R2-007-01.JPG", "Espresso before the crash"],
  ["gallery", "photo_050.jpg", "000050.JPG", "Hotel room, morning window"],
  ["gallery", "photo_062.jpg", "DSCF9062.JPG", "Orange balanced, no notes"],
  ["gallery", "photo_077.jpg", "IMG_4077.JPG", "Coastal rock morning"],
  ["gallery", "photo_027.jpg", "R1-027-20.JPG", "Canal railing at dusk"],
  ["gallery", "photo_044.jpg", "000044.JPG", "Key on a cord"],
  ["gallery", "photo_003.jpg", "DSCF0103.JPG", "Ferry deck at sunrise"],
  ["gallery", "photo_005.jpg", "IMG_5005.JPG", "Bouquet at the night bus stop"],
  ["gallery", "photo_078.jpg", "R3-078-08.JPG", "Velvet sofa morning"],
  ["gallery", "photo_052.jpg", "000052.JPG", "Diner window at 2am"],
  ["gallery", "photo_067.jpg", "DSCF1167.JPG", "Bathroom mirror flash"],
  ["gallery", "photo_055.jpg", "IMG_6055.JPG", "Cherry tomato proof"],
  ["gallery", "photo_069.jpg", "R2-069-13.JPG", "Fire clearing"],
  ["gallery", "photo_001.jpg", "000001.JPG", "Mask says maybe"],
  ["gallery", "photo_073.jpg", "DSCF2173.JPG", "Attic record light"],
  ["gallery", "photo_032.jpg", "IMG_7032.JPG", "Rehearsal room flash"],
  ["gallery", "photo_071.jpg", "R1-071-06.JPG", "Clawfoot flash"],
  ["gallery", "photo_031.jpg", "000031.JPG", "Apple at the laundromat"],
  ["gallery", "photo_076.jpg", "DSCF3176.JPG", "Headlight asphalt"],
  ["gallery", "photo_075.jpg", "IMG_8075.JPG", "Road atlas still life"],
  ["gallery", "photo_049.jpg", "R3-049-19.JPG", "Almost hiding"],
  ["gallery", "photo_057.jpg", "000057.JPG", "Corner shop after closing"],
  ["gallery", "photo_082.jpg", "DSCF4182.JPG", "Garage motorcycle"],
  ["gallery", "photo_036.jpg", "IMG_9036.JPG", "Baguette listening session"],
  ["gallery", "photo_038.jpg", "R2-038-05.JPG", "Ladder portrait"],
  ["gallery", "photo_074.jpg", "000074.JPG", "Wooden bus shelter"],
  ["gallery", "photo_002.jpg", "DSCF5202.JPG", "Black socks as sculpture"],
  ["gallery", "photo_060.jpg", "IMG_0060.JPG", "Friends on the wet side street"],
  ["gallery", "photo_039.jpg", "R1-039-17.JPG", "Empty pool at sunset"],
  ["gallery", "photo_047.jpg", "000047.JPG", "Elevator bouquet flash"],
  ["gallery", "photo_072.jpg", "DSCF6272.JPG", "River blanket"],
  ["gallery", "photo_070.jpg", "IMG_1070.JPG", "Platform dawn"],
  ["gallery", "photo_083.jpg", "R3-083-12.JPG", "Rain window portrait"],
  ["gallery", "photo_042.jpg", "000042.JPG", "Back seat by the lake"],
  ["gallery", "photo_029.jpg", "DSCF7229.JPG", "Disco ball in the saucepan"],
  ["gallery", "photo_045.jpg", "IMG_2045.JPG", "Bathroom haircut flash"],
  ["gallery", "photo_088.jpg", "R2-088-07.JPG", "Empty pool fashion"],
  ["gallery", "photo_041.jpg", "000041.JPG", "Gummy bear for dinner"],
  ["gallery", "photo_026.jpg", "DSCF8226.JPG", "Party hat afterparty"],
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
      photoOrientations: {},
      isLargeViewEnabled: true,
      largeViewMediaQuery: null,
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
    this.largeViewMediaQuery = window.matchMedia("(min-width: 769px)");
    this.updateLargeViewState();
    this.largeViewMediaQuery.addEventListener("change", this.updateLargeViewState);
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    this.largeViewMediaQuery?.removeEventListener("change", this.updateLargeViewState);
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    openPhoto(photo) {
      if (!this.isLargeViewEnabled) {
        return;
      }

      this.activePhotoIndex = this.photos.findIndex((item) => item.file === photo.file);
      this.activeSeriesIndex = 0;
    },
    closePhoto() {
      this.activePhotoIndex = null;
      this.activeSeriesIndex = 0;
    },
    photoOrientationClass(photo) {
      return this.photoOrientations[photo.id] ? `photography-gallery__item--${this.photoOrientations[photo.id]}` : "";
    },
    setPhotoOrientation(photo, event) {
      var image = event.target;
      var orientation = image.naturalWidth > image.naturalHeight ? "landscape" : "portrait";
      this.photoOrientations = {
        ...this.photoOrientations,
        [photo.id]: orientation,
      };
    },
    updateLargeViewState() {
      this.isLargeViewEnabled = this.largeViewMediaQuery?.matches ?? true;

      if (!this.isLargeViewEnabled) {
        this.closePhoto();
      }
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
      if (!this.isLargeViewEnabled || this.activePhotoIndex === null) {
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

.photography-gallery__item--landscape .photography-gallery__thumb {
  align-items: flex-end;
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
  align-self: start;
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

  .photography-gallery__thumb {
    cursor: default;
  }

  .photography-gallery__thumb:hover,
  .photography-gallery__thumb:focus-visible {
    transform: none;
  }

  .photography-gallery__thumb:hover img,
  .photography-gallery__thumb:focus-visible img {
    filter: saturate(0.92) contrast(0.98);
  }

  .photography-gallery__caption span span,
  .photography-gallery__caption span span:last-child {
    opacity: 1;
  }

  .photography-gallery__caption .absolute {
    display: none;
  }

  .photography-gallery__modal-arrow {
    bottom: 5rem;
    top: auto;
  }
}
</style>
