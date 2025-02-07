<template>
  <div class="q-my-lg" style="width: 70%;">
    <q-card class="q-pa-sm q-mb-xl">
      <q-card-section>
        <span class="text-h6">Reservar hotel</span>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <span>Destino *</span>
        <q-input outlined v-model="searchbar"/>
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
import { inject, ref } from 'vue';
import HotelCard from './HotelCard.vue';
import { HotelEntity } from 'src/models/entity/Hotel.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const openDrawer = inject<((hotel: HotelEntity) => void)>('openDrawer', () => {})

const searchbar = ''
const destino = 'Hospedagem em Belo Horizonte'

const hotelOptions = [
      {
        "id": 430,
        "favorite": true,
        "name": "Nacional Inn Belo Horizonte",
        "description": "Localizado no coração comercial e financeiro de Belo Horizonte, próximo aos principais centros de decisão da capital mineira, centros de convenções (Minascentro, Expominas), principais avenidas da cidade, fácil acesso as saídas e entradas para a cidade e ",
        "stars": "3",
        "thumb": "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_10.JPG",
        "amenities": [
          {
            "key": "WI_FI",
            "label": "Internet"
          },
          {
            "key": "RESTAURANT",
            "label": "Restaurante"
          },
          {
            "key": "ROOM_SERVICE",
            "label": "Serviço de quarto"
          }
        ],
        "hasBreakFast": true,
        "hasRefundableRoom": true,
        "hasAgreement": false,
        "nonRefundable": null,
        "address": {
          "street": "Rua Espírito Santo",
          "number": "215",
          "district": "Centro",
          "city": "Belo Horizonte",
          "state": "MG",
          "country": "BR",
          "zipCode": null,
          "fullAddress": "Rua Espírito Santo, 215 - Centro"
        },
        "images": [
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_10.JPG",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_11.JPG",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_12.JPG",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_13.JPG",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_3.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_5.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_6.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_7.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_8.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_9.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/logotipos/10415.jpg"
        ],
        "deals": null,
        "roomsQuantity": 2,
        "price": 100
      },
      {
        "id": 422,
        "favorite": true,
        "name": "Ramada Encore Virginia Luxemburgo",
        "description": "Bairro Luxemburgo, próximo do centro e da Savassi.",
        "stars": "3",
        "thumb": "https://portal.b2breservas.com.br/imgHotel/16933_201602154135_ramada1.jpg",
        "amenities": [
          {
            "key": "WI_FI",
            "label": "Internet"
          },
          {
            "key": "PUB",
            "label": "Bar"
          },
          {
            "key": "POOL",
            "label": "Piscina"
          },
          {
            "key": "PETS",
            "label": "Aceita animais de estimação"
          }
        ],
        "hasBreakFast": true,
        "hasRefundableRoom": true,
        "hasAgreement": false,
        "nonRefundable": null,
        "address": {
          "street": "Rua Gentios",
          "number": "274",
          "district": "Coração De Jesus",
          "city": "Belo Horizonte",
          "state": "MG",
          "country": "BR",
          "zipCode": null,
          "fullAddress": "Rua Gentios, 274 - Coração De Jesus"
        },
        "images": [
          "https://portal.b2breservas.com.br/imgHotel/16933_201602154135_ramada1.jpg",
          "https://portal.b2breservas.com.br/imgHotel/16271_201517101637_Ramada_Encore_Luxemburgo-25.jpg",
          "https://portal.b2breservas.com.br/imgHotel/16272_201517101818_Ramada_Encore_Luxemburgo-31.jpg",
          "https://portal.b2breservas.com.br/imgHotel/16276_201517102801_Ramada_Encore_Luxemburgo-51.jpg",
          "https://portal.b2breservas.com.br/imgHotel/16277_201517102944_Ramada_Encore_Luxemburgo-61.jpg",
          "https://portal.b2breservas.com.br/imgHotel/16273_201517102051_Ramada_Encore_Luxemburgo-31.jpg",
          "https://portal.b2breservas.com.br/imgHotel/15957_201520173901_restaurante11.jpg",
          "https://portal.b2breservas.com.br/imgHotel/20150693625_logo_relx.jpg"
        ],
        "deals": null,
        "roomsQuantity": 6,
        "price": 230
      },
      {
        "id": 416,
        "favorite": true,
        "name": "Tryp By Wyndham Belo Horizonte Savassi",
        "description": "Uma estadia sofisticada em Belo Horizonte\r\nHotel moderno no centro da cidade, próximo da Praça da Liberdade e da região de Savassi.\r\nMergulhe nos encantos cosmopolitas desta animada cidade brasileira com uma estadia contemporânea no TRYP by Wyndham Belo Horizonte Savassi. A uma curta distância de carro do Aeroporto de Belo Horizonte/Pampulha (PLU) e do Aeroporto Internacional Tancredo Neves (CNF), nosso elegante hotel para não fumantes fica próximo da Praça da Liberdade e do agitado bairro Savassi, com seus restaurantes, bares e o shopping Pátio Savassi. Também estamos a minutos do hospital Lifecenter, FIEMG e do Tribunal Regional do Trabalho....",
        "stars": "4",
        "thumb": "https://media.omnibees.com/Images/8964/Property/431060.jpg",
        "amenities": [
          {
            "key": "AIR_CONDITIONING",
            "label": "Ar condicionado"
          },
          {
            "key": "SAFE",
            "label": "Cofre"
          }
        ],
        "hasBreakFast": true,
        "hasRefundableRoom": true,
        "hasAgreement": false,
        "nonRefundable": null,
        "address": {
          "street": "R. Gonçalves Dias",
          "number": "30",
          "district": "Funcionários",
          "city": "Belo Horizonte",
          "state": "Minas Gerais",
          "country": "Brasil",
          "zipCode": null,
          "fullAddress": "R. Gonçalves Dias, 30 - Funcionários"
        },
        "images": [
          "https://media.omnibees.com/Images/8964/Property/431060.jpg",
          "https://media.omnibees.com/Images/8964/Property/431061.jpg",
          "https://media.omnibees.com/Images/8964/Property/431062.jpg",
          "https://media.omnibees.com/Images/8964/Property/431063.jpg",
          "https://media.omnibees.com/Images/8964/Property/431064.jpg",
          "https://media.omnibees.com/Images/8964/Property/431065.jpg",
          "https://media.omnibees.com/Images/8964/Property/431066.jpg",
          "https://media.omnibees.com/Images/8964/Property/431067.jpg",
          "https://media.omnibees.com/Images/8964/Property/431068.jpg",
          "https://media.omnibees.com/Images/8964/Property/431069.jpg"
        ],
        "deals": null,
        "roomsQuantity": 5,
        "price": 2456
      },
      {
        "id": 388,
        "favorite": true,
        "name": "Stop Inn Antonio Carlos",
        "description": "O Stop Inn Antonio Carlos está estrategicamente localizado a 1 km do centro da cidade, 6KM do aeroporto da Pampulha e próximo das principais empresas de Belo Horizonte.",
        "stars": "3",
        "thumb": "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/01521725291.jpg",
        "amenities": [
          {
            "key": "WI_FI",
            "label": "Internet"
          },
          {
            "key": "PARKING",
            "label": "Estacionamento"
          },
          {
            "key": "LAUNDRY",
            "label": "Lavanderia"
          },
          {
            "key": "PETS",
            "label": "Aceita animais de estimação"
          }
        ],
        "hasBreakFast": true,
        "hasRefundableRoom": true,
        "hasAgreement": false,
        "nonRefundable": null,
        "address": {
          "street": "Rua Amadeu Quáglia",
          "number": "40",
          "district": "São Cristóvão",
          "city": "Belo Horizonte",
          "state": "MG",
          "country": "BR",
          "zipCode": null,
          "fullAddress": "Rua Amadeu Quáglia, 40 - São Cristóvão"
        },
        "images": [
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/01521725291.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/101521725298.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/111521725299.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/11521725292.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/121521725300.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/131521725300.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/141521725301.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/151521725302.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/161521725302.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/21521725293.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/31521725293.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/41521725294.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/51521725295.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/5948284c2e94c.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/59482856ebf28.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/61521725296.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/71521725296.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/81521725297.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/20966/91521725298.jpg",
          "https://e-htl.s3.amazonaws.com/uploads/hotels/logotipos/20966.jpg"
        ],
        "deals": null,
        "roomsQuantity": 2,
        "price": 14564
      }
  ]

const model = ref('Recomendados')
const options = ['Recomendados', 'Melhor avaliados']
</script>
