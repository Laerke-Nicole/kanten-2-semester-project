<template>
  <div class="event-list">

    <div class="title">
      Events - Kanten
    </div>

    <!-- add event -->
    <form @submit.prevent="addEvent">
      <div class="field">
        <p class="control">

          <!-- input field when adding event -->
          <input v-model="newEventContent" class="input p-2" type="text" placeholder="Add an event">
        </p>

        <!-- button that adds event -->
        <p class="control">
          <button @click="" :disabled="!newEventContent" class="button p-2 ml-3">Add</button>
        </p>
      </div>
    </form>


    <!-- events in a list -->
    <div v-for="event in events" class="card m-2">
      <div class="card-content">
        <div class="content p-2" :class="{ 'has-background-success' : event.done}">
          <div class="columns">
            <div class="column" :class="{ 'has-text-success line-through' : event.done }">
              {{ event.content }}
            </div>

            <div class="column">
              <!-- add button -->
              <button @click="toggleDone(event.id)" class="button p-3 m-1" :class="event.done ? 'is-success' : 'is-not-yet-success'">
                &check;
              </button>

              <!-- delete button -->
              <button @click="deleteEvent(event.id)" class="button p-3 m-1">
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
const eventsCollectionQuery = query(eventsCollectionRef, orderBy("date", "desc"));



// events
const events = ref([
  // {
  //   id: 'id1',
  //   content: 'Rave',
  //   done: false,
  // },
  // {
  //   id: 'id2',
  //   content: 'Hip Hop',
  //   done: true,
  // },
])


// add event

// input field for adding event
const newEventContent = ref('')


// adding a new event to the list with content
const addEvent = () => {
  addDoc(eventsCollectionRef, {
    content: newEventContent.value,
    done: false,
    date: Date.now(),
  });
  newEventContent.value = ''
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
        done: doc.data().done
      }
      fbEvents.push(event)
    });
    events.value = fbEvents
  });
})


</script>

<style scoped>
.event-list {
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  padding: 18px;
  display: flex;
  flex-direction: column;
}

.input {
  color: black;
}

.field {
  display: flex;
}

.button {
  background-color: rosybrown;
  color: black;
}


/* individual events */
.content {
  background-color: white;
  color: black;
}


/* an event thats done */
.has-background-success {
  background-color: green;
}

.has-text-success {
  color: greenyellow;
}

.line-through {
  text-decoration: line-through;
}

/* check button */
.is-success {
  background-color: purple;
}


/* an event that isnt done */
/* cross button */
.is-not-yet-success {
  background-color: aqua;
}
</style>