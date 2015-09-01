module app.domain {
	export interface IProduct {
		id: number;
		name: string;
		code: string;
		releaseDate: Date;
		price: number;
		description: string;
		imageUrl: string;
		calculateDiscount(percent: number): number;
	}
	
	export class Product implements IProduct
	{	
		constructor(public id: number,
					public name: string,
					public code: string,
					public releaseDate: Date,
					public price: number,
					public description: string,
					public imageUrl: string) {			
		}
		
		calculateDiscount(percent: number): number {
			return this.price - (this.price * percent / 100);
		}		
	}
}