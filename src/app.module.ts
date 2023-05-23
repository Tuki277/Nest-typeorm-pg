import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './typeorm.config';
import { CheckHealthModule } from './modules/check-health/check-health.module';
import { SizeModule } from './modules/size/size.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { ColorModule } from './modules/color/color.module';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    CheckHealthModule,
    SizeModule,
    CategoryModule,
    ProductModule,
    ColorModule,
    CacheModule.registerAsync<RedisClientOptions>({
      useFactory: async () => ({
        store: redisStore,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        username: process.env.REDIS_USERNAME,
        password: process.env.REDIS_PASSWORD,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [CacheModule],
})
export class AppModule {}
