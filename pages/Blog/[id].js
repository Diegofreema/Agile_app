import React, { useEffect } from 'react';
import Design from '../../components/Design';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { posts } from '../../blogPosts';
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Posts from '../../components/Posts';

const PostDetail = () => {
    const [currentPost, setCurrentPost] = useState({});
    const router = useRouter();
    const postId = router?.query?.id;

    useEffect(() => {
        const particularPost = posts.find(post => post.id === postId);
        setCurrentPost(particularPost);
    }, [postId]);

    const firstThree = posts.slice(0, 3);

    return (
        <div className="blogContainer" style={{ marginBottom: 20, paddingRight: 20, paddingLeft: 20 }}>
            <div className="detail-container">
                <h1 style={{ textAlign: 'center', fontSize: '35px', marginBottom: '-3px' }}>{currentPost?.heading}</h1>
                <div className="author" style={{ justifyContent: 'center', marginBottom: 30 }}>
                    <div className="img-con">
                        <img src={currentPost.img} className="authorImg" />
                    </div>
                    <span className="details bn">{currentPost.authorName}</span>
                    <span className="details bn">{currentPost.created}</span>
                    <span className="details bn">{currentPost.genre}</span>
                </div>
                <div>
                    <img src={currentPost.imagePath} className="imgF" alt="author" />

                    <p style={{ fontSize: 17, lineHeight: 1.8, color: 'GrayText' }}>{currentPost.detail}</p>
                    <Design />
                    <p style={{ fontSize: 16 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque
                        eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est
                        adipisci dolorem ut eius!
                    </p>
                </div>
            </div>
            <div className="bottom">
                <div className="tag">
                    <Link href={'/Blog/More/diy'}>
                        <span className="link">#DIY</span>
                    </Link>
                    <Link href={'/Blog/More/toy'}>
                        <span className="link">#TOY</span>
                    </Link>
                </div>
                <div className="socials">
                    <a className="a" href="https://www.facebook.com/agilecarrental/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a className="a" href="https://www.instagram.com/agilecarrental" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a className="a" href="https://www.youtube.com/@AgileCarRental" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div style={{ marginTop: 200 }}>
                <h1 style={{ textAlign: 'center' }}>Similar Posts</h1>
                <div className="similarCon">
                    {firstThree.map(post => (
                        <Posts post={post} key={post.id} similar />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
