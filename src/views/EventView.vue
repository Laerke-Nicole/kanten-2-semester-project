<template>
    <!-- top part of page -->
    <div v-for="event in eventSingleItem" :key="event" class="pt-20">
        <div class="hero relative pb-12">
            <!-- background image -->
            <img :src="event.imgURL" alt="image of artist" class="w-full h-auto object-cover">

            <!-- overlay text -->
            <div class="absolute inset-0 flex flex-col justify-end items-start five-percent bg-black/40 text-white pb-16">
                <h1 class="white-headline pb-2 uppercase hero-info">{{ event.artist }}</h1>
                <h4 class="white-text pb-6 hero-info">{{ event.date }}</h4>

                <p class="flex gap-1 items-center white-text hero-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg> 
                {{ event.time }}
                </p>

                <p class="flex gap-1 items-center white-text pb-4 hero-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                {{ event.venue }}
                </p>
            </div>
        </div>




        <div class="artist-content grid grid-cols-1 sm:grid-cols-12 gap-12 five-percent pt-12">
            <div class="col-span-8">
                <div class="flex flex-col pb-12">
                    <RouterLink :to="{ name: 'event', params: { id: event.id }}">
                    <div class="card-container tickets-container grid grid-cols-1 sm:grid-cols-12 primary-background-img p-4 gap-4">
                        <!-- image -->
                        <div class="col-span-1 sm:col-span-3 flex items-center">
                            <h4>{{ event.date }}</h4>
                        </div>

                        <!-- info -->
                        <div class="card-info col-span-1 sm:col-span-6 uppercase flex flex-col justify-center">
                            <div>
                                <h4>{{ event.venue }}</h4>
                                <p class="pb-2">{{ event.artist }}</p>
                                <p class="flex gap-1 items-center black-text font-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                            </svg> 
                            {{ event.time }}
                        </p>
                            </div>
                        </div>

                        <!-- buy tickets -->
                        <div class="col-span-1 sm:col-span-3 flex items-center">
                        <button class="button1">Køb billetter</button>
                        </div>
                    </div>
                    </RouterLink>
                </div>





                <!-- about artist -->
                <section class="about-artist py-12">
                    <div class="">
                        <h3 class="white-headline pb-2 uppercase about-title">Hvem er {{ event.artist }}</h3>
                        <p class="white-text">{{ event.artistDes }}</p>
                    </div>
                </section>
            </div>

            <div class="col-span-4">
                <h5 class="white-headline pb-2">Følg dem på de sociale medier</h5>
                <div class="white-text flex gap-2">
                     <a class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                        </svg>
                    </a>

                    <a class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </a>

                    <a class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        
    </div>  

</template>

  
<script setup>
// imports
import { onMounted, ref, computed, toRefs } from 'vue'
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
let events = ref([])

console.log("events ref", events)





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

const props = defineProps({
id: String
})

const { id } = toRefs(props)


const eventSingleItem = computed(() => {
    return events.value.filter(item => item.id == id.value)
})

</script>


<style scoped>
.hero img {
    height: 75vh;
    width: 100%;
    object-fit: cover;
}

.hero-info {
    text-wrap: balance;
}

.about-title {
    text-wrap: balance;
}



@media only screen and (max-width: 900px) {
    .artist-content {
        gap: 16px;
    }

    .artist-content {
        padding-top: 0;
    }

    .about-artist {
      padding-top: 0;
    }
}
</style>