<template>
  <div class="bg-gray-100">
    <find-gift></find-gift>
    <how-works></how-works>
  </div>
</template>

<script>
import FindGift from "../components/FindGift.vue";
import HowWorks from "../components/HowWorks.vue";

export default {
  name: "MainInfo",
  components: {
    FindGift,
    HowWorks,
  },
};
</script>
