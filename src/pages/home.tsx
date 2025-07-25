import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import FeaturedMovie from "@/components/featured-movie";
import TrendingCarousel from "@/components/trending-carousel";
import { useToast } from "@/hooks/useToast.ts";
import { useQuery } from "@tanstack/react-query";
import { fetchTrendingNow } from "@/services";
import { IMovie } from "@/models/types.ts";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  const [featuredMovie, setFeaturedMovie] = useState<IMovie | null>(null);
  const { toast } = useToast();

  const {
    data: trendingMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingNow"],
    queryFn: fetchTrendingNow,
  });

  useEffect(() => {
    if (trendingMovies && trendingMovies.length > 0 && !featuredMovie) {
      const lastViewedId = sessionStorage.getItem("lastViewedMovie");
      if (lastViewedId) {
        const lastViewed = trendingMovies.find(
          (movie) => movie.Id === lastViewedId,
        );
        if (lastViewed) {
          setFeaturedMovie(lastViewed);
          return;
        }
      }

      setFeaturedMovie(trendingMovies[0]);
    }
  }, [trendingMovies, featuredMovie]);

  const handleMovieSelect = (movie: IMovie) => {
    setFeaturedMovie(movie);
  };

  const handlePlay = (movie: IMovie) => {
    toast({
      title: "Playing Movie",
      description: `Starting playback of ${movie.Title}`,
    });
  };

  const handleMoreInfo = (movie: IMovie) => {
    toast({
      title: "Movie Information",
      description: `Showing details for ${movie.Title}`,
    });
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-netflix-dark flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Error Loading Content</h1>
          <p className="text-netflix-lightgray">
            Failed to load movies. Please check your connection and try again.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-netflix-dark flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-netflix-red mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold">Loading StreamFlix...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-dark text-white overflow-x-hidden">
      <div className="flex">
        <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />

        <main className="flex-1 ml-16 min-h-screen">
          {featuredMovie && (
            <FeaturedMovie
              movie={featuredMovie}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
          )}

          {trendingMovies && trendingMovies.length > 0 && (
            <TrendingCarousel
              movies={trendingMovies}
              onMovieSelect={handleMovieSelect}
            />
          )}
        </main>
      </div>
    </div>
  );
}
