import hotelsData from '../Dados/hotel.json'
import placesData from '../Dados/place.json'
import { PlaceEntity } from 'src/models/entity/Place.entity'
import { Hotel } from 'src/models/entity/Hotel.entity'


export const fetchHotels = async (placeId?: number| null):Promise<typeof Hotel[]> => {
  if(placeId){
    const hotelEntry: typeof Hotela = hotelsData.find((entry) => entry.placeId === placeId)
    return hotelEntry ? hotelEntry.hotels : []
  }
    return hotelsData.flatMap((entry) => entry.hotels)
}

export const fetchPlaces = async ():Promise<PlaceEntity[]> => {
  return placesData
}
