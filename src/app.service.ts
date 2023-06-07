import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apiKey: string, @Inject('TASKS') private tasks: string ) {}
  getHello(): string {
    return this.tasks;
  }
}
