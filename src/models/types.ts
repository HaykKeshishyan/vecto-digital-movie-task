import { PagesEnum } from "@/models/enums.ts";

export interface IMenuItemsType {
  id: PagesEnum;
  iconSrc: string;
  label: string;
}

export interface IMovie {
  Id: string;
  Title: string;
  Category: string;
  ReleaseYear: string;
  MpaRating: string;
  Duration: string;
  Description: string;
  CoverImage: string;
  TitleImage?: string | null;
  VideoUrl?: string | null;
  Date: string;
}
