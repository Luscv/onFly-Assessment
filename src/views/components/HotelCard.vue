<template>
  <q-card class="flex justify-between" flat>
    <q-carousel
      style="width: 35%;"
      animated
      v-model="slide"
      control-type="push"
      control-color="white"
      control-text-color="black"
      arrows
      infinite
    >
      <q-carousel-slide v-for="(image, index) in hotel?.images" v-bind:key="index" :name="index" :img-src="image" />
    </q-carousel>
    <q-card-section style="width: 45%;">
      <div class="text-h5 text-weight-light">{{hotel?.name}}</div>
      <div class="text-grey-7">{{ hotel?.address?.city }}, {{ hotel?.address?.district }}</div>
      <div class="flex q-col-gutter-xs">
        <div class="text-grey-7">{{ hotel?.stars }}</div>
        <q-rating

          v-model="rating"
          size="1.5em"
          color="yellow"
          readonly
        />

      </div>
      <div class="q-mt-sm">
        <q-badge color="grey-7" class="q-px-md text-body2">
          {{ hotel?.hasRefundableRoom ? 'Reembolsável' : 'Não Reembolsável' }}
        </q-badge>
      </div>
    </q-card-section>
    <q-card-section style="width: 20%; border-left: 3px solid #eeee;">
      <div class="text-grey-7">
        <div>A partir de:</div>
        <div class="text-weight-bold text-h5"><span class="text-subtitle2">R$</span>{{ hotel?.price?.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}</div>
      </div>
      <div class="q-mt-lg">
        <q-btn
          padding="sm lg"
          rounded
          unelevated
          color="primary"
          label="Selecionar"
          @click="emit('select', hotel)"
        />
      </div>

    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { HotelEntity } from 'src/models/entity/Hotel.entity';
import { computed, ref } from 'vue';

const rating = computed(() => Number(hotel?.stars))
const slide = ref(1)

const emit = defineEmits(['select'])
const { hotel } = defineProps<{hotel: HotelEntity}>()
</script>
