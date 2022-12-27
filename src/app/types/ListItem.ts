interface ImageURLs {
  FullSize: string;
  Thumb: string;
}

export interface ListItemResponse {
  id: number;
  Title: string;
  Family: string;
  Width: number;
  Height: number;
  ImageURLs: ImageURLs;
}

export interface ListItem {
  title: string;
  description: string;
  imageUrl: string;
}

export type ListItems = Array<ListItem>;
export type ListItemsResponse = Array<ListItemResponse>;
