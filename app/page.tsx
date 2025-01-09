import Link from "next/link";
import TopBlogsPage from "@/components/topBlogsPage";

export default function Home() {

  return (
    <section className="container lg:w-[1344px] md:w-[1170px] mx-auto py-24">
      <div>
        <div className="heading pb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold pb-3">Welcome to Shezy Blogs</h1>
          <p className="text-base md:text-lg">
            Your go-to destination for insightful, engaging, and thought-provoking content!
          </p>
        </div>

        {/* Blog Card Container */}
        <TopBlogsPage />
        {/* Learn More Button */}
        <div className="flex justify-center mt-10">
          <Link href={"/blogs"} className="bg-blue-800 px-6 py-3 text-white rounded-md text-lg">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
