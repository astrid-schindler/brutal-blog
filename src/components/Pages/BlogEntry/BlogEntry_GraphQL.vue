<template>
  <div>
    <div v-if="data">
      <ImageText :page-headline="data.postById.title"
                 :page-type="'blog'"
                 :blog-author="data.postById.author"
                 :blog-category="data.postById.category"
                 :blog-date="data.postById.publishDate"
                 :page-picture="data.postById.imageUrl"
                 :page-content="data.postById.content"
      />
    </div>
  </div>
</template>

<script>
import ImageText from "@/components/Molecules/ImageText/ImageText";
import { useQuery } from 'villus';
import { useRoute } from 'vue-router';

export default {
  name: "BlogEntry_GraphQL",
  components: {ImageText},
  setup() {
    console.log('Hallo setup')
    const PostById = `
      query PostById ($id: String) {
        postById (id: $id){
            title
            publishDate
            author
            category
            imageUrl
            content
            id
            published
            slug
        }
      }
    `;
    const route = useRoute()
    const blogId = route.params.id
    const { data } = useQuery({
      query: PostById,
      variables: { id: blogId },
    });
    return { data };
  },
};
</script>