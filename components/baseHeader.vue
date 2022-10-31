<script setup>
import { ref } from 'vue';

const title = ref("Envy's Pet Services")
const navList = ref([
    "about",
    "rates",
    "contact"
])
</script>
<template>
    <header class="container">

        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div navbar-brand>
         <a class="navbar-item">Envy's Pet Services</a>
        </div>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
        <div class="navbar-menu">
        <div class="navbar-start">
         <a v-for="nav in navList" class="navbar-item" :href="`#${nav}`">{{nav}}</a>
        </div>
        </div>
        </nav>
    </header>
</template>
<style>

</style>