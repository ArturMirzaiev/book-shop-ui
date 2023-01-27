import { IBook } from "./ibook";

export interface IAuthor {
    fullName: string;
    id: string;
    yearsOfLife: string;
    books: IBook[];
    
}