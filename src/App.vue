<template>
<div class="flex flex-col items-start justify-start h-screen w-screen relative overflow-hidden">
  <img src="/images/shared/construction-site.jpg" alt="Background" class="absolute inset-0 object-cover w-full h-full">
  <router-view />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      fullscreen: false,
    }
  },

  mounted() {
    window.addEventListener('resize', (evt) => {
      if ((document.fullscreenElement && document.fullscreenElement !== null) || (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) || (document.mozFullScreenElement && document.mozFullScreenElement !== null) || (document.msFullscreenElement && document.msFullscreenElement !== null)) this.fullscreen = true
      else this.fullscreen = false
    })
  },
})
</script>
