<!-- /src/components/ArticlePage.vue -->
 
<template>
  <div id="app">
    <img :src="article.coverUrl"/>
    <h1>{{article.title}}</h1>
    <h2>{{article.subtitle}}</h2>
    <p>Posted by <span>{{article.author}}</span></p>
    <p v-for="p in article">
       <span v-html="p"></span>
    </p>
  </div>
</template>
 
<script>
import { getArticles } from '@polyblog/polyblog-js-client';
import { useRouter } from 'vue-router';
export default {
  name:'ArticlePage',
  data() {
    return {
      article: [],
    }
  },
  async created() {
    this.article = await this.getArticle();
  },
  methods: {
    getArticle: async () => {
      const slug = useRouter().currentRoute.value.params.slug
      const locale = useRouter().currentRoute.value.params.locale
      let data = await getArticles({
        // signup at https://www.polyblog.io/signup to get your blogId
        blogId: 'YOUR_BLOGID',
        published: true,
        slug,
        locale: locale
      });
      data = data?.[0];
      return data;
    }
  },
 
 
}
</script>
