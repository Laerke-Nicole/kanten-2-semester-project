<template>
    <div class="five-percent flex flex-row gap-20 pt-28">
        <div>
            <h1 class="uppercase">About Kanten</h1>
        </div>

        <div>
            <img :src="aboutImg" alt="">
        </div>
    </div>

    <div>
        
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue'

const aboutImg = ref('https://firebasestorage.googleapis.com/v0/b/kanten-web.appspot.com/o/collage%2Fimg-2.jpg?alt=media&token=17a1c776-a52f-418f-9213-fdf9b04bc6a2');
</script>

<style scoped>

</style>