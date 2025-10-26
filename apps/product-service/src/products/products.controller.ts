import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {

 @MessagePattern('get_product')
 getProduct(id: number) {
  return {id, name:  "MacBook", price: "1000"}
 } 
}