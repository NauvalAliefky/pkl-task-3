import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/dtos/config/prisma.services';
import {
  CreateProductDto,
  UpdateProductDto,
} from '../../common/dtos/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  async update(id: string, data: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
