import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { scheduleSchema } from './sanity/schemas/schedule'

export default defineConfig({
  name: 'rise-fit-club',
  title: 'Rise Fit Club — Admin',
  projectId: '6698d15x',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [scheduleSchema],
  },
})
