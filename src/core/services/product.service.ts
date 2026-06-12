import { ProductDTO } from "../dto/product.dto";
import { ENDPOINTS } from "../types/crud-service.type";
import { CrudAbstract } from "./crud.abstract";
 
class ProductService extends CrudAbstract <ProductDTO>{
 
API: ENDPOINTS = '/products';
 
}
 
export const productService = new ProductService();
 