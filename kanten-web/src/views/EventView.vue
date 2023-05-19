<template>
    <div v-for="event in events" :key="event">

    </div>
    <div class="front-img">
        <img :src="event.imgURL">
        <div>
            <p>{{ event.genre }}</p>
            <h1>{{ event.artist }}</h1>
        </div>
        <div>
            <p> {{ event.date }} </p>
            <div>
                <!-- change to logo for genre -->
                <img :src="event.logo">
            </div>
        </div>
    </div>

    <div class="tickets-box secondary-background-img">
        <div class="primary-background-img">
            <div>
                <div>
                    <div>
                        <p>{{ event.date }}</p>
                        <h3>{{ event.artist }}</h3>
                    </div>
                    <div>
                        <RouterLink to={{ event.urlSales }}><button>Gratis billetter</button></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="des-venue secondary-background-img-light">
        <div>
            <div>
                <h2>Beskrivelse</h2>
                <p>{{ event.des }}</p>
            </div>
            <div>
                <h2>Lokation</h2>
                <div>google maps</div>
                <p>{{ event.venue }}</p>
            </div>
        </div>
    </div>

    <div>
        <!-- type event fx musik, osv -->
        <h2>{{ event.type }} starter</h2>
        <div>
            <div>
                <p>{{ event.date }}</p>
            </div>
            <div>
                <p>{{ event.month }}</p>
            </div>
            <div>
                <p>{{ event.time }}</p>
            </div>
        </div>
    </div>

    <div class="about">
        <div>
            <div>
                <h2>Om {{ event.artist }}</h2>
                <p>{{ event.artistDec }}</p>
            </div>
            <div>
                <img :src="event.imgURL">
            </div>
        </div>
    </div>

    <div class="collage primary-background-img">
        
    </div>
</template>

<script setup>
// imports
import event from '@/views/AdminView.vue' 
import events from '@/views/AdminView.vue' 


</script>

<style scoped>

</style>