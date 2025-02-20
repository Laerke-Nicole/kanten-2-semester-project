<template>
    <div class="five-percent pt-48">
        <div class="flex flex-col gap-8 pb-16">
            <div>
                <h1 class="white-headline pb-4 uppercase">Kontakt os</h1>
                <p class="white-text">Vi er klar på telefon og mail</p>
                <div v-for="hour in openingHours" :key="hour.time">
                    <p class="white-text">{{ hour.time }}</p>
                </div>
            </div>

            <div>
                <p class="white-text">+45 28 97 11 85</p>
                <p class="white-text">Musikforeningenkanten@gmail.com</p>
            </div>

        </div>
    </div>
</template>

<script setup>
// import
import { openingHours } from '../modules/useOpeningHours.js'

</script>

<style scoped>

</style>