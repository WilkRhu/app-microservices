import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitHubModule } from './git-hub/git-hub.module';

@Module({
  imports: [GitHubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
