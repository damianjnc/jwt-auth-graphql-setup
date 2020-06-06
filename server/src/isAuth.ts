import { MiddlewareFn } from 'type-graphql'
import { MyContext } from './MyContext'

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  context.req

  return next()
}
