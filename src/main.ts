import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ValidationPipe } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const appOptions = { cors: true }
  const app = await NestFactory.create(AppModule, appOptions)

  app.setGlobalPrefix("/v1/api")
  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle("Project Simple")
    .setDescription("Project Simple")
    .setVersion("1.0")
    .addServer("/v1/api")
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("/doc", app, document)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
