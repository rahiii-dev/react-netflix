import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

const Body = () => {
    return (
        <>
            <Header/>
            <main className='relative -top-32'>
                <MovieList title="New Releases" url="movie/upcoming"/>
                <MovieList title="Top Rated" url="movie/top_rated"/>
                <MovieList title="Popular" url="movie/popular"/>
            </main>
        </>
    );
}

export default Body;
