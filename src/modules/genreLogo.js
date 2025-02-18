import { ref } from 'vue'

  const genreLogo = ref([
    {
        logo: manaclubLogo,
    },
    {
        logo: deftLogo,
    },
    {
        logo: vertexLogo,
    },
    {
        logo: xmassivedubLogo,
    },
  ])

  

export default genreLogo


// logo images
let manaclubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fmana-club-logo.svg?alt=media&token=695a4a1f-0a04-4160-8adf-d1a1cec56db3')
let deftLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fdeft-logo.svg?alt=media&token=9d7c820e-bd50-4fe7-aa00-cdf520e84bef')
let vertexLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fvertex-logo.svg?alt=media&token=b9f346bd-df7b-421b-bf84-5c6145f618b9')
let xmassivedubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fx-massive-dub-logo.svg?alt=media&token=9a6ffabe-3708-47ac-9b38-68fd7c346128')
