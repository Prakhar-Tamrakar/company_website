import Detaildblog from '@/constants/constblogsdetails'
import BlogDetailClient from './BlogDetailClient'
import { notFound } from 'next/navigation'

export default async function Page({ params }) {
    const { slug } = await params
  const blog =  Detaildblog[slug];
  
  if (!blog) {
    notFound()
  }

  return <BlogDetailClient blog={blog} />
}
