import * as UserRepository from '../models/User/repository'

export const getUserList = async () => {
  const userList = await UserRepository.getUserList()
  return userList;
}

interface ICreateUser {
  firstName: string,
  lastName: string,
  age: number,
}
export const createUser = async({params}: {params: ICreateUser}) => {
  

}