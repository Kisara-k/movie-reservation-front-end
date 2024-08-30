'use client';
import { MovieForm } from './movieForm';
import { MovieList } from './movieList';

const refreshMovies = () => {
  // Logic to refresh the movie list
};

export default function Home() {
  return (
    <main>
      <MovieList />
      <MovieForm onMovieAdded={refreshMovies} />
    </main>
  );
}
