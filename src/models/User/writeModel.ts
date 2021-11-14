import { EntityManager } from "typeorm";
import { BaseWriteModel } from "../baseModel";

export class UserWriteModel extends BaseWriteModel {
  id?: number

  firstName: string;

  lastName: string;

  age: number;

  async create({transactionManager}: {transactionManager: EntityManager}) {
    const isError = await this.validate({ method: 'CREATE'})

    if(isError) throw Error('validate Error')

    

  }


}