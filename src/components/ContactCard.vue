<template>
	<section class="py-6 dark:text-white">
		<div class="grid max-w-6xl grid-cols-1 px-6 mx-auto  md:grid-cols-2 md:divide-x">
			<div class="py-6 md:py-0 ">
				<p class="pt-2 pb-4">Fill in the form to start a conversation or schedule a meeting </p>
				<div class="space-y-4">
          
                        <div class="flex items-center justify-center mr-6 ">
      <a href="https://calendly.com/adnanriyadi/30min" target="_blank" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-lg font-medium pl-2 pr-3 py-2 shadow-sm">
        
        schedule a meeting 
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" class="size-5 ml-2">
  <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clip-rule="evenodd" />
</svg>

      </a>
    </div> 
    
				</div>
			</div>
			<form class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ">
				<label class="block space-y-2">
					<span class="mb-2">Full name</span>
					<input type="text" placeholder="" class="block w-full p-1 rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-zraq-600 dark:bg-main-bg-200">
				</label>
				<label class="block space-y-2">
					<span class="mb-2">Email address</span>
					<input type="email" placeholder="" class="block w-full p-1 rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-zraq-600 dark:bg-rmadi-100">
				</label>
				<label class="block space-y-2">
					<span class="mb-1">Message</span>
					<textarea rows="3" class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-zraq-600 dark:text-black dark:bg-rmadi-100"></textarea>
				</label>
				<button type="button" class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-zraq-600 text-white dark:text-rmadi-50 focus:dark:ring-zraq-600 hover:dark:ring-zraq-600">Submit</button>
			</form>
		</div>
	</section>
</template>