import React, { useEffect, useState } from 'react';
import { posts } from '../../blogPosts';
import Link from 'next/link';
import Featured from '../../components/Featured';
import Posts from '../../components/Posts';
import { usePagination } from '@mantine/hooks';
import { Input } from '@mantine/core';
import { AiOutlineSearch } from 'react-icons/ai';

const Blog = () => {
    const [value, setValue] = useState('');
    const [enteredValue, setEnteredValue] = useState('');
    const [searched, setSearched] = useState(false);
    const [found, setFound] = useState(posts);

    const ITEMS_PER_PAGE = 3;
    const [visibleResult, setVisibleResult] = useState(posts.slice(0, ITEMS_PER_PAGE));
    const pagination = usePagination({
        total: Math.ceil(posts.length / ITEMS_PER_PAGE),
        initialPage: 1,

        onChange(page) {
            const start = (page - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            setVisibleResult(posts.slice(start, end));
        },
    });

    const handleChange = e => {
        e.preventDefault();
        setValue(e.target.value);
    };
    const onSubmit = event => {
        event.preventDefault();
        setEnteredValue(value);
        setValue('');
        setSearched(true);
    };
    useEffect(() => {
        const filterPost = posts.filter(item =>
            enteredValue.toLowerCase() === '' ? item : item.heading.toLowerCase().includes(enteredValue.toLowerCase()),
        );
        setFound(filterPost);
    }, [posts, enteredValue]);
    console.log(found.length);
    const renderPost = () => {
        if (found.length === 0) {
            return <p style={{ fontSize: 35, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>No Post Found</p>;
        }

        return found.map((result, i) =>
            result === null ? (
                <p>No results found</p>
            ) : result.isFeatured ? (
                <Featured key={result.id} isFirst={result} />
            ) : (
                <Posts post={result} key={result.id} />
            ),
        );
    };
    console.log(enteredValue);
    return (
        <div className="bg-black blogContainer">
            <div className="searchBox">
                <form onSubmit={onSubmit}>
                    <Input
                        value={value}
                        onChange={handleChange}
                        placeholder="Type Something here"
                        rightSection={<AiOutlineSearch size={25} />}
                        className="input"
                    />
                </form>
            </div>
            {searched && (
                <p style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>
                    Search result for <span style={{ color: 'cyan' }}>{enteredValue}</span>
                </p>
            )}
            {enteredValue === '' && (
                <>
                    {visibleResult.map((result, i) =>
                        result.isFeatured ? (
                            <Featured key={result.id} isFirst={result} />
                        ) : (
                            <Posts post={result} key={result.id} />
                        ),
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button className="button" onClick={pagination.previous}>
                            Prev
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {pagination.range.map(i => (
                                <button
                                    className={`button ${pagination.active === i ? 'active' : ''}`}
                                    onClick={() => pagination.setPage(i)}
                                    key={i}
                                >
                                    {i}
                                </button>
                            ))}
                        </div>
                        <button className="button" onClick={pagination.next}>
                            next
                        </button>
                    </div>
                </>
            )}
            {enteredValue !== '' && <>{renderPost()}</>}
        </div>
    );
};

export default Blog;
