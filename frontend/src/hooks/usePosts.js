// src/hooks/usePosts.js
import { useState, useEffect } from 'react';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //useEffect = disparo da função para chamada da API na montagem do componente
    // fetch = chamada POST para o endpoint do graphql
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        query: `
                            {
                                posts {
                                    nodes {
                                        id
                                        title
                                        content
                                    }
                                }
                            }
                        `
                    })
                });
                const jsonResponse = await response.json();
                setPosts(jsonResponse.data.posts.nodes);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { posts, loading, error };
};
