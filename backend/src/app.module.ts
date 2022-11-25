import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GithubIntegrationModule } from '@app/github-integration';

@Module({
  imports: [
    ConfigModule.forRoot( {
      envFilePath: ['.env']
    }),
    GithubIntegrationModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
