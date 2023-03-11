import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function start() {
	const PORT = process.env.PORT || 5000
	const app = await NestFactory.create(AppModule, { cors: true })

	const config = new DocumentBuilder()
		.setTitle('Yanki shop')
		.setDescription('Документация REST API')
		.setVersion('1.0.0')

		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/docs', app, document)

	await app.listen(PORT, () => console.log('Сервер запустился на порту ' + PORT))
}
start()