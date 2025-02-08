<template>
  <div class="q-my-lg" style="width: 70%;">
    <q-card class="q-pa-sm q-mb-xl">
      <q-card-section>
        <span class="text-h6">Reservar hotel</span>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <span>Destino *</span>
        <q-select
          outlined
          v-model="searchbar"
        />
        <div class="q-mt-md flex justify-end">
          <q-btn rounded no-caps color="primary" label="Buscar"/>
        </div>
      </q-card-section>
    </q-card>

    <div class="flex justify-between items-baseline">
      <div class="">
        <q-breadcrumbs separator=">" separator-color="primary" active-color="primary">
          <q-breadcrumbs-el label="Início" />
          <q-breadcrumbs-el label="Hotéis" />
          <q-breadcrumbs-el :label="destino" />
        </q-breadcrumbs>
      </div>
      <div class="flex q-gutter-sm items-baseline">
        <span>Organizar por</span>
        <q-select borderless class="text-primary" v-model="model" :options="options"/>
      </div>
    </div>

    <div>
      <HotelCard
        class="q-mb-md"
        v-bind:key="hotel.id" v-for="hotel in hotelOptions"
        :hotel="hotel"
        @select="() => openDrawer(hotel)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import HotelCard from './HotelCard.vue';
import { HotelEntity } from 'src/models/entity/Hotel.entity';
import { fetchHotels } from 'src/controller/services/getData';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const openDrawer = inject<((hotel: HotelEntity) => void)>('openDrawer', () => {})

const searchbar = ref('')
const destino = 'Hospedagem em Belo Horizonte'



const model = ref('Recomendados')
const options = ['Recomendados', 'Melhor avaliados']
</script>
