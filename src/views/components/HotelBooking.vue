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
          <q-btn rounded no-caps color="primary" :label="hasSearched ? 'Alterar Busca' : 'Buscar'" @click="searchHotels"/>
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
        <q-select borderless class="text-primary" v-model="sort" :options="options"/>
      </div>
    </div>

    <div>
      <q-infinite-scroll  @load="onLoad">
        <HotelCard
          class="q-mb-md"
          v-bind:key="hotel.id" v-for="hotel in displayedHotels"
          :hotel="hotel"
          @select="() => openDrawer(hotel)"
        />
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
      <div v-if="doneList" class="flex justify-center q-mb-lg q-pt-md text-h6 text-weight-light">
        Não há hotéis para listar
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, onMounted, ref, watch } from 'vue';
import HotelCard from './HotelCard.vue';
import { HotelEntity } from 'src/models/entity/Hotel.entity';
import { fetchHotels, fetchPlaces } from 'src/controller/services/getData';
import { PlaceEntity } from 'src/models/entity/Place.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const openDrawer = inject<((hotel: HotelEntity) => void)>('openDrawer', () => {})

const selectedDestination = ref<PlaceEntity>()
const destino = ref('Hospedagem em Brasil')

const sort = ref('Recomendados')
const options = ['Recomendados', 'Melhor avaliados']

const hotels = ref<HotelEntity[]>([])
const displayedHotels = ref<HotelEntity[]>([])
const perPage = 10
const hotelsLoaded = ref(0)

const doneList = ref(false)
const hasSearched = ref(false)

const places = ref<PlaceEntity[]>([])
const filteredPlaces = ref<PlaceEntity[]>([])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
fetchHotels().then((data: any) => {
  hotels.value = sortHotels(data as HotelEntity[], sort.value)
  displayedHotels.value = hotels.value.slice(0, perPage)
  hotelsLoaded.value = perPage
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

const sortHotels = (hotels: HotelEntity[], type: string) => {
  if(type === 'Recomendados'){
    return hotels.sort((a,b) => {
      const priceA = a.price ?? 0
      const priceB = b.price ?? 0
      return priceA - priceB;
    })
  }
  return hotels.sort((a, b) => {
    const starsA = Number(a.stars) ?? 0
    const starsB = Number(b.stars) ?? 0
    return starsB - starsA;
  })
}

const searchHotels = async () => {
  let data: unknown[]
  if(selectedDestination.value){
    destino.value = `Hospedagem em ${selectedDestination.value.fullname}`
    data = await fetchHotels(selectedDestination.value.placeId)
  } else {
    destino.value = 'Hospedagem em Brasil'
    data = await fetchHotels()
  }
  hotels.value = sortHotels(data as HotelEntity[], sort.value)
  displayedHotels.value = hotels.value.slice(0, perPage)
  hotelsLoaded.value = displayedHotels.value.length

  doneList.value = hotels.value.length === 0
  hasSearched.value = true
}

const onLoad = (index: number, done: any) => {
  setTimeout(() => {
    displayedHotels.value = [
      ...displayedHotels.value,
      ...hotels.value.slice(hotelsLoaded.value, hotelsLoaded.value + perPage)
    ]
    displayedHotels.value = sortHotels(hotels.value as HotelEntity[], sort.value)
    hotelsLoaded.value += perPage
    if(hotelsLoaded.value >= hotels.value.length){
      doneList.value = true
      done(true)
    } else {
      done()
    }
  }, 500)
}

watch(sort, (newVal) => {
  displayedHotels.value = sortHotels(displayedHotels.value as HotelEntity[], newVal)
})

</script>
