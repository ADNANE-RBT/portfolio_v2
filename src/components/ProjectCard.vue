<template>
    <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      <div class="relative overflow-hidden rounded-xl">
        <img :src="image" :alt="title" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
      </div>
      <div class="mt-6 relative">
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ title }}</h3>
        <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">{{ description }}</p>
        <a class="inline-block" :href="link">
          <span class="text-info dark:text-blue-300">Read more</span>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    title: String,
    description: String,
    image: String,
    link: String
  })
  </script>
  