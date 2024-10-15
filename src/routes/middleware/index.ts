import {authToken} from '@/app'
import {NextFunction, Request, Response} from 'express'

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  const token = authorization?.replace('Bearer ', '')

  if (token !== authToken) {
    res.status(401).json({message: 'Not authorized'})
    return
  }

  next()
}
