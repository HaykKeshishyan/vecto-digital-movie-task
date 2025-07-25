import { useRef, useState } from "react";
import { IMovie } from "@/models/types.ts";
import TrendingMovieItem from "@/components/utils/TrendingMovieItem.tsx";

interface TrendingCarouselProps {
  movies: IMovie[];
  onMovieSelect: (movie: IMovie) => void;
}

export default function TrendingCarousel({
  movies,
  onMovieSelect,
}: TrendingCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const trendingMovies = [...movies]
    .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
    .slice(0, 50);

  const handleMovieClick = (movie: IMovie) => {
    sessionStorage.setItem("lastViewedMovie", movie.Id);

    onMovieSelect(movie);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);

    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;

    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="px-8 md:px-16 pb-16 -mt-32 relative z-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Trending Now</h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto pb-4 cursor-grab scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            width: "100%",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {trendingMovies.map((movie, index) => (
            <TrendingMovieItem
              key={movie.Id}
              movie={movie}
              index={index}
              handleMovieClick={handleMovieClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
