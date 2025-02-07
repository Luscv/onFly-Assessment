<template>
  <q-layout view="hHr lpr fFr">

    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-img width="128px" src="/public/main-logo.png"/>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="isDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const isDrawerOpen = ref(false)
const selectedHotel = ref(null)

const openRightDrawer = (hotel) => {
  selectedHotel.value = hotel
  isDrawerOpen.value = true
}

provide('openDrawer', openRightDrawer)
</script>
