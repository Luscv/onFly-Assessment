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
          v-model="selectedDestination"
          use-input
          input-debounce="300"
          :options="filteredPlaces"
          option-value="placeId"
          option-label="fullname"
          map-options
          @filter="filterPlaces"
        />
        <div class="q-mt-md flex justify-end">
          <q-btn rounded no-caps color="primary" :label="selectedDestination ? 'Alterar Busca' : 'Buscar'" @click="searchHotels"/>
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
        v-bind:key="hotel.id" v-for="hotel in hotels"
        :hotel="hotel"
        @select="() => openDrawer(hotel)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue';
import HotelCard from './HotelCard.vue';
import { HotelEntity } from 'src/models/entity/Hotel.entity';
import { fetchHotels, fetchPlaces } from 'src/controller/services/getData';
import { PlaceEntity } from 'src/models/entity/Place.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const openDrawer = inject<((hotel: HotelEntity) => void)>('openDrawer', () => {})

const selectedDestination = ref<PlaceEntity>()
const destino = ref('Hospedagem em Brasil')

const model = ref('Recomendados')
const options = ['Recomendados', 'Melhor avaliados']

const hotels = ref<HotelEntity[]>([])

const places = ref<PlaceEntity[]>([])
const filteredPlaces = ref<PlaceEntity[]>([])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
fetchHotels().then((data: any) => {
  hotels.value = data
});

fetchPlaces().then(data => {
  places.value = data.map(place => ({
    placeId: place.placeId,
    fullname: `${place.name}, ${place?.state?.shortname}`
  }))
  filteredPlaces.value = places.value
})

const filterPlaces = (input: string, update: (fn: ()=> void) => void) => {
  update(() => {
    filteredPlaces.value = input
      ? places.value.filter(place => place.fullname?.toLowerCase().includes(input.toLowerCase()))
      : places.value
  })
}



const searchHotels = async () => {
  if(selectedDestination.value){
    destino.value = `Hospedagem em ${selectedDestination.value.fullname}`
    const data = await fetchHotels(selectedDestination.value.placeId)
    hotels.value = data as HotelEntity[]
  } else {
    destino.value = 'Hospedagem em Brasil'
    const data = await fetchHotels()
    hotels.value = data as HotelEntity[]
  }

}
</script>
