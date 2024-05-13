// src/components/PostsComponent.jsx
//componente react para usar o hook "usePosts" e exibir os dados do wp
import React from 'react';
import { usePosts } from '../hooks/usePosts';

const PostsComponent = () => {
    const { posts, loading, error } = usePosts();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
