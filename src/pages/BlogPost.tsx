// src/pages/BlogPost.tsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/lib/supabase'

type BlogPost = {
    id: string
    title: string
    content: string
    excerpt: string
    image: string
    category: string
    author: string
    created_at: string
    read_time: string
}

export function BlogPost() {
    const { id } = useParams<{ id: string }>()
    const [post, setPost] = useState<BlogPost | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchBlogPost = async () => {
            if (!id) {
                setError('Post ID is missing')
                setLoading(false)
                return
            }

            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .eq('id', id)
                    .single()
                
                if (!data?.content) {
                    throw new Error('Post content is empty or missing')
                }

                if (error) throw error
                if (!data) throw new Error('Post not found')

                setPost(data)
            } catch (err) {
                console.error('Error fetching blog post:', err)
                setError('Failed to load blog post')
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchBlogPost()
        }
    }, [id])

    if (loading) {
        return (
            <div className="container mx-auto py-20 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary border-r-2 border-b-2 mx-auto"></div>
                <p className="mt-4">Loading post...</p>
            </div>
        )
    }

    if (error || !post) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold text-destructive">Error loading post</h2>
                <p className="mt-2">{error || 'The requested blog post could not be found.'}</p>
                <Button asChild className="mt-4">
                    <Link to="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-16">
            <article className="container mx-auto py-12 px-4 max-w-4xl">
                <Button variant="ghost" asChild className="mb-8">
                    <Link to="/blog" className="flex items-center">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>

                <div className="mb-8">
                    <Badge variant="secondary" className="mb-4">
                        {post.category}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center text-sm text-muted-foreground space-x-4 mt-4">
                        <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.created_at).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.read_time}
                        </div>
                    </div>
                </div>

                {post.image && (
                    <div className="mb-8 rounded-lg overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {post.content ? (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    ) : (
                        <p className="text-muted-foreground">No content available for this post.</p>
                    )}
                </div>
            </article>
        </div>
    )
}

export default BlogPost