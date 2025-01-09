import { type SchemaTypeDefinition } from 'sanity'
import { Blogs } from './blogs'
import { TopBlogs } from './topBlogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blogs, TopBlogs],
}
