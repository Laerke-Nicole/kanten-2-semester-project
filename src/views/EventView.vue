<template>

    <!-- top part of page -->
    <div v-for="event in eventSingleItem" :key="event" class="pt-36">
        <!-- about artist -->
        <section class="flex flex-row five-percent">
            <div class="flex flex-col justify-center items-center">
                <h1 class="white-headline text-center pb-6 uppercase">Hvem er<br/>{{ event.artist }}</h1>
                <p class="white-text text-center pb-8 ten-percent">{{ event.artistDes }}</p>
                <button class="button2">HØR PÅ SPOTIFY</button>
            </div>

            <div>
                <img :src="event.imgURL" alt="image of artist">
            </div>
        </section>
    </div>  

    <section class="five-percent pt-28 pb-28">
        <h4 class="uppercase white-headline text-3xl pb-6">Hvad du kan forvente</h4>
        <p class="white-text max-w-3xl">Til koncerten på Kanten kan du forvente en vild og uforglemmelig aften. Der vil blive fyret op for musikken med beats I elsker og en fantastisk stemning med andre unge. Kanten er kendt for sine store fester, hvor der altid er masser af alkohol og sjov. Kom og dans natten lang og oplev en fest uden lige!</p>
    </section>

    <section class="flex flex-row five-percent">
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-6.jpg?alt=media&token=5f152216-7b1f-4e66-83e0-773373ca839e" alt="image of artist">
        </div>

        <div class="flex flex-col justify-center items-center">
            <h5 class="light-text pb-6 font-normal">Hvad venter du på?</h5>
            <h1 class="white-headline text-center pb-6 uppercase">Bestil biletter</h1>
            <p class="white-text text-center pb-8 ten-percent">Sikre dig dine <span class="font-bold">GRATIS</span> biletter til vores fede event her!</p>
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