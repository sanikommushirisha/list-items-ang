interface ImageURLs {
  FullSize: string;
  Thumb: string;
}
export interface DisplayItem {
  id: number;
  Title: string;
  Description: string;
  Width: number;
  Height: number;
  ImageURLs: ImageURLs;
}

export type DisplayItems = Array<DisplayItem>;
