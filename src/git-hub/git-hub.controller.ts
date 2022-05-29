import { Body, Controller, Delete, Get, OnModuleInit, Param, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GitHub } from './interface/git-hub-interface';

@Controller('git-hub')
export class GitHubController implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'git-hub',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'git-consumer',
        allowAutoTopicCreation: true,
      },
    },
  })

  private client: ClientKafka;

  async onModuleInit() {
    const requestPatters = ['create-git-hub', 'find-all-git-hub', 'remove-git-hub'];
    requestPatters.forEach(async (pattern) => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  @Post()
  create(@Body() data: any): Observable<GitHub> {
    try {
      return this.client.send('create-git-hub', data)
    } catch (error) {
      throw new Error(`${error}`);
      
    }
  }

  @Get()
  findAll(): Observable<GitHub[]>{
    try {
      return this.client.send('find-all-git-hub', {})
    } catch (error) {
      throw new Error(`${error}`);
      
    }
  }

  @Delete()
  remove(@Param() id: string): Observable<GitHub> {
    return this.client.send('remove-git-hub', id)
  }

}
