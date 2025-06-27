// app/blogs/[slug]/page.js

import React from 'react';

const blogPosts = [
  { slug: 'my-first-post', title: 'My First Blog Post', content: 'This is the content of my very first blog post. Welcome to the journey!' },
  { slug: 'nextjs-routing-guide', title: 'Next.js Routing Guide', content: 'A comprehensive guide to understanding routing in Next.js App Router.' },
  { slug: 'client-vs-server-components', title: 'Client vs Server Components', content: 'Exploring the differences and use cases for Client and Server Components.' },
  { slug: 'dynamic-data-fetching', title: 'Dynamic Data Fetching in Next.js', content: 'How to fetch dynamic data for your Next.js applications.' },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const resolvedParams = React.use(Promise.resolve(params));
  const { slug } = resolvedParams;


  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
        <h1>404 - Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <a href="/blogs" style={{ color: '#0070f3' }}>Go back to blog list</a>
      </div>
    );
  }

  const displayTitle = post.title || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{displayTitle}</h1>
      <p style={{ color: '#555', fontSize: '0.9em' }}>Slug: /{slug}</p>
      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />
      <p style={{ lineHeight: '1.6' }}>{post.content}</p>
      <a href="/blogs" style={{ color: '#0070f3', marginTop: '20px', display: 'inline-block' }}>← Back to all blogs</a>
    </div>
  );
}

