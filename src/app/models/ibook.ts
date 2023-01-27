import { IAuthor } from "./iauthors";
import { ICategory } from './icategory';

export class IBook {
    id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    categories: ICategory[];
    authors: IAuthor[];
}