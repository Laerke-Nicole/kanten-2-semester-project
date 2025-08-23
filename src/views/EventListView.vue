<template>
  <!-- event list -->
  <section class="pt-28 pb-12 five-percent">
    <p class="text-lg white-text pb-4">August 2024</p>
    <h1 class="uppercase white-headline">Event oversigt</h1>

    <!-- genre filter buttons -->
    <div class="flex gap-2 pt-6 pb-16">
      <!-- "ALLE" button resets filter -->
      <button 
        class="genre-btn" 
        :class="{ 'event-btn-active': selectedGenre === 'ALLE' }"
        @click="selectedGenre = 'ALLE'">
        ALLE
      </button>

      <!-- genre buttons -->
      <div v-for="genre in genres" :key="genre.id">
        <button 
          class="genre-btn"
          :class="{ 'event-btn-active': selectedGenre === genre.genre }"
          @click="selectedGenre = genre.genre"
        >
          {{ genre.genre }}
        </button>
      </div>
    </div>

    <!-- filtered events -->
    <div class="flex flex-col gap-4">
      <div v-for="event in filteredEvents" :key="event.id">
        <RouterLink :to="{ name: 'event', params: { id: event.id }}">
          <div class="card-container grid grid-cols-12 primary-background-img">
            <!-- image -->
            <div class="col-span-4 flex">
              <div class="artist-img-container p-4">
                <img :src="event.imgURL" alt="event image" class="artist-img h-24">
              </div>
            </div>

            <!-- info -->
            <div class="card-info col-span-4 uppercase pt-6 pb-4 flex flex-col justify-between">
              <div>
                <h4>{{ event.artist }}</h4>
                <p class="pb-2 genre">{{ event.genre }}</p>
              </div>

              <div class="card-info-date flex flex-col uppercase font-bold">
                <p>{{ event.date }}</p>
              </div>
            </div>

            <!-- buy tickets -->
            <div class="col-span-4 flex justify-center items-center p-4">
              <button class="button1">Køb billetter</button>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import 'flowbite'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '@/firebase'
import genres from '../modules/useGenres.js'

// firebase refs
const eventsCollectionRef = collection(db, 'events')
const eventsCollectionQuery = query(eventsCollectionRef, orderBy("order", "desc"))

// events
const events = ref([])
const selectedGenre = ref("ALLE")

// filter events by genre
const filteredEvents = computed(() => {
  if (selectedGenre.value === "ALLE") {
    return events.value
  }
  return events.value.filter(event => event.genre === selectedGenre.value)
})

// fetch events
onMounted(() => {
  onSnapshot(eventsCollectionQuery, (querySnapshot) => {
    const fbEvents = []
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
    })
    events.value = fbEvents
  })
})
</script>

<style scoped>
.card-container {
  width: 70%;
}

.genre {
  font-size: 13px;
}

.card-info-date p {
  font-weight: 600;
  font-size: 15px;
}

/* active genre button */
.event-btn-active {
  background-color: var(--white-headline);
  color: var(--black-text);
  border: 1px solid var(--black-text);
}

/* responsive */
@media only screen and (max-width: 900px) {
  .card-container {
    flex-direction: column;
  }

  .artist-img-container {
    width: 100%;
  }

  .artist-img {
    height: auto !important;
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
    position: relative;
    padding-top: 0;
  }
}
</style>
