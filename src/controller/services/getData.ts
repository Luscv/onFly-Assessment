import hotelsData from '../Dados/hotel.json'
import placesData from '../Dados/place.json'
import { PlaceEntity } from 'src/models/entity/Place.entity'


export const fetchHotels = async (placeId?: number| null, page = 1, perPage = 10):Promise<unknown[]> => {
  let hotelsList: unknown[];
  if(placeId){
    const hotelEntry = hotelsData.find((entry) => entry.placeId === placeId)
    hotelsList = hotelEntry ? hotelEntry.hotels : []
  } else{
    hotelsList = hotelsData.flatMap((entry) => entry.hotels)
  }

  const start = (page - 1) * perPage
  const end = start + perPage

  return hotelsList.slice(start, end)
}

export const fetchPlaces = async ():Promise<PlaceEntity[]> => {
  return placesData
}
