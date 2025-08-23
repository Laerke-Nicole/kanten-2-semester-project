<template>
    <div class="hero relative w-full">
  
        <div id="default-carousel" class="relative w-full h-full z-10" data-carousel="slide">
          
          <!-- Carousel wrapper -->
          <div class="slide-container relative h-80 overflow-hidden md:h-96 rounded-none">
              <!-- Item 1 -->
              <div class="block duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-2.jpg?alt=media&token=17a1c776-a52f-418f-9213-fdf9b04bc6a2" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-3.jpg?alt=media&token=5a569a19-5b00-4bbe-89ab-6ad0a5737a14" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-4.jpg?alt=media&token=59922db7-f09d-4bec-96e4-199becf88560" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 4 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-1.jpg?alt=media&token=f83ae4ec-1806-42ee-9598-8fafda5b1a30" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 5 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-5.jpg?alt=media&token=52ef7641-3543-4ac7-9499-b792eb90253f" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
          </div>
      
          <!-- Slider indicators -->
          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" data-carousel-interval="2000"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" data-carousel-interval="2000"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" data-carousel-interval="2000"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3" data-carousel-interval="2000"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4" data-carousel-interval="2000"></button>
          </div>
    </div>
  </div>

  <section class="five-percent hero-section-content pb-12">
    <!-- breadcrumb -->
        <div class="flex mb-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
            <RouterLink 
                to="/" 
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
                <svg 
                class="w-4 h-4 me-2.5" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span class="sr-only">Home</span>
            </RouterLink>
            </li>

            <li>
            <div class="flex items-center">
                <svg 
                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 6 10"
                >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 underline">Kontakt os</span>
            </div>
            </li>
        </ol>
        </div>

    <p class="white-text pb-2">Har du nogle spørgsmål?</p>
    <h1 class="uppercase white-headline pb-4">Kontakt os</h1>
    <p class="hero-content white-text">Her kan du finde vores kontaktoplysninger. Vi ser frem til at høre fra dig!</p>
  </section>

    <section class="fifteen-percent pt-12 contact-info-container">
        <div class="flex flex-col gap-8">
            <div>
                <h3 class="headline-content white-headline pb-2 uppercase">Vi sidder klar til at besvare dine henvendelser</h3>
                <div v-for="hour in openingHours" :key="hour.time">
                    <p class="white-text">{{ hour.time }}</p>
                </div>
            </div>

            <div>
                <p class="white-text"><span class="font-bold">Tlf: </span>+45 28 97 11 85</p>
                <p class="white-text"><span class="font-bold">Mail: </span>Musikforeningenkanten@gmail.com</p>
            </div>

            <div>
                <p class="white-text">Gl Novrupvej 14</p>
                <p class="white-text">6705 Esbjerg</p>
            </div>

        </div>
    </section>
</template>

<script setup>
// import
import { openingHours } from '../modules/useOpeningHours.js'
import { onMounted } from "vue";
import { nextTick } from 'vue';
import { initCarousels } from 'flowbite';

onMounted(async () => {
  await nextTick();
  initCarousels(); 
});

</script>

<style scoped>
/* hero */
.hero {
  position: relative;
}

.slide-container {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
}

.slide-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  position: absolute;
  top: 0;
  left: 0;
  transform: none;
}

.hero-content {
    max-width: 500px;
}

.headline-content {
    text-wrap: balance;
}


@media only screen and (max-width: 900px) {
    .contact-info-container {
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 48px;
        padding-bottom: 48px;
    }
}
</style>