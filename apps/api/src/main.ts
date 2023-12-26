import { NestFactory } from '@nestjs/core';
import { ApiAppModule } from './ApiAppModule';
import { setNestApp } from '@app/common-config/setNextWebApp';

async function bootstrap() {
  const app = await NestFactory.create(ApiAppModule);
  setNestApp(app);
  await app.listen(3000);
}
bootstrap();
