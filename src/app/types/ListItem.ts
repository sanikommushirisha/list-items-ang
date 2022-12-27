interface ImageURLs {
  FullSize: string;
  Thumb: string;
}

export interface ListItemResponse {
  Id: number;
  Title: string;
  Family: string;
  Description: string;
  Width: number;
  Height: number;
  CollectiveNoun: string;
  Genus: string;
  ImageURLs: ImageURLs;
}

export interface ListItem {
  id: number;
  title: string;
  detail: string;
  extraDetail: string;
  description: string;
  imageUrl: string;
  thumbNailUrl: string;
}

export type ListItems = Array<ListItem>;
export type ListItemsResponse = Array<ListItemResponse>;
