import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';

@Injectable()
export class MariaDBConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mariadb',
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.name'),
      entities: [User],
      synchronize: true,
    };
  }
}
