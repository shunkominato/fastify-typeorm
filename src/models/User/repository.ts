import { getRepository } from 'typeorm'
import { User } from '../../orm/entity/User'


export const getUserList = async () => {
  const user = await getRepository(User).find()
  return user
}