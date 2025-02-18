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
let manaclubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/mana-club-text.svg?alt=media&token=6cabf297-be39-43c2-a6f3-3af9d0ab7bf3')
let deftLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/deft-text.svg?alt=media&token=6fefdb95-87ab-4abb-a776-8b436235b4b6')
let vertexLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/vertex-text.svg?alt=media&token=42be8067-5452-4209-8678-cd08f5b22429')
let xmassivedubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/x-massive-dub-text.svg?alt=media&token=d6cbe42d-5c89-4fad-b9c1-75e410fd8466')
