<template>
  <div class="text-center p-32 bg-white">
    <h1 class="text-2xl font-light mb-2">Gifts for all Occasions</h1>
    <p class="text-sm mb-14">
      “Try our web app to find the best gifts for all occasions”
    </p>
    <ul class="flex justify-between ">
      <li v-for="occasion in occasions" :key="occasion.id" v-bind:occasion="occasion"
        class=" m-2 w-64 bg-gray-50 text-left font-light hover:bg-transparent hover:shadow-xl"
      >
        <img :src="occasion.img"  alt="Occasion photo" />
        <div class="p-5">
          <h1 class="mb-11">{{occasion.name}}</h1>
          <a class="text-xs">See more</a>
        </div>
      </li>
     
      
    </ul>
  </div>
</template>
<script>
export default {
  name: "Occasions",
   computed: {
    occasions() {
      return this.$store.state.occasions;
    },
}
};
</script>
