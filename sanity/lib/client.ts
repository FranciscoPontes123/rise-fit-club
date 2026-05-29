import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '6698d15x',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
})
