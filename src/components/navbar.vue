<template>

      <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex  justify-between items-stretch lg:px-8 lg:gap-x-12 lg:pb-2" aria-label="Global">
          <div class="flex-none ">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Adnane Riyadi</span>
              <img class="h-6 w-auto " src="../assets/RBT-logo.svg" alt="" />
            </a>
          </div>
          <!-- mobile view -->
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <!-- laptop view -->
          <div class="hidden lg:flex lg:gap-x-12   lg:grow  justify-center items-center dark:bg-gradient-to-r dark:bg-opacity-25 from-[#282C33] via-rmadi-900 to-[#282C33]  rounded-b-xl ">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm  font-semibold leading-6 dark:text-white text-textsec-950 "> <span class="font-bold leading-6 dark:text-zraq-500 ">#</span> {{ item.name }}</a>
          </div>
          <div class="hidden lg:flex lg:flex-none lg:justify-end  ">
            <label class="inline-flex items-center cursor-pointer ">
                <input type="checkbox" value="" class="sr-only peer " @click="toggledarkmode">
                    <div class="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </nav>
        <!-- mobile sidebar -->
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50" />
          <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
   

  </template>
  
  <script setup>
  import { ref, watch  } from 'vue'

  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { Dialog, DialogPanel } from '@headlessui/vue'

  
  const navigation = [
    { name: 'Home', href: '#header' },
    { name: 'Education', href: '#edu' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#exp' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]
  const darkmode = ref(true)
  const mobileMenuOpen = ref(false)

  const toggledarkmode = () => {
  darkmode.value = !darkmode.value
  if (darkmode.value) {
    document.documentElement.classList.add('dark')

  } else {
    document.documentElement.classList.remove('dark')
  }
}
  </script>

