import React from 'react';
import Link from 'next/link';
const Featured = ({ isFirst }) => {
    return (
        <div className="container">
            <img src={isFirst.imagePath} className="imgF" alt="author" />
            <div className="author">
                <div className="img-con">
                    <img src={isFirst.img} className="authorImg" />
                </div>
                <Link href={`/Blog/author/${isFirst.authorId}`} passHref>
                    <span className="linkHover" className="details">
                        {isFirst.authorName}
                    </span>
                </Link>
                <span className="details">{isFirst.created}</span>
                <span className="details">{isFirst.genre}</span>
            </div>
            <div className="detail">
                <Link href={`/Blog/${isFirst.id}`} passHref>
                    <h1>{isFirst.heading}</h1>
                </Link>
                <p className="brief">{isFirst.brief}</p>
            </div>
        </div>
    );
};

export default Featured;
