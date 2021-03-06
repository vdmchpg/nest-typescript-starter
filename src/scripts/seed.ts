import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import { IScript } from './scripts.module';
import { Cat } from '../app/cat/cat.entity';

@Injectable()
export class Seed implements IScript {

    constructor(
        private connection: Connection,
    ) { }

    async run() {
        await this.connection.synchronize(true);
        const catRepository = this.connection.getRepository(Cat);
        catRepository.insert([{ name: 'Fluffy', updatedDate: new Date(), birthDate: new Date() }]);
        await this.connection.close();
    }
}

export default Seed;
