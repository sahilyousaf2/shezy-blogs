import TopBlogCard from "@/components/topBlogsCard";
import { BlogsInterface } from '@/types/blogData.Type'
import { client } from "@/sanity/lib/client";

const data = await client.fetch(`*[_type == "top-blogs"]{
    author,
    _id,
    title,
    description,
    "slug":slug.current,
    image
    }`)


export default function TopBlogsPage() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map((blog: BlogsInterface) => {
                    return (
                        <div key={blog._id} >
                            <TopBlogCard blog={blog} />
                        </div>
                    )
                })
            }
        </div>

    )
}
