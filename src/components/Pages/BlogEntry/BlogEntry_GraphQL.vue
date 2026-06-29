<template>
  <main class="project-detail">
    <p v-if="isFetching" class="project-detail__state">Loading post...</p>
    <p v-else-if="error" class="project-detail__state">This post is currently unavailable.</p>
    <p v-else-if="!post" class="project-detail__state">Post not found.</p>

    <template v-else>
      <TheHeading class="project-detail__heading" :the-headline="post.title"></TheHeading>

      <p class="project-detail__meta">
        {{ [post.publishDate, post.author, post.category].filter(Boolean).join(" | ") }}
      </p>

      <div v-if="post.content" class="project-detail__content">
        {{ post.content }}
      </div>

      <section
        v-if="postImages.length"
        class="project-detail__gallery"
        :aria-label="`${post.title} image series`"
      >
        <figure
          v-for="(image, index) in postImages"
          :key="image"
          class="project-detail__figure"
        >
          <img
            :src="image"
            :alt="`${post.title}, image ${index + 1} of ${postImages.length}`"
            loading="lazy"
            decoding="async"
          >
          <figcaption>Image {{ String(index + 1).padStart(2, "0") }}</figcaption>
        </figure>
      </section>

      <router-link class="project-detail__back" to="/blog">
        Back to blog
      </router-link>
    </template>
  </main>
</template>

<script setup>
import {computed, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";

var route = useRoute();
var data = ref(null);
var isFetching = ref(true);
var error = ref(null);

watchEffect(async () => {
  isFetching.value = true;
  error.value = null;

  try {
    var module = await import(
      /* webpackChunkName: "blog-post-details" */
      "@/data/blogPostDetails"
    );
    data.value = module.default.find((currentPost) => currentPost.id === route.params.id) || null;
  } catch (currentError) {
    error.value = currentError;
    data.value = null;
  } finally {
    isFetching.value = false;
  }
});

var post = computed(() => {
  var currentPost = data.value;
  return currentPost?.published === false ? null : currentPost;
});

var postImages = computed(() => {
  var currentPost = post.value;
  if (!currentPost) {
    return [];
  }

  return currentPost.imageUrls?.length ? currentPost.imageUrls : [currentPost.imageUrl].filter(Boolean);
});
</script>

<style scoped>
.project-detail {
  width: min(100%, 76rem);
  margin-inline: auto;
  padding: clamp(4.75rem, 9vw, 7rem) clamp(1.25rem, 4vw, 3rem) clamp(5rem, 9vw, 7rem);
}

.project-detail__heading {
  margin-inline: auto;
}

.project-detail__heading :deep(.heading-frame) {
  justify-content: flex-start;
  padding: 0;
  text-align: left;
}

.project-detail__heading :deep(.section-heading) {
  padding: 0;
}

.project-detail__state,
.project-detail__meta,
.project-detail__content,
.project-detail__gallery,
.project-detail__back {
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-size: 0.78rem;
  font-weight: 300;
  line-height: 1.9;
}

.project-detail__state {
  margin: 0;
}

.project-detail__meta {
  margin: clamp(2rem, 5vw, 3.5rem) 0 0;
  color: #57534e;
  font-size: 0.72rem;
}

.project-detail__content {
  width: min(100%, 42rem);
  margin: clamp(2rem, 5vw, 3.5rem) auto 0;
  white-space: pre-line;
  text-transform: none;
}

.project-detail__gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(2rem, 5vw, 4rem);
  justify-items: center;
  margin-top: clamp(3rem, 7vw, 5rem);
}

.project-detail__figure {
  width: 100%;
  max-width: min(100%, 46rem);
  margin: 0;
  content-visibility: auto;
  contain-intrinsic-size: 48rem 36rem;
}

.project-detail__figure:nth-child(3n + 1) {
  grid-column: 1 / -1;
  max-width: min(100%, 62rem);
}

.project-detail__figure img {
  display: block;
  width: 100%;
  max-height: min(76svh, 46rem);
  object-fit: contain;
  filter: saturate(0.9) contrast(0.98);
}

.project-detail__figure figcaption {
  margin-top: 0.7rem;
  color: #57534e;
  font-size: 0.68rem;
  line-height: 1.4;
  text-align: center;
}

.project-detail__back {
  display: inline-block;
  margin-top: clamp(2rem, 5vw, 3.5rem);
  color: #57534e;
  text-decoration: underline;
  text-underline-offset: 0.24em;
}

@media (max-width: 1024px) {
  .project-detail {
    width: min(100%, 42rem);
    padding-top: clamp(4.5rem, 11vw, 6rem);
  }

  .project-detail__heading :deep(.heading-frame) {
    justify-content: center;
    text-align: center;
  }

  .project-detail__meta,
  .project-detail__content {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .project-detail {
    padding-inline: 1rem;
  }

  .project-detail__gallery {
    grid-template-columns: 1fr;
  }

  .project-detail__figure:nth-child(3n + 1) {
    grid-column: auto;
  }

  .project-detail__figure,
  .project-detail__figure:nth-child(3n + 1) {
    max-width: min(100%, 36rem);
  }

  .project-detail__figure img {
    max-height: min(72svh, 34rem);
  }
}
</style>
