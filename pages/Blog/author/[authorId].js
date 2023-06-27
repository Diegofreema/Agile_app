import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { authors } from '../../../blogPosts';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Author = () => {
    const [currentAuthor, setCurrentAuthor] = useState({});
    const router = useRouter();
    const id = router?.query?.authorId;
    console.log(id);
    useEffect(() => {
        const author = authors?.find(i => i.id === id);
        setCurrentAuthor(author);
        console.log(currentAuthor);
    }, [id]);
    return (
        <div
            className="blogContainer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 150, height: 150, overflow: 'hidden', borderRadius: 6 }}>
                    <img
                        src={currentAuthor?.img}
                        objectFit="contain"
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    />
                </div>
                <h2>{currentAuthor?.authorName}</h2>
                <div className="socials" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                <p style={{ textAlign: 'center', padding: 10 }}>{currentAuthor?.info}</p>
            </div>
        </div>
    );
};

export default Author;
