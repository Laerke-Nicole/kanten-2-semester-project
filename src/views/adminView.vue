<template>
  <div class="event-list">

    <div class="title">
      <h1>Add events</h1>
    </div>
    
    <!-- add event -->
    <form @submit.prevent="addEvent">
      <div class="field">
        <div class="control">
          <!-- artist -->
          <input v-model="newEventArtist" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="artist" placeholder="Add an artist">
          <input v-model="newEventArtistDes" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="artistdes" placeholder="Add an artist description">

          <!-- date -->
          <div class="top-dropdown-p w-full">
            <p>Select a date and time in the dropdown: </p>
          </div>
          <div class="date-dropdown pb-2">
            <p>Date</p>
            <input v-model="newEventDate" class="date border-0 py-1.5 pl-6 pr-20" type="text" name="date" placeholder="Day, date. month, year">
          </div>

          <div class="time-dropdown">
            <p>Time</p>
            <input v-model="newEventTime" class="time border-0 py-1.5 pl-6 pr-20" type="text" name="time" placeholder="KL: 00:00 - 00:00">
          </div>

          <!-- venue -->
          <div class="top-dropdown-p">
            <p>Select a venue in the dropdown:</p>
          </div>
          <select v-model="newEventVenue" class="venue-dropdown border-0 py-1.5 pl-6 pr-20">
            <option v-for="venue in venues" :key="venue">{{ venue.venue }}</option>
          </select>

          <!-- genre -->
          <div class="top-dropdown-p">
            <p>Select a genre in the dropdown:</p>
          </div>
          <select v-model="newEventGenre" class="genres border-0 py-1.5 pl-6 pr-20">
            <option v-for="genre in genres" :value="genre.genre" :key="genre">{{ genre.genre }}</option>
          </select>

          <!-- image -->
          <input @change="uploadImg" class="image" type="file" alt="event image">

          <!-- submit button -->
          <div class="control">
            <button :disabled="addEventParameters.uploadBtnDisabled" class="button2 mt-10">Add</button>
          </div>
        </div>
      </div>
    </form>


    <!-- divider with "events" -->
    <div>
      <h2 class="event-h2">Events</h2>
    </div>

    <!-- events in a list -->
    <div v-for="event in events" :key="event.id" class="card">
      <div class="card-content mb-4">
        <div class="content p-2 w-full border-0 py-1.5 pl-7 pr-20" :class="{ 'has-background-success' : event.done}">
            <div class="column mt-5" :class="{ 'has-text-success' : event.done }">
              <div class="pb-4">
                <img :src="event.imgURL">
                <h4> {{ event.artist }} </h4>
                <p> {{ event.artistDes }} </p>
                <p> {{ event.date }}</p>
                <p> {{ event.time }} </p>
                <p> {{ event.venue }} </p>
                <p> {{ event.genre }} </p>
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
import { ref } from 'vue'
import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { 
  collection,   
  addDoc, doc, deleteDoc, updateDoc, 
} from 'firebase/firestore';
import { db } from '@/firebase'
import eventdb from '../modules/eventdb' 

// importing modules
import genres from '@/modules/useGenres' 
import venues from '@/modules/useVenues' 

const { events } = eventdb()

const storage = getStorage();


// firebase refs
const eventsCollectionRef = collection(db, 'events')

// storing which parameters that will react to "add" button
const addEventParameters = () => {
  newEventArtist
  newEventArtistDes
  newEventDate 
  newEventTime
  newEventVenue 
  newEventGenre 
  imgURL
  uploadBtnDisabled
}


// input field for adding event
const newEventArtist = ref('')
const newEventArtistDes = ref('')
const newEventDate = ref('')
const newEventTime = ref('')
const newEventVenue = ref('')
const newEventGenre = ref('')
const imgURL = ref('')
const uploadBtnDisabled = ref('true')


// adding a new event to the list with content
const addEvent = () => {
  addDoc(eventsCollectionRef, {
    artist: newEventArtist.value,
    artistDes: newEventArtistDes.value,
    date: newEventDate.value,
    time: newEventTime.value,
    venue: newEventVenue.value,
    genre: newEventGenre.value,
    imgURL: imgURL.value,
    done: false,
    order: Date.now(),
  });
  newEventArtist.value = ''
  newEventArtistDes.value = ''
  newEventDate.value = ''
  newEventTime.value = ''
  newEventVenue.value = ''
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
    // Upload completed successfully - get the download URL
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

.top-dropdown-p p {
  color: var(--white-text);
  margin-top: 12px;
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

.button {
  background-color: var(--red-cross);
  color: var(--black-headline);
  padding: 5px 20px 10px 20px;
  font-size: 22px;
  line-height: normal;
}

.button2 {
  width: 150px;
}


/* parameters to add in adminn */
.date-dropdown {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.date-dropdown p {
  color: var(--white-text);
}

.time {
  margin-bottom: 12px;
  height: 40px;
}

/* divider with "events" */
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


/* responsive  */
@media only screen and (max-width: 860px) {
  .control .input {
    width: 400px;
  }

  .content {
    width: 400px;
  }

  .date-dropdown {
    display: flex;
    flex-direction: column !important;
    gap: 0px;
  }

  .date-dropdown select {
    width: 400px;
    margin-bottom: 6px;
  }

  .date-dropdown input {
    width: 400px;
  }

  .venue-dropdown {
    width: 400px;
  }
}

@media only screen and (max-width: 550px) {
  .control .input {
    width: 300px;
  }

  .content {
    width: 300px;
  }

  .date-dropdown {
    display: flex;
    flex-direction: column !important;
    gap: 0px;
  }

  .date-dropdown select {
    width: 300px;
    margin-bottom: 6px;
  }

  .date-dropdown input {
    width: 300px;
  }

  .venue-dropdown {
    width: 300px;
  }
}


@media only screen and (max-width: 390px) {
  .control .input {
    width: 270px;
  }

  .content {
    width: 270px;
  }

  .date-dropdown {
    display: flex;
    flex-direction: column !important;
    gap: 0px;
  }

  .date-dropdown select {
    width: 270px;
    margin-bottom: 6px;
  }

  .date-dropdown input {
    width: 270px;
  }

  .venue-dropdown {
    width: 270px;
  }

}
/* responsive end */



</style>





