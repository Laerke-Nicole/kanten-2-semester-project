<template>
    <div class="hero relative w-full">
  
        <div id="default-carousel" class="relative w-full h-full z-10" data-carousel="slide">
          
          <!-- Carousel wrapper -->
          <div class="slide-container relative h-80 overflow-hidden md:h-96 rounded-none">
              <!-- Item 1 -->
              <div class="block duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-5.jpg?alt=media&token=52ef7641-3543-4ac7-9499-b792eb90253f" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-3.jpg?alt=media&token=5a569a19-5b00-4bbe-89ab-6ad0a5737a14" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-2.jpg?alt=media&token=17a1c776-a52f-418f-9213-fdf9b04bc6a2" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 4 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-1.jpg?alt=media&token=f83ae4ec-1806-42ee-9598-8fafda5b1a30" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 5 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-4.jpg?alt=media&token=59922db7-f09d-4bec-96e4-199becf88560" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
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
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 underline">Om Kanten</span>
            </div>
            </li>
        </ol>
        </div>

    <p class="white-text pb-2">Hvem er</p>
    <h1 class="uppercase white-headline pb-4">Kanten</h1>
    <p class="hero-content white-text">Her kan du læse om hvem Kanten er, hvordan vi skiller os ud, vores passion og vores fire vilde musikgenre.</p>
  </section>



    <section class="about-content-container fifteen-percent py-20 flex flex-col items-center">
        <div class="pb-12">
            <h3 class="uppercase white-headline pb-2">Et unikt fællesskab</h3>
            <p class="white-text about-text pb-4">Musikforeningen Kanten er Esbjergs nye kulturfællesskab, som rummer byens musikalske vækstlag. Vi tror på at hjælpe undergroundartister til toppen og tilbyder en gratis scene for livekoncerter inden for hiphop, techno, reggae og house. Derudover afholder vi diskoteksarrangementer, hvor fællesskabet og festen er i centrum.</p>
            <p class="white-text about-text">Og så koster alle billetter da også gratis! Det kan vi godt lide. Det handler om fællesskabet og at fremme underground artister - vi vil gerne have, at alle kan være med.</p>
        </div>

        <div>
            <h3 class="uppercase white-headline pb-2">Vores vision</h3>
            <p class="white-text about-text">Vi ønsker at skabe et inkluderende rum for alle, der brænder for musik og kultur. Vores mål er at støtte og fremme lokale talenter, samtidig med at vi tilbyder en platform for diversitet og kreativitet. Hos Kanten er alle velkomne, uanset baggrund eller musikalsk præference.</p>
        </div>
    </section>

    <!-- genres -->
    <section class="white-bg pt-16 pb-16 five-percent">
        <div>
        <h2 class="text-center pb-12">VORES MUSIKGENRER</h2>
        </div>

        <div class="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
            <div class=" flex flex-col justify-center items-center">
                <img :src="deftLogo" alt="genre logo" class="h-20 genre-logo">
                <h4 class="pt-6">DEFT</h4>
                <p>Hip hop</p>
            </div>

            <div class="flex flex-col justify-center items-center">
                <img :src="manaclubLogo" alt="genre logo" class="h-20 genre-logo">
                <h4 class="pt-6">MANA CLUB</h4>
                <p>Tecno</p>
            </div>

            <div class="flex flex-col justify-center items-center">
                <img :src="vertexLogo" alt="genre logo" class="h-20 genre-logo">
                <h4 class="pt-6">VERTEX</h4>
                <p>House</p>
            </div>

            <div class="flex flex-col justify-center items-center">
                <img :src="xmassivedubLogo" alt="genre logo" class="h-20 genre-logo">
                <h4 class="pt-6">X-MASSIVE DUB</h4>
                <p>Dancehall & reggae</p>
            </div>
        </div>
    </section>


    <!-- quote -->
    <section>
        <div class="bg-black text-white pt-24 pb-10 fifteen-percent volunteer-container">
            <div class="z-10">
                <h4 class="white-headline pb-8 leading-normal">At være frivillig hos Kanten har givet mig en masse uforglemmelige minder. Stemningen er altid i top, og folk giver den fuld gas til festerne.</h4>
                <p class="white-text">Jane Doe, <span class="font-bold">Frivillig</span></p>
            </div>

            <div class="quotation-mark flex flex-row justify-end items-end">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/icons%2Fquote-dark.svg?alt=media&token=b5bbb9eb-f517-43a2-b46d-3bcbc31c00a3" alt="Gåseøjne billede" class="h-24">
            </div>
        </div>
    </section>

</template>

<script setup>
import 'flowbite';
import { ref } from 'vue'
import { onMounted } from "vue";
import { nextTick } from 'vue';
import { initCarousels } from 'flowbite';

onMounted(async () => {
  await nextTick();
  initCarousels(); 
});

// genre logos
let manaclubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fmana-club-logo.svg?alt=media&token=695a4a1f-0a04-4160-8adf-d1a1cec56db3')
let deftLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fdeft-logo.svg?alt=media&token=9d7c820e-bd50-4fe7-aa00-cdf520e84bef')
let vertexLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fvertex-logo.svg?alt=media&token=b9f346bd-df7b-421b-bf84-5c6145f618b9')
let xmassivedubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fx-massive-dub-logo.svg?alt=media&token=9a6ffabe-3708-47ac-9b38-68fd7c346128')

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

.quotation-mark {
    margin-top: -50px;
    padding-right: 50px;
}


@media only screen and (max-width: 600px) {
    .about-content-container, .volunteer-container {
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 48px;
        padding-bottom: 48px;
    }

    .genre-logo {
        height: 42px;
    }
}

</style>