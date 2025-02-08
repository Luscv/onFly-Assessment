export const amenitieFormat = (amenity: string): string => {
  if (!amenity) return ''
  const exceptions: Record<string, string> = {
    'WI_FI': 'wifi',
    'AIR_CONDITIONING': 'air',
    'PUB': 'local_bar',
    'BREAKFAST': 'free_breakfast',
    'PARKING': 'local_parking',
    'LAUNDRY': 'local_laundry_service',
    'SAFE': 'lock',
    'STEAM_ROOM': 'hot_tub',
    'ROOM_TV': 'tv',
    'RECEPTION_24_HOURS': 'local_convenience_store',
    'STAGE': 'mic',
    'AUDITORIUM': 'co_present',
    'MASSAGE': 'spa',
    'ACEPTED_CAR_CREDIT': 'credit_card',
    'PLAY_GROUND': 'attractions',
    'TRANSFER': 'airport_shuttle',
  }

  return exceptions[amenity] || amenity.toLowerCase();
}
