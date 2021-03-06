import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle(`API бд по образцам`)
    .setDescription(`Документация REST API`)
    .setVersion(`1.0.0`)
    .addTag(`. * ･ ｡ﾟ☆━੧༼ •́ ヮ •̀ ༽୨`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/api/docs`, app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
