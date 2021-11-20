import { EntityManager } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { BaseWriteModel } from '../baseModel';
import { createUser } from './repository';
import { ICreateUser } from '../../usecase/user';

export class UserWriteModel extends BaseWriteModel {
  id?: number;

  firstName: string;

  lastName: string;

  age: number;

  async create() {
    const isError = await this.validate({ method: 'CREATE' });

    if (isError) throw Error('validate Error');

    const params = classToPlain(this) as ICreateUser;

    const createdUserEntity = await createUser({ params });

    return createdUserEntity;
  }
}
