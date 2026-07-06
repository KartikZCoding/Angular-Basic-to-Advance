export interface ProductsApiResponse {
    products:Product[]
}

export interface Product{
    id:number,
    title:string,
    description:string,
    category:string,
    price:string
}