<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  id: {
    required: true,
  },
})


onMounted(() => {
  /* EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    }) */
})
</script>

<template>
    <div class="about">
      <h1>{{ id }}</h1>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  