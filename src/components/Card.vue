<template>
  <router-link :to="link" class="flex flex-col items-center justify-start bg-white rounded-md cursor-pointer h-max border-2 hover:border-primary transition" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="w-full h-[220px] max-h-[220px]">
      <img :src="'./images/buildings/' + image + '.jpg'" :alt="name" :class="hover ? 'saturate-100' : 'saturate-0'" class="rounded-t-md transition object-cover w-full h-[210px]">
    </div>
    <p :class="hover ? 'text-primary' : 'text-gray-500'" class="pb-3 font-bold transition">{{ name }}</p>
  </router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/template',
    },
  },

  data() {
    return {
      hover: false,
    }
  },
})
</script>
