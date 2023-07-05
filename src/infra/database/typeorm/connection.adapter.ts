import { DataSource } from 'typeorm';
import { DatabaseConnection } from 'src/infra/database/connection';

export class TypeOrmConnectionAdapter
	implements DatabaseConnection<DataSource>
{
	private dataSource: DataSource;

	isInitialized(): boolean {
		return this.dataSource?.isInitialized;
	}

	async connect(): Promise<void> {
		try {
			const connection = new DataSource({
				type: 'mysql',
				logging: true,
				dropSchema: false,
				migrationsRun: false,
				entities: [`${__dirname}/../../repositories/typeorm/mapper/*.{js,ts}`],
				ssl: { rejectUnauthorized: false },
				host: process.env.Node_ENV === "dev" ? "localhost" : "db",
				port: Number(process.env.MYSQL_PORT),
				username: process.env.MYSQL_USER,
				password: process.env.MYSQL_PASSWORD,
				database: process.env.MYSQL_DATABASE,
				bigNumberStrings: false,
				supportBigNumbers: true,
			});
			this.dataSource = await connection.initialize();
		} catch (error) {
			console.error(error);
			throw new Error("erro connection database");
		}
	}

	getConnection(): DataSource {
		return this.dataSource;
	}
}
