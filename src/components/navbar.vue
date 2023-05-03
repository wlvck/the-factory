<template>
  <div class="bg-black">
    <div class="sm:py-10 py-7 px-4 mx-auto max-w-[1440px] w-full flex items-center justify-between">
      <icon icon-name="logo" class="sm:w-[112px] sm:h-[43px] w-[84px] h-[32px]"/>
      <div class="flex items-center">
        <router-link :to="{name: 'home'}" class="flex items-center text-lg text-white mr-9">
          <icon icon-name="search"/>
          <p class="ml-3 sm:block hidden">Поиск</p>
        </router-link>
        <router-link :to="{name: 'favorites'}" class="flex items-center text-lg text-white">
          <icon icon-name="favorite"/>
          <p class="ml-3 sm:block hidden">Избранное</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from "./icon.vue";
</script>