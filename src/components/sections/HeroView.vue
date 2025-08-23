<template>
    
  <div class="hero relative w-full">
  
        <div id="default-carousel" class="relative w-full h-full z-10" data-carousel="slide">
          
          <!-- Carousel wrapper -->
          <div class="slide-container relative h-64 overflow-hidden md:h-96 rounded-none">
              <!-- Item 1 -->
              <div class="block duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-4.jpg?alt=media&token=59922db7-f09d-4bec-96e4-199becf88560" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-1.jpg?alt=media&token=f83ae4ec-1806-42ee-9598-8fafda5b1a30" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-2.jpg?alt=media&token=17a1c776-a52f-418f-9213-fdf9b04bc6a2" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
              </div>
              <!-- Item 4 -->
              <div class="hidden duration-200 ease-in-out" data-carousel-item>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-3.jpg?alt=media&token=5a569a19-5b00-4bbe-89ab-6ad0a5737a14" class="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hero image">
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
</template>

<script setup>
import 'flowbite';

</script>

<style  scoped>
.hero {
  position: relative;
}

.slide-container {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
}

.slide-container img {
  object-fit: fill;
}
</style>