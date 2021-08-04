<template>
  <div class="bg-gray-50 font-Georama">
    <page-header></page-header>
    <main-info></main-info>
    <occasions></occasions>
    <sign-up></sign-up>
    <blog></blog>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import MainInfo from "./components/MainInfo.vue";
import Occasions from "./components/Occasions.vue";
import SignUp from "./components/SignUp.vue";
import Blog from "./components/Blog.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    MainInfo,
    Occasions,
    SignUp,
    Blog,
    PageFooter,
  },
};
</script>

<style src="./assets/tailwind.css" />
