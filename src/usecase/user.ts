import { createUserAdapter } from '../models/User/adapter';
import * as UserRepository from '../models/User/repository';

export const getUserList = async () => {
  const userList = await UserRepository.getUserList();
  return userList;
};

export interface ICreateUser {
  firstName: string;
  lastName: string;
  age: number;
}

export const createUser = async ({ params }: { params: ICreateUser }) => {
  const userWriteModel = createUserAdapter({ params });
  const createdUserEntity = await userWriteModel.create();
  return createdUserEntity;
};
