<template>
  <q-layout view="hHr lpr fFr">

    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-img width="128px" src="/public/main-logo.png"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="isDrawerOpen" side="right" :width="800" overlay behavior="mobile" elevated>
      <HotelDetails :hotel="selectedHotel"/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { HotelEntity } from 'src/models/entity/Hotel.entity'
import HotelDetails from 'src/views/components/HotelDetails.vue'
import { provide, ref } from 'vue'

const isDrawerOpen = ref<boolean>(false)
const selectedHotel = ref<HotelEntity>()

const openRightDrawer = (hotel: HotelEntity) => {
  selectedHotel.value = hotel
  isDrawerOpen.value = true
}

provide('openDrawer', openRightDrawer)
</script>
