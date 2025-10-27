import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
// import { OrdersService } from './orders.service';

export class OrdersController {
  @MessagePattern('create_order')
  createOrder(order: any) {
    return {message: "order created now", order}
   }
 }