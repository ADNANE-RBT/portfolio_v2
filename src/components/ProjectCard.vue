<template>

<div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
  <div class="relative overflow-hidden rounded-t-xl border-x border-t border-rmadi-400">
    <img :src="resolvedImagePath"  :alt="title" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
  </div>
  <div class="w-full flex flex-wrap gap-1 p-2 border-b border-x border-rmadi-400 shadow-lg">
      <span v-for="(hashtag, index) in hashtags" :key="index" class="bg-gray-100 transition duration-500 hover:scale-105 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 inline-block">
        {{ hashtag }}
      </span>
    </div>
  <div class="mt-6 relative">
    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ title }}</h3>
    <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">{{ description }}  </p>
    <div class=" flex justify-start items-center -translate-x-2 px-2 dark:text-zraq-500 hover:text-zraq-300 fill-zraq-500 hover:fill-zraq-300 transform transition-transform duration-300 ease-in-out hover:translate-x-2">
      <a class="inline-block pb-1 mr-2" :href="link" target="_blank">
        <span class=" rounded-md ">Read more</span>
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4  ">
        <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</div>


  

  
</template>


<script setup>
  import { defineProps, computed ,onMounted  } from 'vue'
  import { ref } from 'vue'
 
const props = defineProps({
    title: String,
    description: String,
    image: String,
    link: String,
    hashtags: Array
  })

  const resolvedImagePath = ref('');

onMounted(async () => {
  const images = import.meta.glob('../assets/*.{jpg,png,jpeg,gif,svg}');
  const imagePath = Object.keys(images).find(path => path.includes(props.image));
  if (imagePath) {
    resolvedImagePath.value = (await images[imagePath]()).default;
  } else {
    console.error(`Image not found: ${props.image}`);
    resolvedImagePath.value = '';
  }
});

  </script> 
