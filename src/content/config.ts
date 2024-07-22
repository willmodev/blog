import { defineCollection, z, reference } from 'astro:content';



const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine((img) => img.width < 1200, {
            message: 'Image width must be less than 1200px'
        }),

        // author: z.string(),
        author: reference('author'),
        tags: z.array(z.string()),
    })
})


const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image()
    })

})


export const collections = {
    'blog': blogCollection,
    'author': authorCollection
}