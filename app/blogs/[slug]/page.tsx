
import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export interface BlogsInterface {
    author: string,
    _id: string,
    title: string,
    description: string,
    slug: string,
    image: {
        image: {
            asset: {
                url: string
            }
        }
    }
}


export default async function Slug({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const data = await client.fetch(`*[_type == "blogs" && slug.current == $slug]{
        author,
        _id,
        title,
        description,
        "slug":slug.current,
        "image":image.asset->url
        }`, { slug })

    const result: BlogsInterface = data.find((item: BlogsInterface) => item.slug === slug);
    console.log(data)
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-md">
                <Image
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover object-center rounded-t-lg"
                    src={result.image ? urlFor(result.image).url() : '/fallback-image.jpg'}
                    alt={result.title || 'Blog Image'}
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-sm font-medium text-gray-400 mb-1 uppercase">
                        {result.author}
                    </h2>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {result.title}
                    </h1>
                    <p className="leading-relaxed text-gray-600 mb-6">
                        {result.description}
                    </p>

                </div>
            </div>
        </div>

    )
}
