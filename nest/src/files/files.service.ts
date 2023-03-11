import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

	async createOneFile(file, slug): Promise<string> {
		try {
			const fileName = uuid.v4() + '.jpg';
			const filePath = path.resolve(__dirname, '..', 'static', slug)
			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath, { recursive: true })
			}
			fs.writeFileSync(path.join(filePath, fileName), file.buffer)
			return fileName;
		} catch (e) {
			throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}
	async createManyFiles(files, slug): Promise<string[]> {
		try {
			const filesArr = files.map(file => {
				console.log(file);
				const fileName = uuid.v4() + '.jpg';
				const filePath = path.resolve(__dirname, '..', 'static', slug)
				if (!fs.existsSync(filePath)) {
					fs.mkdirSync(filePath, { recursive: true })
				}
				fs.writeFileSync(path.join(filePath, fileName), file.buffer)
				return fileName;
			});
			return filesArr
		} catch (e) {
			throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}

}