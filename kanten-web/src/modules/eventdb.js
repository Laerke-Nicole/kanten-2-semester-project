// imports
import { onMounted, ref } from 'vue'
import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { 
  collection, onSnapshot,   
  addDoc, doc, deleteDoc, updateDoc, 
  query, orderBy
} from 'firebase/firestore';
import { db } from '@/firebase'



const eventdb = () => {
    
  // events
  const events = ref([])


  const storage = getStorage();


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
      // Upload completed successfully - get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);

        imgURL.value = downloadURL // update variable imgURL and put the image URL link in it. 
        uploadBtnDisabled.value = false // enable button after image uploaded is complete
      });
    }  
  );
  }


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
    addEvent,

  }
}

export default eventdb
