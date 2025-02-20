<template>

    <div class="login-page">
        <form class="form">
            <h3 class="form-title">Log ind</h3>

            <!-- email -->
            <div class="input-container pt-2">
                <p>E-mail</p>
                <p><input type="text" v-model="email"></p>
            </div>
            
            <!-- password -->
            <div class="input-container pt-1">
                <p>Adgangskode</p>
                <p><input type="password" v-model="password"></p>
                <p v-if="errMsg">{{ errMsg }}</p>
            </div>
                <p><button @click.prevent="logIn" type="submit" class="button1">Log ind</button></p>
        </form>
    </div>

</template>


<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //import router

const email = ref("");
const password = ref("");
const errMsg = ref() 
const router = useRouter() 

const logIn = () => {
    console.log("set")
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Successfuly signed in!', data);
        router.push('/admin') //redirect to the admin
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Vi fandt ingen bruger med denne e-mail";
                break;
            case "auth/user-not-found":
                errMsg.value = "Ingen bruger med den e-mail blev fundet";
                break;
            case "auth/wrong-password":
                errMsg.value = "Forkert password";
                break;
            default:
                errMsg.value = "E-mail eller adgangskode var forkert";
                break;
        }
        
        alert(error.message);
    })
};


</script>


<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    padding: 150px 10% 70px 10%;
}

.form {
  background-color: var(--secondary-color);
  display: block;
  padding: 3rem;
  padding-bottom: 4rem;
  max-width: 350px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  clip-path: var(--edge-event-card);
}

.form-title {
  font-size: 36px;
  margin-top: 16px;
}

.input-container {
  position: relative;
  width: 250px;
}

.input-container input, .form button {
  outline: none;
  margin: 8px 0;
}

.input-container input {
  padding: 1rem;
  padding-right: 3rem;
  width: 100%;
  background-color: var(--white-headline);
  outline: none;
  box-shadow: 0px 10px 20px -18px;
  border: 2px solid var(--primary-color);
  padding: 10px 0 10px 10px;
  margin: 6px 0;
}

.button1 {
    margin-top: 24px !important;
    width: 100%;
}


/* responsive */
@media only screen and (max-width: 500px) {
    .form {
    padding: 2rem;
    padding-bottom: 3rem;
    max-width: 300px;
    }

    .input-container {
    position: relative;
    width: 200px;
    }
}

</style>