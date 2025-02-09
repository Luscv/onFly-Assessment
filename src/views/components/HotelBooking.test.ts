import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HotelBooking from '@/views/components/HotelBooking.vue'
import HotelCard from '@/views/components/HotelCard.vue'

vi.mock('@/controller/services/getData.ts', () => ({
  fetchHotels: vi.fn(() => Promise.resolve(Array(10).fill({ id: 1, name: 'Hotel Teste' }))),
  fetchPlaces: vi.fn(() => Promise.resolve([])) 
}))

describe('HotelBooking.vue', () => {
  it('renders 10 HotelCards', async () => {
    const wrapper = mount(HotelBooking)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAllComponents(HotelCard)).toHaveLength(10)
  })
})
