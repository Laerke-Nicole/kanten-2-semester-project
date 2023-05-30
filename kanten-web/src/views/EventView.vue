<template>

    <!-- top part of page -->
    <div v-for="event in eventSingleItem" :key="event">
        <div class="front-img">
            <div>
                <img :src="event.imgURL" alt="image for event">
            </div>

            <div class="front-img-text">
                <div class="front-img-top">
                    <p>{{ event.genre }}</p>
                    <h1>{{ event.artist }}</h1>
                </div>

                <div class="front-img-bottom">
                    <div class="front-img-date">
                        <p> {{ event.date }} </p>
                        <p> {{ event.month }} </p>
                        <p> {{ event.time }} </p>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- get tickets section -->
        <div class="ticket-list-box secondary-background-img">
            <div class="ticket-box primary-background-img flex flex-col">
                <div class="ticket-box-info flex flex-row">
                    <div class="ticket-box-left">
                        <div class="flex flex-row gap-2 pb-2">
                            <p> {{ event.date }} </p>
                            <p> {{ event.month }} </p>
                            <p> {{ event.time }} </p>
                        </div>

                        <div>
                            <h3>{{ event.artist }}</h3>
                        </div>
                    </div>

                    <div class="ticket-box-right">
                        <div>
                            <a :href="event.urlSales" target="_blank"><button class="button1">Gratis billetter</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- description and location section -->
        <div class="des-venue secondary-background-img-light">
            <div class="des-venue-box flex flex-row">
                <div class="des-box flex flex-col">
                    <h2>Hvad du kan forvente</h2>
                    <p>{{ event.des }}</p>
                </div>
                <div class="location-box flex flex-col">
                    <h2>Lokation</h2>

                    <div class="location">
                        <div v-if="event.venue == 'Finsensgade 1, 6700 Esbjerg'">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.612888288896!2d8.452881877198035!3d55.469414913782494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b863b9f21%3A0xda996a903b7c0df7!2sFinsensgade%201%2C%206700%20Esbjerg!5e0!3m2!1sen!2sdk!4v1685273094919!5m2!1sen!2sdk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div v-if="event.venue == 'GL Novrupvej 14, 6705 Esbjerg'">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.179441131073!2d8.486998077198415!3d55.47697021320252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b2145d7c77159%3A0x2bc63adfd5ed6add!2sGl%20Novrupvej%2014%2C%206705%20Esbjerg!5e0!3m2!1sen!2sdk!4v1685273149906!5m2!1sen!2sdk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <p class="pt-2">{{ event.venue }}</p>
                </div>
            </div>
        </div>


        <!-- event starts -->
        <div class="event-start">
            <div>
                <h2>Eventet starter</h2>
            </div>
            
            <div class="event-start-date text-center">
                <p>{{ event.date }} {{ event.month }} {{ event.time }}</p>
            </div>
        </div>


        <!-- about artist -->
        <div class="about tertiary-background-img">
            <div class="about-box primary-background-img">
                <div class="about-content-box flex flex-row">
                    <div class="about-left">
                        <div class="about-headline flex gap-1">
                            <h3>Om</h3>
                            <h3>{{ event.artist }}</h3>
                        </div>
                        
                        <div>
                            <p>{{ event.artistDes }}</p>
                        </div>
                    </div>
                    <div class="about-right">
                        <img :src="event.imgURL" alt="event image">
                    </div>
                </div>
            </div>
        </div>
    </div>  
    

    <!-- collage -->
    <div class="collage secondary-background-img-light">
        <div class="collage-images flex flex-row">
            <div class="collage-images-left flex flex-col">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-1.jpg?alt=media&token=f83ae4ec-1806-42ee-9598-8fafda5b1a30" alt="collage image-1">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-2.jpg?alt=media&token=17a1c776-a52f-418f-9213-fdf9b04bc6a2" alt="collage image-2">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-3.jpg?alt=media&token=5a569a19-5b00-4bbe-89ab-6ad0a5737a14" alt="collage image-3">
            </div>

            <div class="collage-images-right flex flex-col">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-4.jpg?alt=media&token=59922db7-f09d-4bec-96e4-199becf88560" alt="collage image-4">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-5.jpg?alt=media&token=52ef7641-3543-4ac7-9499-b792eb90253f" alt="collage image-5">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-6.jpg?alt=media&token=5f152216-7b1f-4e66-83e0-773373ca839e" alt="collage image-6">
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

const props = defineProps({
id: String
})

const { id } = toRefs(props)


const eventSingleItem = computed(() => {
    return events.value.filter(item => item.id == id.value)
})

</script>


<style scoped>
.front-img {
    padding-top: 7vh;
}

.front-img img {
    width: 100%;
    height: auto;
    position: absolute;
}

.front-img-text {
    height: 85vh;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
}

.front-img-top {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 80px;
}

.front-img-top p {
    font-size: 18px;
    color: var(--white-text);
}

.front-img-top h1 {
    font-size: 100px;
    padding-top: 12px;
    transform: scaleY(1.5);
    text-transform: uppercase;
    color: var(--white-headline);
}

/* bottom part of front img */
.front-img-bottom {
    display: flex;
    flex-direction: row;
    padding-top: 35vh;
}

.front-img-date {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

.front-img-date p {
    font-size: 24px;
    color: var(--white-text);
}


/* tickets */
.ticket-list-box {
    padding: 50px 10%;
}

.ticket-box  {
    display: flex;
    flex-direction: row;
    clip-path: var(--edge-box);
    padding: 50px 10% 50px 10%;
}

.ticket-box-info {
    display: flex;
}

.ticket-box-left {
    display: flex;
    flex-direction: column;
    padding-right: 400px;
}

.ticket-box-left h3 {
    font-size: 50px;
    text-transform: uppercase;
}


.ticket-box-right {
    display: flex;
    justify-content: flex-end;
    align-self: center;
}


/* description and location */
.des-venue {
    padding: 50px 10% 70px 10%;
}

.des-box{
    width: 50%;
}

.des-box h2 {
    padding-right: 15%;
}

.des-box p {
    padding-right: 15%;
}

.location-box {
    width: 50%;
}


/* eventet starter */
.event-start {
    padding: 50px 10%;
    background-color: var(--background-color);
}

.event-start h2 {
    color: var(--white-headline);
    font-size: 60px;
    text-align: center;
}

.event-start-date p {
    color: var(--white-text);
    font-size: 30px;
}


/* about artist */
.about {
    padding: 50px 10%;
}

.about-box {
    clip-path: var(--edge-box);
}

.about-content-box {
    padding: 0 10%;
}

.about-left{
    width: 50%;
    padding-top: 50px;
    padding-bottom: 70px;
}

.about-headline h3 {
    font-size: 38px;
}

.about-left p {
    padding-right: 50px;
}

.about-right {
    width: 50%;
    padding-bottom: 70px;
}

.about-right img {
    width: 80%;
    margin: 0 auto;
}


/* collage images */
.collage-images {
    padding: 50px 0;
}
.collage-images img {
    padding: 1%;
}

.collage-images-left img {
    padding-left: 0;
}

.collage-images-right img {
    padding-right: 0;
}
 

/* responsive */
@media only screen and (max-width: 1200px) {
    .ticket-box-left {
    padding-right: 350px;
    }
}

@media only screen and (max-width: 1140px) {
    .front-img-text {
        height: 75vh;
    }

    .front-img-top h1 {
        font-size: 80px;
    }

    .front-img-bottom {
        padding-top: 30vh;
    }

    .ticket-box-left {
    padding-right: 300px;
    }
}

@media only screen and (max-width: 1070px) {
    .ticket-box-left {
    padding-right: 250px;
    }
}

@media only screen and (max-width: 1030px) {
    .des-venue-box {
        flex-direction: column;
    }

    .des-box {
        width: 100%;
    }

    .des-box h2 {
        padding-bottom: 8px;
    }

    .location-box {
        width: 100%;
    }

    .location-box h2 {
        padding-top: 50px;
        padding-bottom: 8px;
    }
}

@media only screen and (max-width: 985px) {
    .ticket-box-left {
    padding-right: 200px;
    }
}


@media only screen and (max-width: 960px) {
    .front-img {
    padding-top: 10vh;
    }

    .front-img-text {
        height: 65vh;
    }

    .front-img-top {
        padding-top: 60px;
    }

    .front-img-top h1 {
        font-size: 70px;
        transform: scaleY(1.4);
    }

    .front-img-bottom {
        padding-top: 25vh;
    }
}

@media only screen and (max-width: 905px) {
    .ticket-box-left {
    padding-right: 150px;
    }
}

@media only screen and (max-width: 830px) {
    .front-img-text {
        height: 60vh;
    }

    .front-img-top h1 {
        font-size: 60px;
    }

    .front-img-bottom {
        padding-top: 20vh;
    }

    .about-headline h3 {
        font-size: 36px;
    }
}

@media only screen and (max-width: 820px) {
    .ticket-box-left {
    padding-right: 120px;
    }

    .des-box h2 {
        font-size: 36px;
    }

    .location-box h2 {
        font-size: 36px;
    }
}

@media only screen and (max-width: 800px) {
    .about-content-box {
        flex-direction: column-reverse;
    }

    .about-left{
        width: 100%;
        padding-top: 0px;
        padding-bottom: 70px;
    }

    .about-right {
        padding-top: 50px;
        padding-bottom: 24px;
        width: 100%;
    }

    .about-right img {
        width: 100%;
    }

    .collage-images {
        flex-direction: column;
    }

    .collage-images img {
        padding-right: 0;
        padding-left: 0;
    }
}

@media only screen and (max-width: 770px) {
    .front-img-text {
        height: 55vh;
    }

    .front-img-top h1 {
        font-size: 50px;
        padding-top: 6px;
    }

    .front-img-bottom {
        padding-top: 20vh;
    }

    .ticket-box h3{
        font-size: 50px;
    }
    .ticket-box-left {
    padding-right: 110px;
    }
}

@media only screen and (max-width: 700px) {
    .front-img-text {
        height: 50vh;
    }

    .front-img-top h1 {
        font-size: 50px;
        transform: scaleY(1.4);
    }

    .front-img-bottom {
        padding-top: 15vh;
    }

    .ticket-box-info {
    display: flex;
    flex-direction: column;
    }

    .ticket-box-left {
        padding-right: 24px;
    }

    .ticket-box-left h3 {
        font-size: 40px;
    }

    .ticket-box-right {
        justify-content: flex-start;
        align-self: flex-start;
        padding-top: 12px;
    }
}

@media only screen and (max-width: 640px) {
    .front-img-text {
        height: 45vh;
    }

    .front-img-top h1 {
        font-size: 45px;
        transform: scaleY(1.3);
    }

    .front-img-bottom {
        padding-top: 10vh;
    }
}

@media only screen and (max-width: 600px) {
  .event-start h2 {
    font-size: 45px;
  }  

  .event-start p {
    font-size: 28px;
  }  
}

@media only screen and (max-width: 580px) {
    .front-img-text {
        height: 40vh;
    }

    .front-img-top {
        padding-top: 45px;
    }

    .front-img-top h1 {
        font-size: 45px;
        transform: scaleY(1.3);
    }

    .front-img-bottom {
        padding-top: 10vh;
    }

    .front-img-bottom p {
        font-size: 18px;
    }
}

@media only screen and (max-width: 520px) {
    .front-img-text {
        height: 35vh;
    }

    .front-img-top h1 {
        font-size: 40px;
        transform: scaleY(1.2);
        padding-top: 2px;
    }

    .front-img-bottom {
        padding-top: 7vh;
    }

    .front-img-bottom p {
        font-size: 16px;
    }

    .location iframe {
        width: 100%;
    }
}

@media only screen and (max-width: 450px) {
    .front-img-text {
        height: 30vh;
    }

    .front-img-top p {
        font-size: 16px;
    }

    .front-img-top h1 {
        font-size: 40px;
        transform: scaleY(1.0);
    }

    .front-img-bottom {
        padding-top: 4vh;
    }

    .ticket-box-left h3 {
        font-size: 36px;
    }
}

@media only screen and (max-width: 400px) {
    .front-img-text {
        height: 27vh;
    }

    .front-img-top {
        padding-top: 40px;
    }

    .front-img-top h1 {
        font-size: 35px;
        padding-top: 0;
    }

    .front-img-bottom {
        padding-top: 3vh;
    }

    .ticket-box-left h3 {
        font-size: 30px;
    }
}

/* end responsive */

</style>