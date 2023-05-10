<template>
    <div>
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email"></p>
        <p><input type="password" placeholder="Password" v-model="password"></p>
        <p><button @click="register">Submit</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //import router

const email = ref("");
const password = ref("");
const router = useRouter() //get a reference to our vue router

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Successfuly Registered!');
        router.push('/feed') //redirect to the feed
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
};


</script>

<style scoped>

</style>