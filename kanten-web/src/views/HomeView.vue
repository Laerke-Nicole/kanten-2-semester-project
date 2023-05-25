<template>
  <!-- front page -->
  <div class="front-page primary-background-img">
    <div class="front-page-top">
      <p>For unge drevet af unge</p>
      <h1>Kommende events</h1>
    </div>
  </div>

  <div class="events-list-background secondary-background-img">
      <!-- loop with event -->
        <div v-for="event in events" :key="event">
          <RouterLink :to="{ name: 'event', params: { id: event.id }}">
            <div class="event-list primary-background-img">
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





            <!-- show logo for genre -->
            <!-- <div class="event-card-genre-logos">
                <div v-if="genres.genre === 'MANA CLUB'">
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/mana-club-text.svg?alt=media&token=6cabf297-be39-43c2-a6f3-3af9d0ab7bf3" alt="genre logo">
                </div>

                <div v-else-if="genres.genre === 'DEFT'">
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/deft-text.svg?alt=media&token=6fefdb95-87ab-4abb-a776-8b436235b4b6" alt="genre logo">
                </div>

                <div v-else-if="genres.genre === 'VERTEX'">
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/vertex-text.svg?alt=media&token=42be8067-5452-4209-8678-cd08f5b22429" alt="genre logo">
                </div>

                <div v-else="genres.genre === 'X-MASSIVE DUB'">
                  <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/x-massive-dub-text.svg?alt=media&token=d6cbe42d-5c89-4fad-b9c1-75e410fd8466" alt="genre logo">
                </div>
            </div> -->
            </div>
        
      </RouterLink>
        </div>
      
     
     
    
      



   
       





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
        <!-- <input class="input" name="name" placeholder="Dit navn" type="name">
        <input class="input" name="email" placeholder="Din mailadresse" type="email">    
         -->
        
        <!-- mailchimp -->
        <div class="mc-field-group">
          <input type="text" value="" name="FNAME" placeholder="Dit navn" class="" id="mce-FNAME">
        </div>
        <div class="mc-field-group">
          <input type="email" value="" name="EMAIL" placeholder="Din mailadresse" class="required email" id="mce-EMAIL" required>
        </div>
      </div>

      <div class="news-letter-buttom">
        <div class="news-letter-botton">
          <button type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe" class="button1">Tilmeld</button>
        </div>
        <div class="news-letter-buttom-p">
          <p>Få straks at vide om<br>nye events og artister i Kanten</p>
        </div>
      </div>
    </div>
  </div>



<div class="news-letter tertiary-background-img">
  <div id="mc_embed_signup" class="news-letter-card primary-background-img">
    <form action="https://easv365.us21.list-manage.com/subscribe/post?u=3e04c9aa23d2cf67b4490960e&amp;id=27f0872f15&amp;v_id=112&amp;f_id=007f54e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <h2>Nyhedsbrev</h2>

        <div class="indicates-required"><span class="asterisk">*</span> angiver påkrævet</div>

        <div class="mc-field-group news-letter-form">
          <label for="mce-FNAME">Dit navn </label>
          <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
          <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
        </div>

          <div class="mc-field-group">
            <label for="mce-EMAIL">Din mailadresse  <span class="asterisk">*</span>
            </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
            <span id="mce-EMAIL-HELPERTEXT" class="helper_text">Din mailadresse</span>
          </div>
          
          <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
            <div class="content__gdpr">
              <label>Markedsføringstilladelser</label>
              <p>Venligst godkend at få tilsendt nyhedsbrev pr mail.</p>
              <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <label class="checkbox subfield" for="gdpr_1167"><input type="checkbox" id="gdpr_1167" name="gdpr[1167]" value="Y" class="av-checkbox "><span>Jeg godkender at få tilsendt emails</span> </label>
              </fieldset>
              <p>Du kan altid afmelde dit nyhedsbrev ved at klikke på linket i footeren af vores emails. </p>
            </div>
            <div class="content__gdprLegal">
              <p>Vi bruger Mailchimp som vores marketingplatform. Ved at klikke nedenfor for at abonnere, anerkender du, at dine oplysninger vil blive overført til Mailchimp til behandling. <a href="https://mailchimp.com/legal/terms" target="_blank">Lær mere om Mailchimps privatlivspolitik her. </a></p>
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
              <p class="brandingLogo"><a href="http://eepurl.com/irYdf-" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
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



// sorting









// let logoone = ref('LINK TO FIREBASE LOGO')

// paste so that logoone links to genre 

// blah blah => () {
//   {
//     image: '',
//     genre: 'mana',
//   },
//   and so on
// }

// same with location on google maps

</script>


<style scoped>
/* front page */
.front-page {
  padding: 150px 0 40px 10%;
}

.front-page-top h1 {
  padding-bottom: 6px;
  font-size: 80px;
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
  /* width: 60%; */
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
}

.news-letter-card {
  clip-path: var(--edge-box);
  padding: 50px 0 50px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mc-field-group {
  padding: 0 !important;
}

.mc-field-group input {
  background-color: var(--white-headline) !important;
  outline: none !important;
  box-shadow: 0px 10px 20px -18px !important;
  border: 2px solid var(--primary-color) !important;
}

.helper_text {
  background-color: transparent !important;
  color: var(--black-text) !important;
}

.news-letter-card input {
  display: flex;
  flex-direction: column;
  width: 40%;
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

#mc-embedded-subscribe {
  margin: 0;
}



/* .genre_one {
  background-color: red;
  color: red;
} */








/* responsive  */
@media only screen and (max-width: 930px) {
  .event-card-img img {
    height: 150px;
  }

  .event-list h3 {
    font-size: 60px
  }
  

  .event-card-date {
    padding-top: 30px;
  }

  .event-list h5 {
    font-size: 30px;
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

@media only screen and (max-width: 760px) {
  .event-card-img {
    padding: 30px 0 40px 10%;
  }

  .event-card-content {
    padding-top: 30px;
  }

  .event-card-img img {
    height: 125px;
  }

  .event-list h3 {
    font-size: 45px;
    padding-top: 6px;
  }

  .event-card-date {
    padding-top: 40px;
  }

  .event-list h5 {
    font-size: 18px;
  }

  .comment-section-left {
    padding-top: 20%;
  }
}

@media only screen and (max-width: 610px) {
  .event-card-img img {
    height: 100px;
  }

  .event-list h3 {
    font-size: 40px;
    transform: scaleY(1.2);
    padding-top: 4px;
  }

  .event-card-date {
    padding-top: 20px;
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

@media only screen and (max-width: 610px) {
  .event-list h3 {
    font-size: 30px;
    transform: scaleY(1.4);
  }

  .event-card-date {
    padding-top: 30px;
  }

  .front-page-top h1 {
    font-size: 60px;
  }
}

@media only screen and (max-width: 420px) {
  .front-page-top h1 {
    font-size: 50px;
  }
}




/* responsive end */







</style>



