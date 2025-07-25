import { IMenuItemsType } from "@/models/types.ts";
import { PagesEnum } from "@/models/enums.ts";
import {
  genresIcon,
  homeIcon,
  moviesIcon,
  searchIcon,
  tvShowsIcon,
  watchLaterIcon,
} from "@/assets";

export const menuItems: IMenuItemsType[] = [
  { id: PagesEnum.Search, iconSrc: searchIcon, label: "Search" },
  { id: PagesEnum.Home, iconSrc: homeIcon, label: "Home" },
  { id: PagesEnum.TvShows, iconSrc: tvShowsIcon, label: "TV Shows" },
  { id: PagesEnum.Movies, iconSrc: moviesIcon, label: "Movies" },
  { id: PagesEnum.Genres, iconSrc: genresIcon, label: "Genres" },
  {
    id: PagesEnum.WatchLater,
    iconSrc: watchLaterIcon,
    label: "Watch Later",
  },
];
