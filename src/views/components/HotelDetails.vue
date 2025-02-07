<template>
  <div class="q-pa-md">
    <div class="flex q-col-gutter-xs q-mb-sm">
      <div class="text-grey-7 text-caption">{{ hotel?.stars }}</div>
        <q-rating
          v-model="rating"
          size="1em"
          color="yellow"
          readonly
        />
    </div>
    <div class="text-h5 text-weight-light">{{hotel?.name}}</div>
    <div class="text-grey-7 q-mb-md">{{ hotel?.address?.city }}, {{ hotel?.address?.district }}</div>
    <q-carousel
      animated
      v-model="slide"
      control-type="push"
      control-color="white"
      control-text-color="black"
      arrows
      infinite
    >
      <q-carousel-slide v-for="(image, index) in hotel?.images" v-bind:key="index" :name="index" :img-src="image" />
      <template v-slot:control>
        <div class="absolute-bottom text-white text-center q-mb-md" >
          <span class="q-py-sm q-px-md" style="background: rgba(0, 0, 0, 0.6); border-radius: 16px;">{{ slide + 1 }} / {{ hotel?.images?.length }}</span>
        </div>
      </template>
    </q-carousel>
    <div class="q-mt-lg">
      <span class="text-h6 text-weight-light">Facilidades do hotel</span>
      <q-separator/>
      <div class="q-my-md">
        {{ hotel?.amenities }}
        <div class="flex justify-center q-mt-md">
          <q-btn
            padding="sm xl"
            rounded
            outline
            color="primary"
            label="Mostrar todas as facilidades"
          />
        </div>
      </div>
    </div>
    <q-separator/>
    <div class="q-mt-sm">
      <span class="text-h6 text-weight-light">Conheça um pouco mais</span>
      <div class="text-caption text-weight-regular q-mt-md">
        {{ hotel?.description }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { HotelEntity } from 'src/models/entity/Hotel.entity';
import { computed, ref } from 'vue';

const slide = ref(1)
const {hotel} = defineProps<{ hotel: HotelEntity | undefined }>()
const rating = computed(() => Number(hotel?.stars))

</script>
