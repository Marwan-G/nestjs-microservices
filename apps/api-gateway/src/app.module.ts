import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NestMicroservice_CLIENT } from './constant';
import { OrderController } from './order/order.controller';
import { UsersController } from './users/users.controller';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ClientsModule.register([
    {
      name: NestMicroservice_CLIENT.ORDER_SERVICE,
      transport: Transport.TCP,
      options:{
        port: 4001
      }

    },
    {
      name: NestMicroservice_CLIENT.PRODUCTS_SERVICE,
      transport: Transport.TCP,
      options:{
        port: 4002
      }

    },
    {
      name: NestMicroservice_CLIENT.USER_SERVICE,
      transport: Transport.TCP,
      options:{
        port: 4003
      }

    }

  ])],
  controllers: [AppController, OrderController, UsersController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
