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
