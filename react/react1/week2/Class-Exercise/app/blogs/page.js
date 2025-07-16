const blogPosts = [
  { slug: 'my-first-post', title: 'My First Blog Post', content: 'This is the content of my very first blog post. Welcome to the journey!' },
  { slug: 'nextjs-routing-guide', title: 'Next.js Routing Guide', content: 'A comprehensive guide to understanding routing in Next.js App Router.' },
  { slug: 'client-vs-server-components', title: 'Client vs Server Components', content: 'Exploring the differences and use cases for Client and Server Components.' },
  { slug: 'dynamic-data-fetching', title: 'Dynamic Data Fetching in Next.js', content: 'How to fetch dynamic data for your Next.js applications.' },
];

export default function BlogsPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Our Blog Posts</h1>
      <p>Welcome to our simple blog. Click on any post to read more!</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {blogPosts.map(post => (
          <li key={post.slug} style={{ marginBottom: '15px', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
            <h2>
              {/* Link to the dynamic blog post page */}
              <a href={`/blogs/${post.slug}`} style={{ textDecoration: 'none', color: '#0070f3' }}>
                {post.title}
              </a>
            </h2>
            <p>{post.content.substring(0, 100)}...</p> {/* Show a snippet of content */}
          </li>
        ))}
      </ul>
    </div>
  );
}