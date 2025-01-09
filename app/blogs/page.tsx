import BlogCard from '@/components/blogCard'
import { client } from '@/sanity/lib/client'
import { BlogsInterface } from '@/types/blogData.Type'
import TopBlogsPage from '@/components/topBlogsPage'


const data = await client.fetch(`*[_type == "blogs"]{
    author,
    _id,
    title,
    description,
    "slug":slug.current,
    image
    }`)



export default function Blogs() {

    return (
        <main className='md:px-5 text-gray-600 md:w-[1170px] lg:w-[1344px] container mx-auto'>
            <div className="heading md:px-5 text-center py-10 text-xl md:text-2xl lg:text-3xl font-semibold">
                <h1 className="lg:text-4xl md:text-3xl font-bold text-center text-2xl">Blogs</h1>
            </div>
            {/* display all blogs */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((blog: BlogsInterface) => {
                        return (
                            <div key={blog._id} >
                                <BlogCard blog={blog} />
                            </div>
                        )
                    })
                }
            </div>
            <div className=''>
                <div className="heading md:px-5 text-center py-10 text-xl md:text-2xl lg:text-3xl font-semibold">
                    <h1 className="lg:text-4xl md:text-3xl font-bold text-center text-2xl">Top Blogs</h1>
                </div>
                <TopBlogsPage />
            </div>
        </main>
    )
}
