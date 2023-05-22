<template>
    <div v-for="event in events" :key="event">
       
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       
        test: {{ event }}

        

            <div class="front-img">
        <img :src="event.imgURL">
        <div>
            <p>{{ event.genre }}</p>
            <h1>{{ event.artist }}</h1>
        </div>
        <div>
            <p> {{ event.date }} </p>
            <div>

                <img :src="event.logo">
            </div>
        </div>
    </div>

    <div class="tickets-box secondary-background-img">
        <div class="primary-background-img">
            <div>
                <div>
                    <div>
                        <p>{{ event.date }}</p>
                        <h3>{{ event.artist }}</h3>
                    </div>
                    <div>
                        <a :href="event.urlSales" target="_blank"><button>Gratis billetter</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="des-venue secondary-background-img-light">
        <div>
            <div>
                <h2>Beskrivelse</h2>
                <p>{{ event.des }}</p>
            </div>
            <div>
                <h2>Lokation</h2>
                <div>google maps</div>
                <p>{{ event.venue }}</p>
            </div>
        </div>
    </div>

    <div>

        <h2>{{ event.type }} starter</h2>
        <div>
            <div>
                <p>{{ event.date }}</p>
            </div>
            <div>
                <p>{{ event.month }}</p>
            </div>
            <div>
                <p>{{ event.time }}</p>
            </div>
        </div>
    </div>

    <div class="about">
        <div>
            <div>
                <h2>Om {{ event.artist }}</h2>
                <p>{{ event.artistDec }}</p>
            </div>
            <div>
                <img :src="event.imgURL">
            </div>
        </div>
    </div>
        
    </div>  
    

    <div class="collage primary-background-img">
        
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

</style>