<!-- /src/components/BlogPage.vue -->
 
<template>
  <div id="app">
    <ul class="shows">
    <li
      v-for="article in articles"
      v-bind:key="article._id"
    >
    <router-link :to="{path: '/blog/'+ $route.params.locale + '/' + article.slug}">
    <p>{{article.slug}}</p>
    <div>
      <h1>{{article.title}}</h1>
      <div>{{article.subtitle}}</div>
    </div>
    </router-link>
    </li>
  </ul>
  </div>
</template>
 
<script>
import { getArticles } from '@polyblog/polyblog-js-client';
import { useRouter } from 'vue-router';
export default {
  name:'BlogPage',
  data() {
    return {
      articles: []
    }
  },
  async created () {
    this.articles = await this.getArticles();
  },
  methods: {
    getArticles: async () => {
      const locale = useRouter().currentRoute.value.params.locale
      let data = await getArticles({
        // signup at https://www.polyblog.io/signup to get your blogId
        blogId: 'YOUR_BLOGID',
        published: true,
        locale:locale
      });
      return data;
    }
  }
}
</script>
