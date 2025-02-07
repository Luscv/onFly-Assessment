<template>
  <div class="flex justify-around" >
    <div>
      <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
    >
      <q-carousel-slide v-for="(image, index) in props.images" v-bind:key="index" :name="index" :img-src="image" />
    </q-carousel>

    </div>
    <div>{{props.name}}</div>
    <div>{{ props.price }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const slide = ref(1)
const props = defineProps(
  {
    name: String,
    images: Array<string>,
    amenities: Array,
    price: Number,
    adress: Array,
    stars: Number,
    refundable: Boolean
  }
)
</script>
