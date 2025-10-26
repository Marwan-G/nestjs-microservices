import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NestMicroservice_CLIENT } from 'src/constant';

@Controller('order')
export class OrderController {
    constructor(@Inject(NestMicroservice_CLIENT) private ordersServiceClient: ClientProxy){}

    @Post()
    createOrder(@Body() order: any){
        return this.ordersServiceClient.send('create_order', order)
    }
}
