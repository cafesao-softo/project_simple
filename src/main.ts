import { NestFactory } from "@nestjs/core"
import { AppModule } from "./modules/app.module"
import { AppDataSource } from "./services/connect"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  try {
    console.log("DB starting...")
    await AppDataSource.initialize()
    console.log("DB initialized")
    await app.listen(process.env.PORT || 3000)
  } catch (error) {
    throw error
  }
}
bootstrap()
