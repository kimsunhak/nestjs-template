import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { setNestApp } from '@app/common-config/setNextWebApp';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setNestApp(app);
  await app.listen(3000);
}
bootstrap();
