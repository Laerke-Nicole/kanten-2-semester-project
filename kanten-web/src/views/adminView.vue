<template>
  <div class="event-list">

    <div class="title">
      <h1>Add events</h1>
    </div>

    <!-- add event -->
    <form @submit.prevent="addEvent">
      <div class="field">

        <!-- input field when adding event -->
        <p class="control">
          <!-- artist -->
          <input v-model="newEventArtist" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="artist" placeholder="Add an artist">
          <input v-model="newEventArtistDes" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="artistdes" placeholder="Add an artist description">
          
          <!-- date -->
          <div class="top-dropdown-p w-full">
            <p>Select a date and time in the dropdown: </p>
          </div>

          <div class="date-dropdown">
            <div class="dates-dropdown">
              <div>
                <p>Date </p>
              </div>
              <select v-model="newEventDate" class="date dates border-0 py-1.5 pl-6 pr-20"> 
              <option v-for="date in dates" :key="date" >
                <p>{{ date.date }}</p>
              </option>
            </select>
            </div>

            <div class="month-dropdown">
              <div>
                <p>Month </p>
              </div>
              <select v-model="newEventMonth" class="month dates border-0 py-1.5 pl-6 pr-20">
              <option v-for="month in months" :key="month" >
                <p>{{ month.month }}</p>
              </option>
            </select>
            </div>

            <div class="time-dropdown">
              <div>
                <p>Time</p>
              </div>
              <input v-model="newEventTime" class="time border-0 py-1.5 pl-6 pr-20" type="text" name="time" placeholder="KL:">
            </div>
          </div>
          
          <!-- <input v-model="newEventDate" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="date" placeholder="Add a date"> -->

          <!-- venue -->
          <div class="top-dropdown-p">
            <p>Select a venue in the dropdown: </p>
          </div>

          <select v-model="newEventVenue" class="venue-dropdopwn border-0 py-1.5 pl-6 pr-20">
              <option class="venue-menu" v-for="venue in venues" :key="venue">
                <p>{{ venue.venue }}</p>
              </option>
            </select>

          <!-- description -->
          <input v-model="newEventDes" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="des" placeholder="Add a brief description">

          <!-- sales url -->
          <input v-model="newEventUrlSales" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="sales_url" placeholder="Add a sales url">

          <!-- group age -->
          <input v-model="newEventAgeGroup" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="age" placeholder="Add a target group age">

          <!-- price -->
          <input v-model="newEventPrice" type="text" name="price" class=" price border-0 py-1.5 pl-7 pr-20" placeholder="0.00 DKK"/>

          <!-- category -->
          <div class="top-dropdown-p">
            <p>Select a category in the dropdown: </p>
          </div>
          <select v-model="newEventCategory" class="border-0 py-1.5 pl-6 pr-20">
            <option v-for="category in categories" :key="category">
              <p>{{ category.category }}</p>
            </option> 
          </select>

          <!-- genre -->
          <div class="top-dropdown-p">
            <p>Select a genre in the dropdown: </p>
          </div>
          <select v-model="newEventGenre" class="genres border-0 py-1.5 pl-6 pr-20">
            <!--  <option selected disabled value="Select a venue">Please select a venue...</option> -->
            <option class="genre" v-for="genre in genres" :value="genre.genre" :key="genre">
              <p>{{ genre.genre }}</p>
            </option> 
          </select>
        

          <!-- image -->
          <input v-on:change="imgURL" class="image" alt="event image" type="file" label="File input" width="200" height="200" @change="uploadImg">





          <!-- button that adds event -->
          <div class="control">
            <button @click="" :disabled="addEventParameters.uploadBtnDisabled" class="button2 mt-10">Add</button>
          </div>

        </p>

        
      </div>
    </form>


    <div>
      <h2 class="event-h2">Events</h2>
    </div>
    <!-- events in a list -->
    <div v-for="event in events" class="card">
      <div class="card-content mb-4">
        <div class="content p-2 w-full border-0 py-1.5 pl-7 pr-20" :class="{ 'has-background-success' : event.done}">
            <div class="column mt-5" :class="{ 'has-text-success' : event.done }">
              <div class="pb-4">
                <img :src="event.imgURL">
                <h4> {{ event.artist }} </h4>
                <p> {{ event.artistDes }} </p>
                <p> {{ event.date }} {{ event.month }} {{ event.time }} </p>
                <p> {{ event.category }} </p>
                <p> {{ event.venue }} </p>
              </div>
                
              <div>
                <p> {{ event.genre }} </p>
                <p> {{ event.des }} </p>
                <p>{{ event.ageGroup }} </p>
                <p> {{ event.price }} </p>
                <p> {{ event.urlSales }} </p>
              </div>
              
                
                
                
                

            </div>
            
            <div class="y-n-buttons">
              <!-- add button -->
              <button @click="toggleDone(event.id)" class="button mt-5 mr-2 mb-2" :class="event.done ? 'is-success' : 'is-not-yet-success'">
                &check;
              </button>

              <!-- delete button -->
              <button @click="deleteEvent(event.id)" class="button mt-5 mb-2">
                &cross;
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>




</template>
  
  
  
  
  
  
<script setup>
// imports
import { onMounted, ref } from 'vue'
import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { 
  collection, onSnapshot,   
  addDoc, doc, deleteDoc, updateDoc, 
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
  // {
  //   id: 'id1',
  //   date: '',
  //   venue: '',
  //   artist: '',
  //   description: '',
  //   url_sales: '',
  //   category: '',
  //   genre: '',
  //   price: '',
  //   image: '',
  //   done: false,
  // },
  // {
  //   id: 'id2',
  //   date: '',
  //   venue: '',
  //   artist: '',
  //   description: '',
  //   url_sales: '',
  //   category: '',
  //   genre: '',
  //   price: '',
  //   image: '',
  //   done: true,
  // },
])


// storing which parameters that will react to "add" button
  
const addEventParameters = () => {
  newEventArtist
  newEventArtistDes
  newEventDate 
  newEventMonth
  newEventTime
  newEventVenue 
  newEventDes
  newEventUrlSales 
  newEventAgeGroup
  newEventPrice
  newEventCategory
  newEventGenre 
  imgURL
  uploadBtnDisabled
}


// input field for adding event
const newEventArtist = ref('')
const newEventArtistDes = ref('')
const newEventDate = ref('')
const newEventMonth = ref('')
const newEventTime = ref('')
const newEventVenue = ref('')
const newEventDes = ref('')
const newEventUrlSales = ref('')
const newEventAgeGroup = ref('')
const newEventPrice = ref('')
const newEventCategory = ref('')
const newEventGenre = ref('')
const imgURL = ref('')
const uploadBtnDisabled = ref('true')


// adding a new event to the list with content
const addEvent = () => {
  addDoc(eventsCollectionRef, {
    artist: newEventArtist.value,
    artistDes: newEventArtistDes.value,
    date: newEventDate.value,
    month: newEventMonth.value,
    time: newEventTime.value,
    venue: newEventVenue.value,
    des: newEventDes.value,
    urlSales: newEventUrlSales.value,
    ageGroup: newEventAgeGroup.value,
    price: newEventPrice.value,
    category: newEventCategory.value,
    genre: newEventGenre.value,
    imgURL: imgURL.value,
    done: false,
    order: Date.now(),
  });
  newEventArtist.value = ''
  newEventArtistDes.value = ''
  newEventDate.value = ''
  newEventMonth.value = ''
  newEventTime.value = ''
  newEventVenue.value = ''
  newEventDes.value = ''
  newEventUrlSales.value = ''
  newEventAgeGroup.value = ''
  newEventPrice.value = ''
  newEventCategory.value = ''
  newEventGenre.value = ''
  imgURL.value = ''
}


// delete event
const deleteEvent = id => {
  deleteDoc(doc(eventsCollectionRef, id));
}

// toggle done - when done button is clicked 
const toggleDone = id => {
  const index = events.value.findIndex(event => event.id === id)

  updateDoc(doc(eventsCollectionRef, id), {
    done: !events.value[index].done
  });

}


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
  });
})




// Firebase storage upload image + get download URL + enable button after image uploaded
const uploadImg = async(event) => {
  let file = event.target.files[0]; // get the file
  console.log("file", file)

// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};


// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = refFB(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);



// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');       
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

      imgURL.value = downloadURL // update variable imgURL and put the image URL link in it. 
      uploadBtnDisabled.value = false // enable button after image uploaded is complete
    });
  }  
);
}


  


</script>
  








<style scoped>
.event-list {
  max-width: 400px;
  padding: 150px 0 70px 10%;
  display: flex;
  flex-direction: column;
}

h1 {
  color: var(--white-headline);
  font-size: 60px;
  margin-bottom: 16px;
  

}

.top-dropdown-p p {
  color: var(--white-text);
  margin-top: 12px;
}

/* whole event list parameters */
.field {
  display: flex;
  padding-bottom: 70px;
}

/* parameters */
.control .input {
  margin-bottom: 12px;
  width: 100%;
  background-color: var(--secondary-color);
}

select {
  background-color: var(--secondary-color);
}

.control select {
  margin-bottom: 12px;
}

.control ::placeholder {
  color: var(--black-text);
}

.image {
  color: var(--white-text);
}

/* button styling for add + check and cross */
.control {
  display: flex;
  flex-direction: column;
  transition: 0.3s;
}

.button2 {
  width: 150px;
}


.button {
  background-color: var(--red-cross);
  color: var(--black-headline);
  padding: 5px 20px 10px 20px;
  font-size: 22px;
  line-height: normal;
}

.event-h2 {
  color: var(--white-headline);
  margin-bottom: 16px;
}


/* individual events */
.card {
  display: flex;
}

.content {
  display: flex;
  flex-direction: column;
  background-color: var(--white-headline);
  color: var(--black-headline);
  width: 500px;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  font-family: var(--text-font);
}

h4 {
  font-size: 36px;
  font-family: var(--text-font);
  padding-top: 16px;
}

/* an event thats done */
.has-background-success {
  background-color: var(--green-check-box);
}

.has-text-success {
  color: var(--green-check);
}

/* check button */
.is-success {
  background-color: var(--green-check);
}


/* an event that isnt done */
/* cross button */
.is-not-yet-success {
  background-color: var(--grey-check);
}

.date-dropdown {
  display: flex;
  gap: 16px;
}

.date-dropdown p {
  color: var(--white-text);
}

.time {
  margin-bottom: 12px;
  height: 40px;
}

.price {
  color: var(--black-text);
  margin-bottom: 10px;
}

.price ::placeholder {
  color: var(--black-text);
}

/* genre dropdown styling */
.genres {
  color: var(--black-text);
}

.genre {
  color: var(--black-headline);  
}

.left-col {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
}

.right-col {
  display: flex;
  align-items: center;
}

.venue-menu {
  color: var(--black-text);
}

/* image upload */

.image-input {
  color: var(--white-text);
  margin-bottom: 12px;
}




</style>





