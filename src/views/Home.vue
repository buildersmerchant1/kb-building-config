<template>
  <div class="relative">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mx-auto px-12 py-24 lg:py-32 xl:py-36 justify-center items-center overflow-y-scroll h-screen w-screen xl:h-auto xl:overflow-y-hidden">
      <card name="Storage Building" image="pvc-storage-building-single-truss" link="/storage-building" />
      <card name="Round Storage" image="round-pvc-storage-building" link="/round-storage-building" />
      <card name="Aircraft Hangar" image="aircraft-hangar" link="/aircraft-hangar" />
      <card name="Container Canopy" image="container-canopy" link="/container-canopy" />
      <card name="Enclosed Livestock" image="enclosed-livestock-shelter-pvc" link="/enclosed-livestock" />
      <card name="Open Livestock" image="open-livestock-shelter" link="/open-livestock" />
      <card name="Lorry Shelter" image="lorry-shelter" link="/lorry-shelter" />
      <card name="Vehicle Canopy" image="vehicle-canopy" link="/vehicle-canopy" />
      <card name="Metal Field Shelter" image="metal-field-shelter" link="/metal-field-shelter" />
      <card name="Steel Building" image="steel-buildings" link="/steel-building" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Card from '../components/Card.vue'

export default defineComponent({
  components: {
    FontAwesomeIcon,
    Card,
  },
})
</script>
