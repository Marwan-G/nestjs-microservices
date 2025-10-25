import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('create_order')
  async createOrder(createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern('get_all_orders')
  async getAllOrders() {
    return this.ordersService.findAll();
  }

  @MessagePattern('get_order_by_id')
  async getOrderById(data: { id: number }) {
    return this.ordersService.findOne(data.id);
  }

  @MessagePattern('update_order')
  async updateOrder(data: { id: number; updateOrderDto: UpdateOrderDto }) {
    return this.ordersService.update(data.id, data.updateOrderDto);
  }

  @MessagePattern('delete_order')
  async deleteOrder(data: { id: number }) {
    return this.ordersService.remove(data.id);
  }

  @EventPattern('order_created')
  async handleOrderCreated(data: any) {
    console.log('Order created event received:', data);
    // Handle order created event
  }

  @EventPattern('order_updated')
  async handleOrderUpdated(data: any) {
    console.log('Order updated event received:', data);
    // Handle order updated event
  }
}
