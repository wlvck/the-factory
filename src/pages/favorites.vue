<template>
  <div>
    <h2 class="text-center text-black my-[23px] sm:my-[80px] sm:text-7xl	text-xl">Избранное</h2>
    <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster">
      <div v-if="dataStore.favorites.length" class="px-4 mx-auto max-w-[1440px] w-full grid-wrapper py-4">
        <router-link
            :to="{name: 'imageDetail', params: {id: image.id}}"
            v-for="image in dataStore.favorites"
            :key="image.id"
            class="flex justify-center items-center">
          <img
              :src="image['webformatURL']"
              class="object-cover rounded-lg w-full h-full inline-block align-middle cursor-pointer"
              alt=""/>
        </router-link>
      </div>
    </transition>
  </div>
</template>
<script setup>
import Icon from "../components/icon.vue";
import {useDataStore} from "../store/index.js";

const dataStore = useDataStore()
</script>