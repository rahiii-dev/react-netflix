import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

const Body = () => {
    return (
        <>
            <Header/>
            <main className='relative -top-32'>
                <MovieList title="New Releases"/>
                <MovieList title="Trending"/>
            </main>
        </>
    );
}

export default Body;
