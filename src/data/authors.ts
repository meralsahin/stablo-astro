export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Meral Sahin",
    slug: "meral-sahin",
    image: "../assets/authors/italy.png",
    bio: "",
  }
];