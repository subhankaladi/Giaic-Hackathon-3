import { type SchemaTypeDefinition } from 'sanity'
import product from "./product"
import banner from './banner'
import help from './help'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, help],
}
