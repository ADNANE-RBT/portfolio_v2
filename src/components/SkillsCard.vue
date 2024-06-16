<template>
    <div class="py-10">
      <div class="mx-auto px-6 lg:px-8">
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="skill in skills" :key="skill.id" class="flex max-w-xl flex-col items-start justify-between p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <div class="group relative">
              <h3 class="mt-3 text-xl font-semibold leading-6 text-zraq-500 dark:text-white dark:group-hover:text-rmadi-100 group-hover:text-zraq-600">
                <a :href="skill.href">
                  <span class="absolute inset-0" />
                  {{ skill.title }}
                </a>
              </h3>
              <div class="mt-4">
                <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Languages</h4>
                <ul class="list-disc ml-8 mt-1">
                  <li v-for="language in skill.languages" :key="language" class="text-gray-600 dark:text-gray-400">{{ language }}</li>
                </ul>
              </div>
              <div class="mt-4">
                <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Frameworks & Libraries</h4>
                <ul class="list-disc ml-8 mt-1">
                  <li v-for="framework in skill.frameworks" :key="framework" class="text-gray-600 dark:text-gray-400">{{ framework }}</li>
                </ul>
              </div>
              <div class="mt-4" v-if="skill.tools">
                <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Tools & Technologies</h4>
                <ul class="list-disc ml-8 mt-1">
                  <li v-for="tool in skill.tools" :key="tool" class="text-gray-600 dark:text-gray-400">{{ tool }}</li>
                </ul>
              </div>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <div class="group relative">
              <h3 class="mt-3 text-xl font-semibold leading-6 text-zraq-500 dark:text-white dark:group-hover:text-rmadi-100 group-hover:text-zraq-600">
                <a >
                  <span class="absolute inset-0" />
                  Cloud & DevOps
                </a>
              </h3>
              <div class="mt-4">
                <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Platforms</h4>
                <ul class="list-disc ml-8 mt-1">
                  <li class="text-gray-600 dark:text-gray-400">AWS</li>
                  <li class="text-gray-600 dark:text-gray-400">Azure</li>
                </ul>
              </div>
              <div class="mt-4">
                <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Tools</h4>
                <ul class="list-disc ml-8 mt-1">
                  <li  class="text-gray-600 dark:text-gray-400">Docker</li>
                  <li  class="text-gray-600 dark:text-gray-400">Git</li>
                </ul>
              </div>
              <div class="mt-4" >
                <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Technologies</h4>
                <ul class="list-disc ml-8 mt-1">
                  <li class="text-gray-600 dark:text-gray-400">CI/CD</li>
                  <li class="text-gray-600 dark:text-gray-400">Cloud Computing</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
    const skills = [
      {
        id: 1,
        title: 'Full Stack Engineering',
        languages: ['Python', 'JavaScript', 'PHP'],
        frameworks: ['Laravel', 'Vue.js', 'Node.js', 'Magento'],
        tools: ['Docker', 'Git', 'TailwindCSS', 'MySQL', 'WordPress']
      },
      {
        id: 2,
        title: 'AI & Data Science',
        languages: ['Python', 'Go', 'R'],
        frameworks: ['TensorFlow', 'PyTorch', 'SciKit-Learn', 'Matplotlib', 'Seaborn'],
        tools: ['Apache Spark', 'Hadoop', 'Computer Vision', 'NLP']
      },

    ]
  </script>
  
  <style scoped>
  .bg-gray-50 {
    background-color: #f9fafb;
  }
  </style>
  