import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-600 dark:text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="lg:flex lg:justify-between lg:space-x-10">
                    {/* Left Column: Text Content */}
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-gray-900 dark:text-white mb-6">
                            Welcome to Shezy Blogs
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            Shezy Blogs is a digital platform that brings together stories, ideas, and inspiration. We are passionate about sharing knowledge and connecting curious minds across a variety of topics.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            Founded with the goal of fostering creativity, learning, and exploration, Shezy Blogs aims to be more than just a website. It is a vibrant community where readers and creators alike can connect, share, and grow.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                            Whether you are looking for practical advice, in-depth tech reviews, personal growth strategies, or inspiring travel stories, you well find something here that speaks to you.
                        </p>
                    </div>
                    {/* Right Column: Image */}
                    <div className="lg:w-1/3 mt-5 lg:mt-0">
                        <Image
                            className="rounded-lg shadow-lg object-cover object-center w-full h-96"
                            src="/about.jpg"
                            alt="Shezy Blogs Team"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
