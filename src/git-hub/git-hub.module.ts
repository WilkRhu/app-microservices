import { Module } from '@nestjs/common';
import { GitHubController } from './git-hub.controller';

@Module({
  controllers: [GitHubController],
  providers: []
})
export class GitHubModule {}
