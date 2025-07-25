import { motion } from "framer-motion";
import * as React from "react";
import { IMovie } from "@/models/types.ts";

interface Props {
  movie: IMovie;
  index: number;
  handleMovieClick: (movie: IMovie) => void;
}

const TrendingMovieItem: React.FC<Props> = ({
  movie,
  handleMovieClick,
  index,
}) => {
  return (
    <motion.div
      key={movie.Id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="flex-shrink-0 cursor-pointer select-none group"
      style={{
        width: "calc((100% - 7 * 1rem) / 8)",
        minWidth: "140px",
        maxWidth: "180px",
      }}
      onClick={() => handleMovieClick(movie)}
      onMouseDown={(e) => e.preventDefault()}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <img
          src={movie.CoverImage}
          alt={`${movie.Title} Poster`}
          className="w-full h-72 object-cover rounded"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};

export default TrendingMovieItem;
