import * as UserRepository from '../models/User/repository'

export const getUserList = async () => {
  const userList = await UserRepository.getUserList()
  return userList;
}