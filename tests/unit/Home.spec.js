import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the welcome message', () => {
    const welcomeText = wrapper.text()
    expect(welcomeText).toContain('Vue 2 Option API の勉強へようこそ！')
  })

  it('has the correct number of features', () => {
    const features = wrapper.vm.features
    expect(features).toHaveLength(4)
  })

  it('includes TodoList component', () => {
    expect(wrapper.findComponent({ name: 'TodoList' })).toBeTruthy()
  })

  it('has features with correct structure', () => {
    const features = wrapper.vm.features
    features.forEach(feature => {
      expect(feature).toHaveProperty('id')
      expect(feature).toHaveProperty('title')
      expect(feature).toHaveProperty('description')
      expect(feature).toHaveProperty('status')
      expect(feature).toHaveProperty('statusText')
    })
  })

  it('logs when component is mounted', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    wrapper.vm.$options.mounted[0].call(wrapper.vm)
    expect(consoleSpy).toHaveBeenCalledWith('Home component mounted')
    consoleSpy.mockRestore()
  })
}) 