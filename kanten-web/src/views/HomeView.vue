<template>
  <!-- front page -->
  <div class="front-page primary-background-img">
    <div class="">
      <p>For unge drevet af unge</p>
      <h1>Kommende events</h1>
    </div>

    <!-- sorting in events -->
    <div class="sorting-events">
      <p>Kalender</p>
      <p>Genre</p>
      <p>Artister</p>
      <p>Event</p>
    </div>
  </div>


  <div class="events-list secondary-background-img">
    <!-- loop with event -->
    <div class="event primary-background-img">

      <!-- image -->
      <div>
        <img :src="event.imgURL">
      </div>

      <!-- shown information -->
      <div>
        
        <!-- make one about type with music, this and this -->
        <p>{{ event.type }}</p>
        <h3>{{ event.artist }}</h3>
        <h5>{{ event.date }}</h5>
      </div>
      
      <!-- loop images for each genre -->
      <!-- change to logo for genre -->
      <div>
        <img :src="event.logo" alt="genre logo">
      </div>
    </div>
  </div>

  <div class="comment-section primary-background-img">
    <div>
      <div>
        <h2>Hvad synes andre om Kanten</h2>
        <p>Læs andre folks oplevelse på vores Discord server <br>
          eller skriv hvad du synes om Kanten</p>
      </div>

      <div>
        <button>
          <p>Kommentarer</p>
        </button>
      </div>
    </div>
    <div>
      <div>
        <img src="" alt="discord logo">
      </div>
    </div>
  </div>

  <div class="news-letter tertiary-background-img">
    <div class="news-letter-card primary-background-img">
      <div>
        <h2>Nyhedsbrev</h2>
      </div>
      <div>
        <input type="text">
        <input type="text">
      </div>

      <div>
        <div>
          <p>Få straks at vide om nye events, og artister i Kanten</p>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
// imports
import addEvent from '@/views/AdminView.vue' 


</script>

<style scoped>

</style>