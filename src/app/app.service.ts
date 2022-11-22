import { Injectable } from "@angular/core";
import { IProduct} from "./app";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                "productId": 1,
                "productName": "Rive",
                "discBrand": "Dynamic Discs",
                "speed": 13,
                "glide": 5,
                "turn": 0,
                "fade": 3.5,
                "weight": 173,
                "flight": "Overstable",
                "condition": "8/10",
                "imageUrl": "assets/images/Rive.webp",
                "inTheBag": true 
            },
            {
                "productId": 2,
                "productName": "Grace",
                "discBrand": "Dynamic Discs",
                "speed": 11,
                "glide": 6,
                "turn": -2,
                "fade": 2,
                "weight": 173,
                "condition": "8/10",
                "flight": "Understable",
                "imageUrl": "assets/images/Grace.webp",
                "inTheBag": true
            },
            {
                "productId": 3,
                "productName": "Scorch",
                "discBrand": "Discraft",
                "speed": 11,
                "glide": 5,
                "turn": -1,
                "fade": 2,
                "weight": 173,
                "condition": "9/10",
                "flight": "Understable",
                "imageUrl": "assets/images/scorch.jpg",
                "inTheBag": true
            }
        ]
    }


}