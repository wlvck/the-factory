<template>
  <div>
    <div class="sm:bg-[url('../assets/detail-bg.png')] bg-no-repeat bg-center bg-cover sm:py-[90px] py-[75px] px-4">
      <transition enter-active-class="animate__animated animate__fadeIn animate__faster">
        <div v-if="image['webformatURL']" class="px-4 mx-auto max-w-[840px] w-full py-4">
          <div class="flex justify-between items-center mb-12">
            <div class="flex items-center">
              <img :src="image['userImageURL']" alt="" class="mr-3 w-[55px] h-[55px] rounded-lg">
              <p class="sm:text-2xl text-base sm:text-white text-black">{{ image['user'] }}</p>
            </div>
            <div class="flex">
              <icon icon-name="saveF-btn" class="mr-2 cursor-pointer" @click.prevent="addToFavorites(image)"/>
              <icon icon-name="download" class="cursor-pointer" @click.prevent="dataStore.download(image)"/>
            </div>
          </div>
          <img :src="image['webformatURL']" alt="" class="w-full">
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useDataStore} from "../store/index.js";
import {useRoute, useRouter} from "vue-router";
import Icon from "../components/icon.vue";
import {useToast} from "vue-toastification";

const route = useRoute()
const router = useRouter()
const image = ref({})
const toast = useToast()
const dataStore = useDataStore()
onMounted(async () => {
  await router.isReady()
  image.value = await dataStore.getImage(route.params['id'])
})
const addToFavorites = (image) => {
  const index = dataStore.favorites.findIndex(img => img.id === image.id);
  if (index !== -1) {
    dataStore.favorites = dataStore.favorites.filter((filImage) => filImage.id !== image.id)
    toast.success(image['user'] + ' успешно удалено из избранного')
    return
  }
  dataStore.favorites.push(image)
  toast.success(image['user'] + ' успешно добавлен в избранное')
}
</script>
