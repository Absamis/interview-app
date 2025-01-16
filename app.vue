<template>
  <div>
    <NuxtLayout>
      <Header></Header>
      <NuxtPage />
      <footer class="bg-primary py-[3em] relative">
        <div class="absolute top-[-38px] h-[80px] w-full rounded-[100%] bg-primary"></div>
        <section class="px-[7em]">
          <div class="flex items-center">
            <IconsLogo />
            <h2 class=" font-picoblack text-xl text-primary-600 font-bold">Onlearn</h2>
          </div>
          <div class="flex">
            <div class="w-[30%]">
              <ul class="mt-5 text-primary-600 text-md">
                <li class="mb-3 text-md">
                  <span class="text-md font-medium flex items-center">
                    <span class=" text-2xl icon-[material-symbols--location-on-rounded]"></span>
                    <span class="ml-4">Address:</span>
                  </span>
                  <p class="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </li>

                <li class="mb-3 text-md">
                  <span class="text-md flex items-center">
                    <span class=" text-2xl icon-[material-symbols--phone-in-talk-rounded]"></span>
                    <span class="ml-4">Tel:+9229341037</span>
                  </span>
                </li>

                <li class="mb-3 text-md">
                  <span class="text-md flex items-center">
                    <span class=" text-2xl icon-[material-symbols--nest-clock-farsight-analog-outline]"></span>
                    <span class="ml-4">Response hours: 8 to 20</span>
                  </span>
                </li>

                <li class="mb-3 text-md">
                  <span class="text-md flex items-center">
                    <span class=" text-2xl icon-[material-symbols--mail]"></span>
                    <span class="ml-4">Email: info@onlearn.com</span>
                  </span>
                </li>
                
              </ul>
            </div>
            <div class="w-[20%]">
              <h4 class="text-lg text-[#0A033C] font-bold">Categories</h4>
              <ul class="mt-5">
                <li class="mb-3">
                  <a href="" class="text-primary-600 text-md">Counselling</a>
                </li>
                <li class="mb-3">
                  <a href="" class="text-primary-600 text-md">Health and fitness</a>
                </li>
                <li class="mb-3">
                  <a href="" class="text-primary-600 text-md">Individual development</a>
                </li>
                <li class="mb-3">
                  <a href="" class="text-primary-600 text-md">more</a>
                </li>
              </ul>
            </div>
            <div class="w-[15%]">
              <h4 class="text-lg text-[#0A033C] font-bold">Links</h4>
              <ul class="mt-5">
                <li class="mb-3">
                  <a href="" class="text-primary-600 text-md">About</a>
                </li>
                <li class="mb-3">
                  <a href="" class="text-primary-600 text-md">Blog</a>
                </li>
              </ul>
            </div>
            <div class="text-[#0A033C] flex-1 mt-5">
              <p class="text-center">Stay up to date with the latest courses</p>
              <div class="mt-4">
                <form action="">
                  <div class="rounded-xl flex p-2 px-3 bg-[#fff]">
                    <input type="text" class=" border-none outline-none p-0 w-3/4" />
                    <button type="submit" class=" py-3 text-sm font-semibold px-8 rounded-xl bg-primary-600 text-[#fff]">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </NuxtLayout>
  </div>
</template>
