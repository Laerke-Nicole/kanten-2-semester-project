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


  <div class="events-list-background secondary-background-img">
      <!-- loop with event -->
      <RouterLink to='/event'>
        <div v-for="event in events" :key="event" class="event-list primary-background-img" >

        <!-- image -->
        <div class="event-card-img">
          <img :src="event.imgURL" alt="event image">
        </div>

        <!-- shown information -->
        <div class="event-card-content">
          <p>{{ event.category }}</p>
          <h3>{{ event.artist }}</h3>

          <div class="event-card-date"> 
            <h5>{{ event.date }}</h5>
            <h5>{{ event.month }}</h5>
            <h5>{{ event.time }}</h5>
          </div>
        </div>

        <!-- <div v-if="genres.genre == 'MANA CLUB'">
          <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/mana-club-text.svg?alt=media&token=6cabf297-be39-43c2-a6f3-3af9d0ab7bf3" alt="genre logo">
        </div> -->

        <!-- show logo for genre -->
        <!-- <div class="event-card-genre-logos">
            <div v-if="event.genre === 'MANA CLUB'">
              <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/mana-club-text.svg?alt=media&token=6cabf297-be39-43c2-a6f3-3af9d0ab7bf3" alt="genre logo">
            </div>

            <div v-else="genre.value == 'DEFT'">
              <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/deft-text.svg?alt=media&token=6fefdb95-87ab-4abb-a776-8b436235b4b6" alt="genre logo">
            </div>

            <div v-else="genre.value == 'VERTEX'">
              <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/vertex-text.svg?alt=media&token=42be8067-5452-4209-8678-cd08f5b22429" alt="genre logo">
            </div>

            <div v-else="genre.value == 'X-MASSIVE DUB'">
              <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/x-massive-dub-text.svg?alt=media&token=d6cbe42d-5c89-4fad-b9c1-75e410fd8466" alt="genre logo">
            </div>
        </div>
        -->
        </div>
      </RouterLink>
      



   
       





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
      <!-- <div class="comment-section-right">
        <div class="comment-section-discord-logo">
          <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/discord-logo.svg?alt=media&token=7e359cc2-56f9-4186-9edf-6806f4f3f0d1" alt="discord logo">
        </div>
      </div> -->
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
import { onMounted, ref } from 'vue'
import { getStorage, ref as refFB } from 'firebase/storage'
import { 
  collection, onSnapshot,   

  query, orderBy
} from 'firebase/firestore';
import { db } from '@/firebase'

// importing modules
import dates from '@/modules/useDates'
import months from '@/modules/useMonths'
import categories from '@/modules/useCategories'
import genres from '@/modules/useGenres' 
import venues from '@/modules/useVenues' 

const storage = getStorage();

// firebase refs
const eventsCollectionRef = collection(db, 'events')

// order the events
const eventsCollectionQuery = query(eventsCollectionRef, orderBy("order", "desc"));



// events
const events = ref([
 
])





// get events - writes out the value we wrote in the input onto the event itself
onMounted(() => {
  onSnapshot(eventsCollectionQuery, (querySnapshot) => {
    const fbEvents = [];
    querySnapshot.forEach((doc) => {
      const event = {
        id: doc.id,
        artist: doc.data().artist,
        artistDes: doc.data().artistDes,
        date: doc.data().date,
        month: doc.data().month,
        time: doc.data().time,
        venue: doc.data().venue,
        des: doc.data().des,
        urlSales: doc.data().urlSales,
        ageGroup: doc.data().ageGroup,
        price: doc.data().price,
        category: doc.data().category,
        genre: doc.data().genre,
        imgURL: doc.data().imgURL,
        done: doc.data().done,
      }
      fbEvents.push(event)
    });
    events.value = fbEvents
    console.log("test: ", fbEvents)
  });
})





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
.events-list-background {
  width: 100%;
  padding: 50px 10%;
}

.event-list {
  display: flex;
  flex-direction: row;
  clip-path: var(--edge-box);
  margin-bottom: 30px;
}

/* event  */
.event {
  padding: 50px 0;
}

.event-card-img {
  padding: 40px 0 50px 10%;
}
.event-card-img img {
  height: 200px;
  clip-path: var(--edge-event-card);
}

/* content on event card */
.event-card-content {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 18px;
}

.event-card-content h3 {
  font-size: 70px;
  padding-top: 12px;
  transform: scaleY(1.5);
  text-transform: uppercase;
}

.event-card-date {
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-top: 60px;
}

.event-card-content h5 {
  font-size: 40px;
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
  padding: 12% 0 70px 10%;
}

.comment-section-button {
  padding-top: 24px;
}

/* right side of comment side */
/* .comment-section-right {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comment-section-right img {
  width: 100px;
} */


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
  border: 2px solid var(--primary-color);
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





/* .genre_one {
  background-color: red;
  color: red;
} */

</style>