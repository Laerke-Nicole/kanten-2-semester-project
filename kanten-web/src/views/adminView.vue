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
              
              <!-- date -->
              <div class="date-dropdown">
                <select v-model="newEventDate" class="dates w-full border-0 py-1.5 pl-6 pr-20">
                  <option v-for="date in dates" :key="date" >
                    <p>{{ date.date }}</p>
                  </option>
                  <option v-for="month in dates" :key="month" >
                    <p>{{ month.date }}</p>
                  </option>
                </select>
              </div>
              
              <!-- <input v-model="newEventDate" class="input border-0 py-1.5 pl-7 pr-20" type="text" name="date" placeholder="Add a date"> -->

              <!-- address -->
              <select v-model="newEventVenue" class="address-dropdopwn w-full border-0 py-1.5 pl-6 pr-20">
                  <option class="address-menu" v-for="place in address" :key="place">
                    <p>{{ place.venue }}</p>
                    <p>{{ place.address }}</p>
                  </option>
                </select>

              <!-- description -->
              <input v-model="newEventDes" class="input w-full border-0 py-1.5 pl-7 pr-20" type="text" name="des" placeholder="Add a brief description">

              <!-- sales url -->
              <input v-model="newEventUrlSales" class="input w-full border-0 py-1.5 pl-7 pr-20" type="text" name="sales_url" placeholder="Add a sales url">

              <!-- group age -->
              <input v-model="newEventAgeGroup" class="input w-full border-0 py-1.5 pl-7 pr-20" type="text" name="age" placeholder="Add a target groups age">

              <!-- price -->
              <input v-model="newEventPrice" type="text" name="price" class=" price w-full border-0 py-1.5 pl-7 pr-20" placeholder="0.00"/>
  
              <!-- genre -->
              <select v-model="newEventGenre" class="genres w-full border-0 py-1.5 pl-6 pr-20">
                <option class="genre" v-for="genre in genres" :key="genre">
                  <p>{{ genre.genre }}</p>
                </option>
              </select>
              

              <!-- image -->
              <input v-model="newEventImage" class="input w-full border-0 py-1.5 pl-7 pr-20" type="text" name="img" placeholder="Add a photo url">


          </p>
  
          <!-- button that adds event -->
          <p class="control">
            <button @click="" :disabled="!addEventParameters" class="add-button ml-8">Add</button>
          </p>
        </div>
      </form>
  
  
      <!-- events in a list -->
      <div v-for="event in events" class="card">
        <div class="card-content mb-4">
          <div class="content p-2 w-full border-0 py-1.5 pl-7 pr-20" :class="{ 'has-background-success' : event.done}">
            <div class="columns">
              <div class="column mt-5" :class="{ 'has-text-success' : event.done }">
                <div class="left-col">
                  {{ event.artist }}
                  {{ event.date }}
                  {{ event.venue }}
                  {{ event.image }}
                  {{ event.genre }}
                </div>

                <div class="right-col">
                  {{ event.des }}
                  {{ event.urlSales }}
                  {{ event.ageGroup }}
                  {{ event.price }}
                </div>

              </div>
              <div class="buttons">
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
    </div>




  </template>
  
  
  
  
  
  
  <script setup>
  // imports
  import { onMounted, ref } from 'vue'
  import { 
    collection, onSnapshot, 
    addDoc, doc, deleteDoc, updateDoc, 
    query, orderBy
  } from 'firebase/firestore';
  import { db } from '@/firebase'
  
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
    //   genre: '',
    //   price: '',
    //   image: '',
    //   done: true,
    // },
  ])
  
  
  // storing which parameters that will react to "add" button
  const addEventParameters = () => {
    newEventArtist
    newEventDate
    newEventVenue
    newEventDes
    newEventUrlSales
    newEventAgeGroup
    newEventPrice
    newEventGenre
    newEventImage
  } 


  // input field for adding event
  const newEventArtist = ref('')
  const newEventDate = ref('')
  const newEventVenue = ref('')
  const newEventDes = ref('')
  const newEventUrlSales = ref('')
  const newEventAgeGroup = ref('')
  const newEventPrice = ref('')
  const newEventGenre = ref('')
  const newEventImage = ref('')
  
  // adding a new event to the list with content
  const addEvent = () => {
    addDoc(eventsCollectionRef, {
      artist: newEventArtist.value,
      date: newEventDate.value,
      venue: newEventVenue.value,
      des: newEventDes.value,
      urlSales: newEventUrlSales.value,
      ageGroup: newEventAgeGroup.value,
      price: newEventPrice.value,
      genre: newEventGenre.value,
      image: newEventImage.value,
      done: false,
      order: Date.now(),
    });
    newEventArtist.value = ''
    newEventDate.value = ''
    newEventVenue.value = ''
    newEventDes.value = ''
    newEventUrlSales.value = ''
    newEventAgeGroup.value = ''
    newEventPrice.value = ''
    newEventGenre.value = ''
    newEventImage.value = ''
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
          date: doc.data().date,
          venue: doc.data().venue,
          des: doc.data().des,
          urlSales: doc.data().urlSales,
          ageGroup: doc.data().ageGroup,
          price: doc.data().price,
          genre: doc.data().genre,
          image: doc.data().image,
          done: doc.data().done,
        }
        fbEvents.push(event)
      });
      events.value = fbEvents
    });
  })
  

  // date
  // const dates = ref ([
  //   {
  //     date: [1, 2, 3, 4]
  //   }
  //   // {
  //   //   date: '.01',
  //   // },
  //   // {
  //   //   date: '.02',
  //   // },
  //   // {
  //   //   date: '.03',
  //   // },
  //   // {
  //   //   date: '.04',
  //   // },
  //   // {
  //   //   date: '.05',
  //   // },
  //   // {
  //   //   date: '.06',
  //   // },
  //   // {
  //   //   date: '.07',
  //   // },
  //   // {
  //   //   date: '.08',
  //   // },
  //   // {
  //   //   date: '.09',
  //   // },
  //   // {
  //   //   date: '.10',
  //   // },
  //   // {
  //   //   date: '.12',
  //   // },
  //   // {
  //   //   date: '.13',
  //   // },
  //   // {
  //   //   date: '.14',
  //   // },
  //   // {
  //   //   date: '.15',
  //   // },
  //   // {
  //   //   date: '.16',
  //   // },
  //   // {
  //   //   date: '.17',
  //   // },
  // ])





  // const getDates = () => {
  //   const dates = ref([
  //     {
  //       date: '1'
  //     },
  //   ])

  //   const month = ref([
  //     {
  //       month: 'januar',
  //     }
  //   ])

  //   const time = ref([
  //     {

  //     }
  //   ])

  //   return {
  //     date,
  //     month
  //   }

  // }





  // genres
  const genres = ref([
    {
      id: 'genre_one',
      genre: 'DEFT',
    },
    {
      id: 'genre_two',
      genre: 'MANA CLUB',
    },
    {
      id: 'genre_three',
      genre: 'VERTEX',
    },
    {
      id: 'genre_four',
      genre: 'X-MASSIVE DUB',
    },
  ])

  // address
  const address = ref([
    {
      id: 'address_one',
      venue: 'KANTEN',
      address: 'FINSENSGADE 1, 6700 ESBJERG',
    },
    {
      id: 'address_two',
      venue: 'KRAFTVÆRKET',
      address: 'GL NOVRUPVEJ 14, 6705 ESBJERG',
    },
  ])


  


  </script>
  








  <style scoped>
  h1 {
    color: var(--white-headline);
    font-size: 60px;
  }

  /* whole event list parameters */
  .event-list {
    max-width: 400px;
    padding: 70px 0 70px 120px;
    display: flex;
    flex-direction: column;
  }
  
  .field {
    display: flex;
    padding-bottom: 70px;
  }

  /* parameters */
  .control .input {
    margin-bottom: 10px;
    width: 500px;
  }

  .control select {
    margin-bottom: 10px;
  }
  
  .control ::placeholder {
    color: var(--black-text);
  }

  /* button styling for add + check and cross */
  .add-button {
    background-color: var(--red-cross);
    color: var(--black-headline);
    padding: 10px 50px;
  }

  .button {
    background-color: var(--red-cross);
    color: var(--black-headline);
    padding: 5px 20px 10px 20px;
    font-size: 22px;
    line-height: normal;
  }
  

  /* individual events */
  .content {
    display: flex;
    flex-wrap: nowrap;
    background-color: var(--white-headline);
    color: var(--black-headline);
    width: 500px;
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
  
  .content {
    display: flex;
    flex-direction: column;
  }

  .columns {
    display: flex;
    flex-direction: column;
  }

  .column {
    display: flex;
    flex-direction: column;
    font-family: var(--text-font);
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


  </style>