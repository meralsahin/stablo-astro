export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Merel Sahin",
    slug: "meral-sahin",
    image: "./src/assets/authors/italy.png",
    bio: "",
  }
];