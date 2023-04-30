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

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    CheckHealthModule,
    SizeModule,
    CategoryModule,
    ProductModule,
    ColorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
