import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMovie } from "@/models/types.ts";

interface FeaturedMovieProps {
  movie: IMovie;
  onPlay: (movie: IMovie) => void;
  onMoreInfo: (movie: IMovie) => void;
}

export default function FeaturedMovie({
  movie,
  onPlay,
  onMoreInfo,
}: FeaturedMovieProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setShowVideo(false);
    setIsVideoLoaded(false);

    timeoutRef.current = setTimeout(() => {
      if (movie.VideoUrl) {
        setShowVideo(true);
      }
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [movie.Id, movie.VideoUrl]);

  const handleVideoCanPlay = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <motion.div
        key={`bg-${movie.Id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideo && isVideoLoaded ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${movie.CoverImage})`,
        }}
      />

      <AnimatePresence>
        {showVideo && movie.VideoUrl && (
          <motion.video
            ref={videoRef}
            key={`video-${movie.Id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            onCanPlay={handleVideoCanPlay}
            onLoadedData={handleVideoCanPlay}
          >
            <source src={movie.VideoUrl} type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <motion.div
        key={`content-${movie.Id}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 px-8 md:px-16 max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          <span className="text-sm uppercase tracking-wider text-netflix-lightgray">
            {movie.Category}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white"
        >
          {movie.Title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center space-x-4 mb-6 text-sm text-netflix-lightgray"
        >
          <span>{movie.ReleaseYear}</span>
          <span>{movie.MpaRating}</span>
          <span>{Math.floor(parseInt(movie.Duration) / 60)}m</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-lg leading-relaxed mb-8 max-w-lg text-netflix-lightgray"
        >
          {movie.Description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex space-x-4"
        >
          <Button
            onClick={() => onPlay(movie)}
            className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors duration-200 font-semibold flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Play</span>
          </Button>
          <Button
            onClick={() => onMoreInfo(movie)}
            variant="secondary"
            className="bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-200 font-semibold flex items-center space-x-2"
          >
            <Info className="w-5 h-5" />
            <span>More Info</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
