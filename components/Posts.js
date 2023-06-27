import React from 'react';
import Link from 'next/link';

const Posts = ({ post, similar }) => {
    return (
        <div className="container">
            <img src={post.imagePath} className="postImg" alt="author" />
            <div className="author">
                <div className="img-con">
                    <img src={post.img} className="authorImg" />
                </div>
                <Link href={`/Blog/author/${post.authorId}`} passHref>
                    <span className="details linkHover ">{post.authorName}</span>
                </Link>
                <span className="details">{post.created}</span>
                {!similar && (
                    <span className="details" style={similar && { fontSize: 25, fontWeight: 600 }}>
                        {post.genre}
                    </span>
                )}
            </div>
            <div className="detail">
                <Link href={`/Blog/${post.id}`} passHref>
                    <h1>{post.heading}</h1>
                </Link>
                {!similar && <p className="brief">{post.brief}</p>}
            </div>
        </div>
    );
};

export default Posts;
