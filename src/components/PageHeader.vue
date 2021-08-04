<template>
  <div class="flex justify-between  w-full px-24 py-4">
    <div class="font-Homemade">logo</div>
    <navigation></navigation>
    <button
      class="text-sm uppercase border-2 px-6 py-2  border-yellow-500  rounded-md text-yellow-500"
    >
      Gift Finder
    </button>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "PageHeader",
  components: {
    Navigation,
  },
};
</script>
