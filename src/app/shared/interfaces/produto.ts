export interface IProduct {
    name: string;
    price: number;
}

export interface IGetProducts {
    sub_categoria: string;
    product_list: IProduct[];
}