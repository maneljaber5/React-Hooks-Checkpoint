import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

function MovieList({movies}) {
  return (
    <>
    <div className='add'>
    <AddMovie />
    </div>
    <div className='container'>
        {movies.map((el) => <MovieCard movie = {el} />)}
    </div>  
    </>
  )
}

export default MovieList