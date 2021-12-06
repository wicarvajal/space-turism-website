export interface ITechnology {
  name: string;
  images: TechImages;
  description: string;
}

export interface TechImages {
  portrait: string;
  landscape: string;
}