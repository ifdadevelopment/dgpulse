import React from 'react'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogSection from '../components/BlogSection'

export default function BlogPage({blogs}) {
    return (
        <main className='pageOffset'>
            <BlogHeroSection />
            <BlogSection
                heading="Latest Tech Blogs"
                paragraph="Explore the latest trends and insights in technology, design, and marketing."
                blogData={blogs}
                showTabs={true}
                maxBlogs={100}
            />
        </main>
    )
}
