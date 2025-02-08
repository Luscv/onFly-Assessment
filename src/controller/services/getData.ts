import hotelsData from '../Dados/hotel.json'
import placesData from '../Dados/place.json'


export async function fetchHotels() {
  return hotelsData[0].hotels
}

export async function fetchPlaces() {
  return placesData
}
