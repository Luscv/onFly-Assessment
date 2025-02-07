export const amenitieFormat = (amenitie: string): string => {
  const exceptions: Record<string, string> = {
    'WI_FI': 'wifi',
    'AIR_CONDITIONING': 'air',
    'PUB': 'bar'
  };

  return exceptions[amenitie] || amenitie.toLowerCase();
}
