<template>
    <!-- top part of page -->
    <div v-for="event in eventSingleItem" :key="event" class="pt-20">
        <div class="hero pb-14">
            <img :src="event.imgURL" alt="image of artist">

            <div class="ten-percent flex justify-start items-center">
                <div class="spotify-snippet">
                    <iframe data-testid="embed-iframe" 
                        style="border-radius:12px" 
                        src="https://open.spotify.com/embed/track/0dTdxwwH6FYsJL0l3TgSe2?utm_source=generator&theme=0" 
                        width="100%" height="152" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>

        <!-- about artist -->
        <section class="about-artist flex flex-row five-percent gap-20">
            <div class="flex flex-col justify-center items-center">
                <h1 class="white-headline text-center pb-6 uppercase">Hvem er<br/>{{ event.artist }}</h1>
                <p class="white-text text-center pb-8 five-percent">{{ event.artistDes }}</p>
                <button class="button2">HØR PÅ SPOTIFY</button>
            </div>

            <div>
                <img :src="event.imgURL" alt="image of artist">
            </div>
        </section>
    </div>  

    <section class="expect five-percent pt-28 pb-28">
        <h2 class="uppercase white-headline pb-6">Hvad kan du forvente?</h2>
        <p class="white-text max-w-3xl">Til koncerten på Kanten kan du forvente en vild og uforglemmelig aften. Der vil blive fyret op for musikken med beats I elsker og en fantastisk stemning med andre unge. Kanten er kendt for sine store fester, hvor der altid er masser af alkohol og sjov. Kom og dans natten lang og oplev en fest uden lige!</p>
    </section>

    <section class="tickets-container flex flex-row five-percent gap-20">
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-6.jpg?alt=media&token=5f152216-7b1f-4e66-83e0-773373ca839e" alt="image of artist">
        </div>

        <div class="flex flex-col justify-center items-center">
            <h5 class="light-text pb-6 font-normal">Hvad venter du på?</h5>
            <h2 class="white-headline text-center pb-6 uppercase">Bestil biletter</h2>
            <p class="white-text text-center pb-8 five-percent">Sikre dig dine <span class="font-bold">GRATIS</span> biletter til vores fede event her!</p>
            <button class="button2">FÅ DINE GRATIS BILETTER</button>
        </div>
    </section>

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

.spotify-snippet {
    transform: translateY(-30px);
    max-width: 900px;
}

/* responsive */
@media only screen and (max-width: 900px) {
    .about-artist {
        flex-direction: column;
        gap: 50px;
    }

    .expect {
        padding: 60px 5%;
    }

    .tickets-container {
        flex-direction: column-reverse;
        gap: 50px;
    }
}

/* end responsive */

</style>