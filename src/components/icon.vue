<template>
  <component :is="iconName"/>
</template>

<script>
import logo from "./icons/logo.vue"
import favorite from "./icons/favorite.vue"
import search from "./icons/search.vue"
import searchBtn from "./icons/search-btn.vue"
import download from "./icons/download.vue"
import saveFBtn from "./icons/saveF-btn.vue";

export default {
  name: "icon",
  props: {
    iconName: {
      type: String
    }
  },
  components: {
    logo,
    search,
    download,
    saveFBtn,
    searchBtn,
    favorite,
  }
}
</script>
