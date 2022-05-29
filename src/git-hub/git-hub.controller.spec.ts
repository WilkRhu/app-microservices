import { Test, TestingModule } from '@nestjs/testing';
import { GitHubController } from './git-hub.controller';
import { GitHubService } from './git-hub.service';

describe('GitHubController', () => {
  let controller: GitHubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitHubController],
      providers: [GitHubService],
    }).compile();

    controller = module.get<GitHubController>(GitHubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
