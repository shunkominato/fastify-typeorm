import { getRepository } from 'typeorm';
import { User } from '../../orm/entity/User';
import { ICreateUser } from '../../usecase/user';

export const getUserList = async () => {
  const user = await getRepository(User).find();
  return user;
};

export const createUser = async ({ params }: { params: ICreateUser }) => {
  const user = await getRepository(User).save(params);
  return user;
};
