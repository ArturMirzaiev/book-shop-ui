export class PatchBookRequest {
    id?: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    categoryIds: string[]
    authorIds: string[];
}