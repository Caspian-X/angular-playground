
export interface Product {
	id?: number;
	price: string;
	name: string;
	image: Image;
	rating: number;
}

export interface Image {
	name: string;
	url: string;
}
