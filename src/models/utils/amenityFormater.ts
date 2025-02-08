export const amenitieFormat = (amenity: string): string => {
  if (!amenity) return ''
  const exceptions: Record<string, string> = {
    'WI_FI': 'wifi',
    'AIR_CONDITIONING': 'air',
    'PUB': 'bar'
  };

  return exceptions[amenity] || amenity.toLowerCase();
}
