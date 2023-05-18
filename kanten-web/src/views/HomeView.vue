<template>
  <!-- front page -->
  <div class="front-page primary-background-img">
    <div class="front-page-top">
      <p>For unge drevet af unge</p>
      <h1>Kommende events</h1>
    </div>

    <!-- sorting in events -->
    <div class="sorting-events">
      <p class="sorting-event-p">Kalender</p>
      <p>Genre</p>
      <p>Artister</p>
      <p>Event</p>
    </div>
  </div>


  <div class="events-list secondary-background-img">
      <!-- loop with event -->
      <div class="event primary-background-img" v-for="event in events" :key="event">

        <!-- image -->
        <div>
          <img :src="event.imgURL" alt="event image">
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

  <!-- comment section -->
  <div class="primary-background-img">
    <div class="divider">
        <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/section-divider.svg?alt=media&token=d7049148-7ea7-43f8-9895-2478464b257b" alt="wave">
      </div>

    <div class="comment-section">
      <div class="comment-section-left">
        <div class="comment-section-text">
          <h2>Hvad synes andre om Kanten</h2>
          <p>Læs andre folks oplevelse på vores Discord server <br>
            eller skriv hvad du synes om Kanten</p>
        </div>

        <div class="comment-section-button">
          <button class="button1">Kommentarer</button>
        </div>
      </div>

      <!-- right side of comment section -->
      <div class="comment-section-right">
        <div class="comment-section-discord-logo">
          <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/discord-logo.svg?alt=media&token=7e359cc2-56f9-4186-9edf-6806f4f3f0d1" alt="discord logo">
        </div>
      </div>
    </div>
    
  </div>


  <!-- news letter section -->
  <div class="news-letter tertiary-background-img">
    <div class="news-letter-card primary-background-img">
      <div>
        <h2>Nyhedsbrev</h2>
      </div>
      <div class="news-letter-form">
        <input class="input" name="name" placeholder="Dit navn" type="name">
        <input class="input" name="email" placeholder="Din mailadresse" type="email">      
      </div>

      <div class="news-letter-buttom">
        <div class="news-letter-botton">
          <button class="button1">Tilmeld</button>
        </div>
        <div>
          <p>Få straks at vide om<br>nye events og artister i Kanten</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
// imports
import event from '@/views/AdminView.vue' 
import events from '@/views/AdminView.vue' 


</script>


<style scoped>
/* front page */
.front-page {
  padding: 150px 0 40px 10%;
}

.front-page-top h1 {
  padding-bottom: 12px;
}

.sorting-events {
  display: flex;
  flex-direction: row;
}

.sorting-events p {
  padding: 0 5% 0 5%;
}

.sorting-event-p {
  padding-left: 0 !important;
}


/* event list */
.events-list {
  width: 100%;
  padding: 50px 10%;
}

/* event  */
.event {
  clip-path: var(--edge-box);
}


/* comment section */
.comment-section {
  display: flex;
}

.divider {
  height: 0;
}

/* left side of comment side */

.comment-section-left {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 110px 0 50px 10%;
}

.comment-section-button {
  padding-top: 24px;
}

/* right side of comment side */
.comment-section-right {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comment-section-right img {
  width: 100px;
}


/* newsletter */
.news-letter {
  width: 100%;
  padding: 50px 10%;
  justify-content: center;
}

.news-letter-card {
  clip-path: var(--edge-box);
  padding: 50px 0 50px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-letter-card input {
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: var(--white-headline);
  outline: none;
  box-shadow: 0px 10px 20px -18px;
  border: 2px solid var(--black-text);
  padding: 10px 0 10px 25px;
  margin: 12px 0;
}

.news-letter-card input::placeholder {
  color: var(--black-text);
  font-family: var(--text-font);
}

.news-letter-card input {
  font-family: var(--text-font);
  color: var(--black-headline);
}

.news-letter-buttom {
  display: flex;
  flex-direction: row;
  padding-top: 14px;
  gap: 24px;
}

</style>