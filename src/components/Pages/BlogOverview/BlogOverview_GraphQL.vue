<template>
  <main class="projects-page">
    <TheHeading class="projects-page__heading" the-headline="blog"></TheHeading>

    <p v-if="isFetching" class="projects-page__state">Loading blog...</p>
    <p v-else-if="error" class="projects-page__state">Blog is currently unavailable.</p>
    <p v-else-if="!posts.length" class="projects-page__state">No posts published yet.</p>

    <section v-else class="projects-list" aria-label="Blog posts">
      <article
        v-for="(post, index) in posts"
        :key="post.id"
        class="project-card"
        :class="{'project-card--reverse': index % 2 === 1}"
      >
        <router-link
          v-if="post.imageUrl"
          class="project-card__image-link"
          :to="`/blogpost/${post.id}`"
          :aria-label="`Open ${post.title}`"
        >
          <img
            :src="post.imageUrl"
            :alt="post.title"
            loading="lazy"
            decoding="async"
          >
        </router-link>

        <div class="project-card__content">
          <router-link class="project-card__title-link" :to="`/blogpost/${post.id}`">
            <h2>{{ post.title }}</h2>
          </router-link>
          <p class="project-card__meta">
            {{ [post.publishDate, post.author, post.category].filter(Boolean).join(" | ") }}
          </p>
          <p v-if="post.excerpt" class="project-card__excerpt">{{ post.excerpt }}</p>
          <router-link class="project-card__read-more" :to="`/blogpost/${post.id}`">
            View post
          </router-link>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import {computed} from "vue";
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import blogPreviews from "@/data/blogPreviews";

var isFetching = false;
var error = null;

var posts = computed(() => {
  return blogPreviews.filter((post) => post.published !== false);
});
</script>

<style scoped>
.projects-page {
  width: min(100%, 76rem);
  margin-inline: auto;
  padding: clamp(4.75rem, 9vw, 7rem) clamp(1.25rem, 4vw, 3rem) clamp(5rem, 9vw, 7rem);
}

.projects-page__heading {
  margin-inline: auto;
}

.projects-page__heading :deep(.heading-frame) {
  justify-content: flex-start;
  padding: 0;
  text-align: left;
}

.projects-page__heading :deep(.section-heading) {
  padding: 0;
}

.projects-page__state {
  margin: clamp(3rem, 7vw, 5rem) 0 0;
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-size: 0.78rem;
  font-weight: 300;
  line-height: 1.9;
}

.projects-list {
  display: grid;
  gap: clamp(4rem, 9vw, 7rem);
  padding-top: clamp(3rem, 7vw, 5.5rem);
}

.project-card {
  display: grid;
  grid-template-columns: minmax(15rem, 0.82fr) minmax(18rem, 1fr);
  align-items: center;
  gap: clamp(2.5rem, 8vw, 7rem);
}

.project-card--reverse {
  grid-template-columns: minmax(18rem, 1fr) minmax(15rem, 0.82fr);
}

.project-card--reverse .project-card__image-link {
  order: 2;
}

.project-card--reverse .project-card__content {
  order: 1;
  text-align: right;
}

.project-card__image-link {
  display: block;
}

.project-card__image-link img {
  display: block;
  width: 100%;
  height: clamp(20rem, 48vw, 34rem);
  aspect-ratio: 4 / 5;
  object-fit: cover;
  filter: saturate(0.88) contrast(0.98);
}

.project-card__content {
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-size: 0.78rem;
  font-weight: 300;
  line-height: 1.9;
}

.project-card__title-link {
  display: inline-block;
  text-decoration: none;
}

.project-card h2 {
  margin: 0;
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-size: clamp(1.4rem, 3vw, 2.6rem);
  font-weight: 300;
  line-height: 1.08;
  text-transform: lowercase;
}

.project-card__meta {
  margin: 1rem 0 0;
  color: #57534e;
  font-size: 0.72rem;
  line-height: 1.5;
}

.project-card__excerpt {
  display: -webkit-box;
  margin: clamp(1.25rem, 3vw, 2rem) 0 0;
  overflow: hidden;
  text-transform: none;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.project-card__read-more {
  display: inline-block;
  margin-top: 1.25rem;
  color: #57534e;
  font-size: 0.72rem;
  text-decoration: underline;
  text-underline-offset: 0.24em;
}

@media (max-width: 1024px) {
  .projects-page {
    width: min(100%, 42rem);
    padding-top: clamp(4.5rem, 11vw, 6rem);
  }

  .projects-page__heading :deep(.heading-frame) {
    justify-content: center;
    text-align: center;
  }

  .projects-list {
    padding-top: clamp(2.25rem, 7vw, 4rem);
  }

  .project-card,
  .project-card--reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card--reverse .project-card__image-link,
  .project-card--reverse .project-card__content {
    order: initial;
  }

  .project-card__content,
  .project-card--reverse .project-card__content {
    text-align: center;
  }

  .project-card__image-link img {
    height: clamp(18rem, 72vw, 31rem);
  }
}

@media (max-width: 768px) {
  .projects-page {
    padding-inline: 1rem;
  }
}
</style>
