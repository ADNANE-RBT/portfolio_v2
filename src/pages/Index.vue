<template>
<!-- <div class="">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br />Start using our app today.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div class="relative mt-16 h-80 lg:mt-8">
            <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="1824" height="1080" />
          </div>
        </div>
      </div>
    </div> -->
    <div class=" text-gray-900 dark:text-white "></div>
    
    <div class="relative isolate px-6  lg:px-8 flex flex-nowrap">
        <!-- designs absolute pos -->
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-[30deg] bg-gradient-to-tr from-[#282C33] to-rmadi-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        
        <!-- Container -->
         <div class=" hidden md:flex">
            <div class="  relative space-y-10 pt-32 before:absolute before:inset-0 md:before:translate-y-12  md:before:translate-x-5 before:h-64  before:w-0.5 before:bg-gradient-to-b before:from-main-bg-950 before:via-main-bg-800 before:to-main-bg-500 ">

                        <!-- social media items -->
                        <div class="relative flex items-center justify-between md:justify-normal ">
                            <!-- Icon -->
                            <div class="flex items-center justify-center w-10 h-10 rounded-full  bg-transparent  shadow shrink-0 md:order-1 ">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="45" height="45" rx="22.5" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 0C10.0687 0 0 10.0687 0 22.5C0 32.4562 6.44062 40.8656 15.3844 43.8469C16.5094 44.0438 16.9312 43.3688 16.9312 42.7781C16.9312 42.2438 16.9031 40.4719 16.9031 38.5875C11.25 39.6281 9.7875 37.2094 9.3375 35.9437C9.08437 35.2969 7.9875 33.3 7.03125 32.7656C6.24375 32.3437 5.11875 31.3031 7.00313 31.275C8.775 31.2469 10.0406 32.9062 10.4625 33.5812C12.4875 36.9844 15.7219 36.0281 17.0156 35.4375C17.2125 33.975 17.8031 32.9906 18.45 32.4281C13.4437 31.8656 8.2125 29.925 8.2125 21.3187C8.2125 18.8719 9.08438 16.8469 10.5188 15.2719C10.2938 14.7094 9.50625 12.4031 10.7437 9.30937C10.7437 9.30937 12.6281 8.71875 16.9312 11.6156C18.7312 11.1094 20.6438 10.8562 22.5563 10.8562C24.4688 10.8562 26.3813 11.1094 28.1813 11.6156C32.4844 8.69063 34.3688 9.30937 34.3688 9.30937C35.6063 12.4031 34.8188 14.7094 34.5938 15.2719C36.0281 16.8469 36.9 18.8437 36.9 21.3187C36.9 29.9531 31.6406 31.8656 26.6344 32.4281C27.45 33.1312 28.1531 34.4813 28.1531 36.5906C28.1531 39.6 28.125 42.0188 28.125 42.7781C28.125 43.3688 28.5469 44.0719 29.6719 43.8469C38.5594 40.8656 45 32.4281 45 22.5C45 10.0687 34.9313 0 22.5 0Z" fill="#1B1F23"/>
                                </svg>
                            </div>


                        </div>
                        <div class="relative flex items-center justify-between md:justify-normal ">
                            <!-- Icon -->
                            <div class="flex items-center justify-center w-10 h-10 rounded-full  bg-transparent  text-slate-500 shadow shrink-0 md:order-1 ">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z" fill="#0077B5"/>
                                    <path d="M10.1406 18.28H16.1206V35H10.1406V18.28Z" fill="white"/>
                                    <path d="M28.8109 18.26C24.5409 18.26 23.8309 20.6 23.8309 20.6V18.28H19.2109V35H23.8809C23.8809 35 23.8809 26.72 23.8809 25.36C23.8809 23.99 24.6709 22.19 27.1909 22.19C29.7009 22.19 30.0009 24.65 29.9809 24.95C29.9509 25.25 29.9309 35 29.9309 35H34.8609C34.8609 35 34.8609 25.49 34.8609 23.4C34.8609 19.63 32.3409 18.26 28.8109 18.26V18.26Z" fill="white"/>
                                    <path d="M13.1384 15.98C14.7898 15.98 16.1284 14.6413 16.1284 12.99C16.1284 11.3387 14.7898 10 13.1384 10C11.4871 10 10.1484 11.3387 10.1484 12.99C10.1484 14.6413 11.4871 15.98 13.1384 15.98Z" fill="white"/>
                                    </svg>

                            </div>

                        </div>
                        <div class="relative flex items-center justify-between md:justify-normal ">
                            <!-- Icon -->
                            <div class="flex items-center justify-center w-10 h-10 bg-transparent rounded-full text-slate-500 shadow shrink-0 md:order-1 ">
                                    
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z" fill="white"/>
                                <path d="M30.6268 10H35.227L25.1769 20.5897L37 35H27.7426L20.4919 26.2603L12.1954 35H7.59241L18.342 23.6731L7 10H16.4924L23.0464 17.9885L30.6268 10ZM29.0122 32.4615H31.5613L15.1074 12.4051H12.372L29.0122 32.4615Z" fill="black"/>
                                </svg>

                            </div>

                        </div>
                    </div>
         </div>
        
        <!-- context of header-->
        <div class="ml-14 mr-24 w-full py-32 sm:py-48 lg:py-56 ">
          <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div> -->
          <div class="flex flex-nowrap rounded-lg shadow-md p-5 ">
            <div class="text-left mx-5 max-w-7xl w-2/3">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl  ">Adnane Riyadi is Aspiring <span class=" text-zraq-700"  >AI & Data Science</span>  student <br> And <span class=" text-zraq-700"  >Full Stack Engineer</span>  </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 ">
                    AI and Data Science student at FST Tangier and ALX with a background in Full Stack Engineering and two years of web
                    development experience. <br> Proficient in Python, TensorFlow, PyTorch, and data modeling. Experienced in AI model
                    development for path optimization and NLP. 
                    Strong problem-solving skills and attention to detail. Passionate about
                    integrating AI with Full Stack development to drive technological innovation.
                </p>
                <div class="mt-10 flex items-center justify-start gap-x-6">
                    <a href="#" class="rounded-md bg-zraq-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zraq-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zraq-700">Get In Touch</a>
                    <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a> -->
                </div>
            </div>
          
            <div class="relative h-80 -translate-y-16 ">
                <img class=" rounded-md bg-white/5 ring-1 ring-white/10" src="../assets/Image.png" alt="App screenshot"  />
            </div>
           
          </div>
          
        </div>
        <!-- more designs with absolute pos -->
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#282C33] to-rmadi-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
      </div> 
   
    <!-- <p class="text-black"> p>hi</p> -->
  </template>
  