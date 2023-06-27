import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { posts } from '../../../blogPosts';

import Posts from '../../../components/Posts';

const MoreRoutes = () => {
    const router = useRouter();
    const [taggedPost, setTaggedPost] = useState([]);
    const tags = router?.query?.slug[0];
    useEffect(() => {
        const currentTag = posts.filter(post => post.tag.toString() === tags.toString());
        setTaggedPost(currentTag);
    }, [tags]);
    return (
        <div className="blogContainer">
            <h1 style={{ textAlign: 'center', marginBottom: 20 }}>
                Showing posts from <span style={{ color: 'skyblue', padding: 10 }}>{tags}</span>tag
            </h1>
            <div>
                {taggedPost?.map(tag => (
                    <Posts post={tag} key={tag} />
                ))}
            </div>
        </div>
    );
};

export default MoreRoutes;
