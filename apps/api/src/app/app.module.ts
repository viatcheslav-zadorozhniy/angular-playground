import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule } from '@nestjs/ng-universal';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/apps/i18n')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
