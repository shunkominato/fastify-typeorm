import { plainToClass } from 'class-transformer';
import { UserWriteModel } from './writeModel';

interface ICreateUser {
  firstName: string;
  lastName: string;
  age: number;
}

export const createUserAdapter = ({ params }: { params: ICreateUser }) => plainToClass(UserWriteModel, {
  firstName: params.firstName,
  lastName: params.lastName,
  age: params.age,
});
