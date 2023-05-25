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






  return {
    events,
    eventsCollectionRef,
    eventsCollectionQuery,
    newEventArtist,
    newEventArtistDes,
    newEventDate,
    newEventMonth,
    newEventTime,
    newEventVenue,
    newEventDes,
    newEventUrlSales,
    newEventAgeGroup,
    newEventPrice,
    newEventCategory,
    newEventGenre,
    imgURL,
    uploadBtnDisabled,
    addEventParameters,
  }
}

export default eventdb
