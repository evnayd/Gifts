<template>
  <div class="pt-24 px-60 relative pb-12">
    <nav
      class=" font-bold font-sm list-none  px-28 pb-14 border-b-2 border-black mb-12"
    >
      <ul class="flex justify-between ">
        <li>Home</li>
        <li>About</li>
        <li class="font-Homemade font-normal text-yellow-500  ">
          logo
        </li>
        <li>Service</li>
        <li>Blog</li>
      </ul>
    </nav>
    <ul class="flex justify-between px-60 mb-16">
      <li v-for="social in socials" :key="social.id" v-bind:social="social">
        <a :href="social.link">
          <img :src="social.img" :alt="social.alt" />
        </a>
      </li>
      
    </ul>
    <div class="text-center">
      <p class="font-light">&#169; 2010-2020 Privacy - Terms</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  computed: {
    socials() {
      return this.$store.state.socials;
    },
}
};
</script>
