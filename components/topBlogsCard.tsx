import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
interface BlogsInterface {
    blog: {
        author: string,
        _id: string,
        title: string,
        description: string,
        slug: {
            slug: {
                current: string
            }
        },
        "image": {
            image: {
                asset: {
                    url: string
                }
            }
        }
    }
}

export default function TopBlogCard({ blog }: BlogsInterface) {

    return (
        <div className="p-4 w-full sm:w-[300px] md:w-[350px] lg:w-[450px]">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                    width={192}
                    height={192}
                    className="h-48 md:h-36 w-full object-cover object-center rounded-t-lg"
                    src={urlFor(blog.image).url()}
                    alt={blog.title || 'Blog Image'}
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1 uppercase">
                        {blog.author}
                    </h2>
                    <h1 className="text-lg font-semibold text-gray-900 mb-3 truncate">
                        {blog.title}
                    </h1>
                    <p className="leading-relaxed text-gray-600 mb-3 line-clamp-3">
                        {blog.description.slice(0, 150)}...
                    </p>
                    <div className="flex items-center flex-wrap">
                        <Link
                            href={`/topBlogs/${blog.slug}`}
                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                            Learn More
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
