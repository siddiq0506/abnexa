import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://abnexatechnologies.in',
            lastModified: new Date(),
        },
        {
            url: 'https://abnexatechnologies.in/products',
            lastModified: new Date(),
        },
        {
            url: 'https://abnexatechnologies.in/about',
            lastModified: new Date(),
        },
        {
            url: 'https://abnexatechnologies.in/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://abnexatechnologies.in/book-demo',
            lastModified: new Date(),
        },
    ]
}
