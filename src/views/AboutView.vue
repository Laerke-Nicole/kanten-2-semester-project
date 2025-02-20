<template>
    <section class="fifteen-percent pt-28 pb-20">
        <div class="pb-16">
            <h1 class="uppercase white-headline pb-4">Hvem er Kanten?</h1>
            <p class="white-text">Musikforeningen Kanten er Esbjergs nye kulturfællesskab, som rummer byens musikalske vækstlag. Vi tror på at hjælpe undergroundartister til toppen og tilbyder en gratis scene for livekoncerter inden for hiphop, techno, reggae og house. Derudover afholder vi diskoteksarrangementer, hvor fællesskabet og festen er i centrum - helt GRATIS.</p>
        </div>  

        <div>
            <img :src="aboutImg" alt="">
        </div>
    </section>

    <!-- genres -->
    <section class="white-bg pt-16 pb-16 five-percent">
        <div>
        <h2 class="text-center pb-12">VORES MUSIKGENRER</h2>
        </div>

        <div class="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
            <div class="flex flex-col justify-center items-center">
                <img :src="deftLogo" alt="genre logo" class="h-20">
                <h4 class="pt-6">DEFT</h4>
                <p>Hip hop</p>
            </div>

            <div class="flex flex-col justify-center items-center">
                <img :src="manaclubLogo" alt="genre logo" class="h-20">
                <h4 class="pt-6">MANA CLUB</h4>
                <p>Tecno</p>
            </div>

            <div class="flex flex-col justify-center items-center">
                <img :src="vertexLogo" alt="genre logo" class="h-20">
                <h4 class="pt-6">VERTEX</h4>
                <p>House</p>
            </div>

            <div class="flex flex-col justify-center items-center">
                <img :src="xmassivedubLogo" alt="genre logo" class="h-20">
                <h4 class="pt-6">X-MASSIVE DUB</h4>
                <p>Dancehall & reggae</p>
            </div>
        </div>
    </section>

    <!-- quote -->
    <section>
        <div class="bg-black text-white text-center pt-24 pb-10 fifteen-percent">
            <div class="z-10">
                <h4 class="white-headline pb-8">At være frivillig hos Kanten har givet mig en masse uforglemmelige minder. Stemningen er altid i top, og folk giver den fuld gas til festerne.</h4>
                <p class="white-text"><span class="font-bold">Jane Doe</span> Frivillig</p>
            </div>

            <div class="quotation-mark flex flex-row justify-end items-end">
                <img src="https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/icons%2Fquote-dark.svg?alt=media&token=b5bbb9eb-f517-43a2-b46d-3bcbc31c00a3" alt="Gåseøjne billede" class="h-24">
            </div>
        </div>
    </section>


</template>

<script setup>
// imports
import { ref } from 'vue'

const aboutImg = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-2.jpg?alt=media&token=17a1c776-a52f-418f-9213-fdf9b04bc6a2');


// genre logos
let manaclubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fmana-club-logo.svg?alt=media&token=695a4a1f-0a04-4160-8adf-d1a1cec56db3')
let deftLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fdeft-logo.svg?alt=media&token=9d7c820e-bd50-4fe7-aa00-cdf520e84bef')
let vertexLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fvertex-logo.svg?alt=media&token=b9f346bd-df7b-421b-bf84-5c6145f618b9')
let xmassivedubLogo = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/genre-logo%2Fx-massive-dub-logo.svg?alt=media&token=9a6ffabe-3708-47ac-9b38-68fd7c346128')

</script>

<style scoped>
.quotation-mark {
    margin-top: -50px;
    padding-right: 50px;
}
</style>