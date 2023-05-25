import { ref } from 'vue'

  const genres = ref([
    {
      id: "genre_one",
      genre: "MANA CLUB",
      logo: "https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/mana-club-text.svg?alt=media&token=6cabf297-be39-43c2-a6f3-3af9d0ab7bf3",
    },
    {
      id: "genre_two",
      genre: "DEFT",
      // logo: manaclubLogo,
    },
    {
      id: "genre_three",
      genre: "VERTEX",
      logo: "https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/vertex-text.svg?alt=media&token=42be8067-5452-4209-8678-cd08f5b22429",
    },
    {
      id: "genre_four",
      genre: "X-MASSIVE DUB",
      logo: "https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/x-massive-dub-text.svg?alt=media&token=d6cbe42d-5c89-4fad-b9c1-75e410fd8466",
    },

  ])

export default genres
