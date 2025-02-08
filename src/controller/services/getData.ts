import hotelsData from '../Dados/hotel.json'
import placesData from '../Dados/place.json'
import { PlaceEntity } from 'src/models/entity/Place.entity'


export const fetchHotels = async (placeId?: number| null):Promise<unknown[]> => {
  let hotelsList: unknown[];
  if(placeId){
    const hotelEntry = hotelsData.find((entry) => entry.placeId === placeId)
    return hotelEntry ? hotelEntry.hotels : []
  }
    return hotelsList = hotelsData.flatMap((entry) => entry.hotels)
}

export const fetchPlaces = async ():Promise<PlaceEntity[]> => {
  return placesData
}
