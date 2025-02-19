// imports
import { onMounted, ref } from 'vue'
import { 
  collection, onSnapshot,   
  query, orderBy
} from 'firebase/firestore';
import { db } from '@/firebase'



const eventdb = () => {
    
  // events
  const events = ref([])


  // firebase refs
  const eventsCollectionRef = collection(db, 'events')

  // order the events
  const eventsCollectionQuery = query(eventsCollectionRef, orderBy("order", "desc"));

  
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

  
  // get events data from firebase and writes out the value we wrote in the input onto the event itself
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
          genre: doc.data().genre,
          imgURL: doc.data().imgURL,
          done: doc.data().done,
        }
        fbEvents.push(event)
      });
      events.value = fbEvents
    });
  })






  return {
    events,
    eventsCollectionRef,
    eventsCollectionQuery,
    newEventArtist,
    newEventArtistDes,
    newEventDate,
    newEventTime,
    newEventVenue,
    newEventGenre,
    imgURL,
    uploadBtnDisabled,
    addEventParameters,
  }
}

export default eventdb
