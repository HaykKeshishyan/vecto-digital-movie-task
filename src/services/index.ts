import { IMovie } from "@/models/types.ts";
import moviesData from "../data/movies.json";

export const fetchTrendingNow = async (): Promise<IMovie[]> => {
  return moviesData.TendingNow;
};
