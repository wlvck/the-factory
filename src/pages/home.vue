<template>
  <div>
    <div class="bg-[url('../assets/background.png')] bg-no-repeat bg-center bg-cover sm:py-[90px] py-[75px] px-4">
      <div class="max-w-[885px] w-full mx-auto flex items-center bg-white px-4 py-5">
        <input type="text" class="shrink grow focus:outline-none" placeholder="Поиск">
        <icon icon-name="search-btn"/>
      </div>
    </div>
    <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster">
      <div v-if="dataStore.randomImageList.length" class="px-4 mx-auto max-w-[1440px] w-full grid-wrapper py-4">
        <router-link
            :to="{name: 'imageDetail', params: {id: image.id}}"
            v-for="image in dataStore.randomImageList"
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
import {onMounted} from "vue";
import {useDataStore} from "../store/index.js";

const dataStore = useDataStore()
onMounted(async () => {
  await dataStore.getRandomImage()
})
</script>