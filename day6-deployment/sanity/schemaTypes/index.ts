import { type SchemaTypeDefinition } from 'sanity'
import product from "./product"
import banner from './banner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner],
}
