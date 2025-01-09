import { defineType, defineField } from "sanity"
export const TopBlogs = defineType(
    {
        name: "top-blogs",
        title: "Top Blogs",
        type: "document",
        fields: [
            defineField(
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                    validation: ((Rule) => Rule.required())
                }
            ),
            defineField(
                {
                    name: "slug",
                    title: "Slug",
                    type: "slug",
                    options: {
                        source: "title"
                    },
                    validation: ((Rule) => Rule.required())
                }
            ),
            defineField(
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                    validation: ((Rule) => Rule.required())
                }
            ),
            defineField(
                {
                    name: "author",
                    title: "Author",
                    type: "string",
                    validation: ((Rule) => Rule.required())
                }
            ),
            defineField(
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    options: {
                        hotspot: true
                    },
                    validation: ((Rule) => Rule.required())
                }
            ),
        ]
    }
)
