import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User2Module } from './user2/user2.module';

@Module({
  imports: [UserModule, User2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
