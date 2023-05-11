<template>
    <div class="event-list">
  
      <div class="title">
        <h1>Add events</h1>
      </div>
  
      <!-- add event -->
      <form @submit.prevent="addEvent">
        <div class="field">
  
          <p class="control">
            <!-- input field when adding event -->
              <input v-model="newEventContent" class="input p-2" type="text" placeholder="Add an artist">
              <input v-model="newEventDate" class="input p-2" type="text" placeholder="Add a date">
              <input class="input p-2" type="text" placeholder="Add a venue">
              <input class="input p-2" type="text" placeholder="Add a brief description">
              <input class="input p-2" type="text" placeholder="Add a sales url">
              <input class="input p-2" type="text" placeholder="Add a target groups age">
              <input class="input p-2" type="text" placeholder="Price">
  
                <!-- genre -->
                <select class="genres">
                  <option class="genre" v-for="genre in genres" :key="genre">
                    <p>{{ genre.genre }}</p>
                  </option>
                </select>
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
          <div class="content p-2" :class="{ 'has-background-success' : event.done}">
            <div class="columns">
              <div class="column" :class="{ 'has-text-success line-through' : event.done }">
                {{ event.content }}
                {{ event.date }}
              </div>
  
              <div class="column">
                <!-- add button -->
                <button @click="toggleDone(event.id)" class="button mt-2 mr-2 mb-5" :class="event.done ? 'is-success' : 'is-not-yet-success'">
                  &check;
                </button>
  
                <!-- delete button -->
                <button @click="deleteEvent(event.id)" class="button mt-2 mb-5">
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
    //   content: 'Rave',
    //   date: '',
    //   venue: '',
    //   artust: '',
    //   description: '',
    //   url_sales: '',
    //   genre: '',
    //   done: false,
    // },
    // {
    //   id: 'id2',
    //   content: 'Hip Hop',
    //   date: '',
    //   venue: '',
    //   artust: '',
    //   description: '',
    //   url_sales: '',
    //   genre: '',
    //   done: true,
    // },
  ])
  
  
  // add event
  
  const addEventParameters = () => {
    newEventContent
    newEventDate
  } 


  // input field for adding event
  const newEventContent = ref('')
  const newEventDate = ref('')
  
  // adding a new event to the list with content
  const addEvent = () => {
    addDoc(eventsCollectionRef, {
      content: newEventContent.value,
      date: newEventDate.value,
      done: false,
      order: Date.now(),
    });
    newEventContent.value = ''
    newEventDate.value = ''
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
  
  
  // get events
  onMounted(() => {
    onSnapshot(eventsCollectionQuery, (querySnapshot) => {
      const fbEvents = [];
      querySnapshot.forEach((doc) => {
        const event = {
          id: doc.id,
          content: doc.data().content,
          date: doc.data().date,
          done: doc.data().done
        }
        fbEvents.push(event)
      });
      events.value = fbEvents
    });
  })
  
  
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
  .input {
    margin-bottom: 10px;
    width: 500px;
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
  }
  
  
  /* individual events */
  .column {
    font-size: 22px;
    font-family: var(--text-font);
    line-height: normal;
  }

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
  
  .line-through {
    text-decoration: line-through;
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
  
  
  /* genre dropdown styling */
  .genres {
    color: var(--black-text);
    padding: 10px;
  }
  
  .genre {
    color: var(--black-headline);  
  }
  
  </style>