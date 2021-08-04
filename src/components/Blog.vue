<template>
  <div class="text-center p-32 bg-white">
    <h1 class="text-2xl font-light mb-2">Our Best Blogs Ever</h1>
    <p class="text-sm mb-14">
      "Try our blog to find best tips and tricks to select your gift"
    </p>
    <div class="flex bg-gray-900 text-white font-light  mb-10">
      <img src="../assets/wedding.jpg" alt="wedding photoshoot" />
      <div class="p-20 text-left">
        <p class="text-xs">Mr. Jhon Doe</p>
        <h2 class="text-4xl mt-8 mb-20">The best way to wish your wife</h2>
        <a class="text-sm">Read more</a>
      </div>
    </div>
    <ul class="flex justify-between ">
      <li class="text-left p-14  hover:shadow-xl w-1/2 mr-10">
        <!--odd:mr-10-->
        <h2 class="text-base font-bold mb-8">
          Database to find the gifts for your girlfriend
        </h2>
        <p class="text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore...
        </p>
        <p class="text-xs">Read More</p>
      </li>
      <li class="text-left p-14 hover:shadow-xl w-1/2 ">
        <h2 class="text-base font-bold">
          Database to find the gifts for your girlfriend
        </h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore...
        </p>
        <p class="text-xs">Read More</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>
