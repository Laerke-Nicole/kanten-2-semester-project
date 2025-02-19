<template>
  <!-- event list -->
  <div class="py-36 five-percent">
    <p class="text-lg white-text pb-4">For unge drevet af unge</p>
    <h1 class="uppercase white-headline pb-12">Kommende events</h1>

    <!-- loop with event -->
    <div class="flex flex-col gap-8">
      <div v-for="event in events" :key="event">
        <RouterLink :to="{ name: 'event', params: { id: event.id }}">
          <div class="flex primary-background-img edge-box relative">
            <!-- image -->
            <div class="flex">
              <div class="p-6">
                <img :src="event.imgURL" alt="event image" class="h-52 edge-event-card">
              </div>
            </div>

            <!-- shown information -->
            <div class="uppercase pt-6 pb-6 flex flex-col justify-between">
              <div>
                <p class="pb-2">{{ event.genre }}</p>
                <h3>{{ event.artist }}</h3>
              </div>

              <div class="flex flex-col uppercase">
                <p>{{ event.date }}</p>
                <p>{{ event.time }}</p>
                <p>{{ event.venue }}</p>
              </div>
            </div>

            <div class="absolute bottom-0 right-0 p-4">
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
  </div>


  <!-- genres -->
  <section class="white-bg pt-16 pb-16 five-percent">
    <div>
      <h3 class="text-center pb-12">VORES MUSIKGENRE</h3>
    </div>

    <div class="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
      <div class="flex flex-col justify-center items-center">
        <img :src="deftLogo" alt="genre logo" class="h-20">
        <h5 class="pt-6 text-3xl">DEFT</h5>
        <p>Hip hop</p>
      </div>

      <div class="flex flex-col justify-center items-center">
        <img :src="manaclubLogo" alt="genre logo" class="h-20">
        <h5 class="pt-6 text-3xl">MANA CLUB</h5>
        <p>Tecno</p>
      </div>

      <div class="flex flex-col justify-center items-center">
        <img :src="vertexLogo" alt="genre logo" class="h-20">
        <h5 class="pt-6 text-3xl">VERTEX</h5>
        <p>House</p>
      </div>

      <div class="flex flex-col justify-center items-center">
        <img :src="xmassivedubLogo" alt="genre logo" class="h-20">
        <h5 class="pt-6 text-3xl">X-MASSIVE DUB</h5>
        <p>Dancehall & raggae</p>
      </div>
    </div>
  </section>

  <!-- news letter section -->
  <div class="news-letter tertiary-background-img">
    <div id="mc_embed_signup" class="news-letter-card primary-background-img">
      <form action="https://easv365.us21.list-manage.com/subscribe/post?u=3e04c9aa23d2cf67b4490960e&amp;id=27f0872f15&amp;v_id=112&amp;f_id=007f54e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h2 class="uppercase">Nyhedsbrev</h2>

            <div class="mc-field-group news-letter-form">
              <input type="text" value="Navn" name="FNAME" class="" id="mce-FNAME">
            </div>

            <div class="mc-field-group">
              <input type="email" value="Mailadresse" name="EMAIL" class="required email" id="mce-EMAIL" required>
            </div>

            <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
              <div class="content__gdpr">
                <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <label class="checkbox subfield" for="gdpr_1167"><input type="checkbox" id="gdpr_1167" name="gdpr[1167]" value="Y" class="av-checkbox "><span>Jeg godkender at få emails</span> </label>
                </fieldset>
              </div>
            </div>

            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3e04c9aa23d2cf67b4490960e_27f0872f15" tabindex="-1" value=""></div>
            <div class="optionalParent">
              <div class="clear foot">
                <input type="submit" value="TILMELD" name="subscribe" id="mc-embedded-subscribe" class="button1">
              </div>
            </div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>


  <!-- collage -->
  <div class="black-bg flex gap-4 five-percent">
    <!-- left column with one image -->
    <div class="w-1/2">
      <img
        class="w-full h-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-1.jpg?alt=media&token=f83ae4ec-1806-42ee-9598-8fafda5b1a30"
        alt="collage image-1"
      />
    </div>

    <!-- right column with two stacked images -->
    <div class="flex flex-col gap-4 w-1/2">
      <img
        class="w-full h-1/2 object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-4.jpg?alt=media&token=59922db7-f09d-4bec-96e4-199becf88560"
        alt="collage image-2"
      />
      <img
        class="w-full h-1/2 object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-3.jpg?alt=media&token=5a569a19-5b00-4bbe-89ab-6ad0a5737a14"
        alt="collage image-3"
      />
    </div>
  </div>
</template>

 
<script setup>
// imports
import { onMounted, ref } from 'vue'
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
        urlSales: doc.data().urlSales,
        ageGroup: doc.data().ageGroup,
        price: doc.data().price,
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
/* front page */
/* event  */

/* newsletter */
.news-letter {
  width: 100%;
  padding: 70px 10%;
}

.news-letter-card {
  clip-path: var(--edge-box);
  padding: 50px 10% 50px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#mc_embed_signup_scroll h2 {
  font-size: 45px !important;
  margin: 0 !important;
  padding-bottom: 24px;
}

.indicates-required {
  color: var(--black-text);
  font-size: 14px !important;
  font-family: var(--text-font);
}

.mc-field-group {
  padding-bottom: 12px !important;
  color: var(--black-headline);
  font-family: var(--text-font);
}

.mc-field-group input {
  background-color: var(--white-headline) !important;
  outline: none !important;
  box-shadow: 0px 10px 20px -18px !important;
  border: 2px solid var(--primary-color) !important;
  border-radius: 0 !important;
  margin: 4px 0;
}

#mc-embedded-subscribe {
  margin: 0;
}

/* responsive  */
@media only screen and (max-width: 780px) {
  .news-letter-form input {
    width: 80%;
  }

  .news-letter-buttom {
    flex-direction: column;
    gap: 12px;
  }
}

@media only screen and (max-width: 767px) {
  #mc_embed_signup_scroll h2 {
  font-size: 35px !important;
  }
}

/* responsive end */

</style>



