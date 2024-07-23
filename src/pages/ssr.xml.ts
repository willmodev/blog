import type { APIRoute }  from 'astro';
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {

    const blogPosts = await getCollection('blog');

    return rss({

        stylesheet: '/styles/rss.xsl',
        title: 'Willinton\'s Blog',
        description: 'A blog about web development, programming and technology',
        site: site ?? '',
        items: blogPosts.map(({data, slug}) => ({
            title: data.title,
            description: data.description,
            pubDate: data.date,
            link: `/posts/${slug}`,
        })),
        customData: '<language>es-co</language>',
    })
}