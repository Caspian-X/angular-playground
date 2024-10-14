
export interface Product {
	id?: number;
	price: string;
	name: string;
	image: Image;
	rating: number;
	types?: string[];
	attributes?: string[];
}

export interface Image {
	name: string;
	url: string;
}
