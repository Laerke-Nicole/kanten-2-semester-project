<template>

  <!-- front page -->
  <div class="front-page">
    <div class="front-page-top">
      <p class="slogan-text text-lg">For unge drevet af unge</p>
      <h1 class="uppercase">Kommende events</h1>
    </div>
  </div>


  <!-- event list -->
  <div class="events-list-background">
    <!-- loop with event -->
    <div v-for="event in events" :key="event">
      <RouterLink :to="{ name: 'event', params: { id: event.id }}">
        <div class="event-list primary-background-img">
          <div class="event-list-top flex">
            <!-- image -->
            <div class="event-card-img">
              <img :src="event.imgURL" alt="event image">
            </div>

            <!-- shown information -->
            <div class="event-card-content uppercase">
              <div>
                <p>{{ event.genre }}</p>
                <h3>{{ event.artist }}</h3>
              </div>
              
            </div>
          </div>
          
          <div class="event-card-buttom-logo flex justify-between">
            <div class="event-card-buttom flex flex-col uppercase">
              <div class="event-card-date flex gap-2"> 
                <p>{{ event.date }}</p>
                <p>{{ event.month }}</p>
              </div>
              <p>{{ event.time }}</p>
              <p>{{ event.venue }}</p>
            </div>

            <div class="event-card-logo">
              <div v-if="event.genre == 'MANA CLUB'">
                <img :src="manaclubLogo" alt="genre logo">
              </div>

              <div v-if="event.genre == 'DEFT'">
                <img :src="deftLogo" alt="genre logo">
              </div>

              <div v-if="event.genre == 'VERTEX'">
                <img :src="vertexLogo" alt="genre logo">
              </div>

              <div v-if="event.genre == 'X-MASSIVE DUB'">
                <img :src="xmassivedubLogo" alt="genre logo">
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>

  <!-- news letter section -->
  <div class="news-letter tertiary-background-img">
    <div id="mc_embed_signup" class="news-letter-card primary-background-img">
      <form action="https://easv365.us21.list-manage.com/subscribe/post?u=3e04c9aa23d2cf67b4490960e&amp;id=27f0872f15&amp;v_id=112&amp;f_id=007f54e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h2>Nyhedsbrev</h2>

          <div class="indicates-required"><span class="asterisk">*</span> angiver påkrævet</div>

          <div class="mc-field-group news-letter-form">
            <label for="mce-FNAME">Dit navn </label>
            <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
          </div>

            <div class="mc-field-group">
              <label for="mce-EMAIL">Din mailadresse  <span class="asterisk">*</span>
              </label>
              <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
            </div>
            
            <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
              <div class="content__gdpr">
                <p class="pt-6">Venligst godkend at få sendt nyhedsbrev pr mail.</p>
                <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <label class="checkbox subfield" for="gdpr_1167"><input type="checkbox" id="gdpr_1167" name="gdpr[1167]" value="Y" class="av-checkbox "><span>Jeg godkender at få emails</span> </label>
                </fieldset>
                <p class="pt-2 pb-2 text-sm">Du kan altid afmelde dit nyhedsbrev ved at klikke på linket i footeren af vores emails. </p>
              </div>
              <div class="content__gdprLegal pb-6">
                <p class="text-sm">Vi bruger Mailchimp som vores marketingplatform. Ved at klikke nedenfor for at abonnere, anerkender du, at dine oplysninger vil blive overført til Mailchimp til behandling. <a href="https://mailchimp.com/legal/terms" target="_blank" class="underline">Lær mere om Mailchimps privatlivspolitik her. </a></p>
              </div>
            </div>
            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3e04c9aa23d2cf67b4490960e_27f0872f15" tabindex="-1" value=""></div>
            <div class="optionalParent">
              <div class="clear foot">
                <input type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe" class="button1 button">
              </div>
            </div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
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


// genre logos
let manaclubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fmana-club-logo.svg?alt=media&token=695a4a1f-0a04-4160-8adf-d1a1cec56db3')
let deftLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fdeft-logo.svg?alt=media&token=9d7c820e-bd50-4fe7-aa00-cdf520e84bef')
let vertexLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fvertex-logo.svg?alt=media&token=b9f346bd-df7b-421b-bf84-5c6145f618b9')
let xmassivedubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fx-massive-dub-logo.svg?alt=media&token=9a6ffabe-3708-47ac-9b38-68fd7c346128')

</script>


<style scoped>
/* front page */
.front-page {
  padding: 150px 0 40px 10%;
}

.front-page-top h1 {
  padding-bottom: 6px;
  font-size: 70px;
  color: var(--white-headline)
}

.slogan-text {
  color: var(--white-text);
}


/* event list */
.events-list-background {
  width: 100%;
  padding: 50px 10%;
}

.event-list {
  display: flex;
  flex-direction: column;
  clip-path: var(--edge-box);
  margin-bottom: 30px;
}

/* event  */
.event-card-img {
  padding: 40px 0 0 10%;
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
  font-size: 38px;
  text-transform: uppercase;
  padding-right: 24px;
}

.event-card-buttom p {
  font-weight: 600;
  color: var(--extra-light);
  line-height: 1.2;
}

.event-card-buttom-logo {
  display: flex;
  align-self: flex-end;
}

.event-card-logo {
  padding: 18px;
}

.event-card-logo img {
  height: 45px;
  width: auto;
}


/* comment section */
.comment-section {
  display: flex;
}

.divider {
  height: 0;
}

.comment-section-left {
  display: flex;
  flex-direction: column;
  /* width: 60%; */
  padding: 12% 0 70px 10%;
}

.comment-section-button {
  padding-top: 24px;
}


/* newsletter */
.news-letter {
  width: 100%;
  padding: 50px 10%;
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
}

.indicates-required {
  color: var(--black-text);
  font-size: 14px !important;
  font-family: var(--text-font);
}

.mc-field-group {
  padding: 0 !important;
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

.button1 {
  background-color:var(--primary-color) !important;
  color: var(--white-text) !important;
  font-size: 16px !important;
  padding: 10px 30px !important;
  margin-bottom: 12px !important;
  cursor: pointer;
  border: 0 !important;
  transition: 0.3s !important;
  font-family: var(--text-font) !important;
  font-size: 16px !important;
  overflow: hidden;
  text-align: center !important;
  z-index: 1 !important;
  border-radius: 0 !important;
  height: auto !important;
}


/* chat */
.event-card-img {
  width: 350px;
  height: auto;
  overflow: hidden;
  clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%);
}

.event-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}




/* responsive  */
@media only screen and (max-width: 930px) {
  .event-card-img img {
    height: 150px;
  }

  .event-card-date {
    padding-top: 40px;
  }
}

@media only screen and (max-width: 850px) {
  .button1 {
    font-size: 15px !important;
  }
}
 
@media only screen and (max-width: 800px) {
  .event-card-date {
    padding-top: 20px;
  }

  .event-list-top {
    flex-direction: column;
  }

  .event-card-img {
    padding-right: 10%;
    padding-bottom: 18px;
  }

  .event-card-img img {
    width: 100%;
    height: auto;
  }

  .event-card-content {
    padding: 0 10% 0 10%;
  }

  .event-card-date {
    padding-top: 16px;
  }
}

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
  .comment-section-left {
    padding-top: 20%;
  }

  #mc_embed_signup_scroll h2 {
  font-size: 35px !important;
  }
}

@media only screen and (max-width: 610px) {
  .slogan-text {
    font-size: 16px;
  }

  .event-list h3 {
    font-size: 40px;
  }
}

@media only screen and (max-width: 540px) {
  .comment-section h2 {
    font-size: 36px;
  }

  .comment-section p {
    padding-right: 10%;
  }
}

@media only screen and (max-width: 420px) {
  .event-list h3 {
    transform: scaleY(1.3);
    font-size: 35px;
  }
}

@media only screen and (max-width: 375px) {
  .event-list h3 {
    transform: scaleY(1.3);
    font-size: 30px;
  }
} 


/* responsive end */

</style>



