<template>
    
  <!-- event list -->
  <section class="pb-12 five-percent">
    <p class="text-lg white-text pb-4">For unge drevet af unge</p>
    <h1 class="uppercase white-headline pb-12">Esbjergs Musikliv Live</h1>

    <!-- loop with event -->
    <div class="flex flex-col gap-8">
      <div v-for="event in events" :key="event">
        <RouterLink :to="{ name: 'event', params: { id: event.id }}">
          <div class="card-container flex primary-background-img edge-box relative">
            <!-- image -->
            <div class="flex">
              <div class="artist-img-container p-6">
                <img :src="event.imgURL" alt="event image" class="artist-img h-52 edge-event-card">
              </div>
            </div>

            <!-- shown information -->
            <div class="card-info uppercase pt-6 pb-6 flex flex-col justify-between">
              <div>
                <p class="pb-2 genre">{{ event.genre }}</p>
                <h3>{{ event.artist }}</h3>
              </div>

              <div class="card-info-time-date flex flex-col uppercase font-bold">
                <p>{{ event.date }}</p>
                <p>{{ event.time }}</p>
              </div>
            </div>

            <div class="genre-icon absolute bottom-0 right-0 p-4">
              <div v-if="event.genre == 'MANA CLUB'">
                <img :src="manaclubLogo" alt="genre logo" class="h-10">
              </div>

              <div v-if="event.genre == 'DEFT'">
                <img :src="deftLogo" alt="genre logo" class="h-10">
              </div>

              <div v-if="event.genre == 'VERTEX'">
                <img :src="vertexLogo" alt="genre logo" class="h-10">
              </div>

              <div v-if="event.genre == 'X-MASSIVE DUB'">
                <img :src="xmassivedubLogo" alt="genre logo" class="h-10">
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'flowbite';
import { 
  collection, onSnapshot,   
  query, orderBy
} from 'firebase/firestore';
import { db } from '@/firebase'





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
        time: doc.data().time,
        venue: doc.data().venue,
        des: doc.data().des,
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

// genre logos
let manaclubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fmana-club-logo.svg?alt=media&token=695a4a1f-0a04-4160-8adf-d1a1cec56db3')
let deftLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fdeft-logo.svg?alt=media&token=9d7c820e-bd50-4fe7-aa00-cdf520e84bef')
let vertexLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fvertex-logo.svg?alt=media&token=b9f346bd-df7b-421b-bf84-5c6145f618b9')
let xmassivedubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fx-massive-dub-logo.svg?alt=media&token=9a6ffabe-3708-47ac-9b38-68fd7c346128')

</script>

<style scoped>
.card-container {
  width: 100%;
}

.genre {
  font-size: 13px;
}

.card-info-time-date p:first-child {
  font-weight: 600;
  font-size: 15px;
}


/* responsive  */
@media only screen and (max-width: 900px) {
  .card-container {
    flex-direction: column;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }

  .artist-img-container {
    width: 100%;
  }

  .artist-img {
    height: auto !important;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }

  .card-info {
    padding: 0 24px 24px 24px;
  }

  .card-info .genre {
    padding-bottom: 0;
  }

  .card-info h3 {
    font-size: 24px;
    padding-bottom: 16px;
  }

  .content-info {
    padding-right: 5%;
    padding-left: 5%;
  }
}


@media only screen and (max-width: 600px) {
  .genre-icon {
    display: none;
  }
}
</style>