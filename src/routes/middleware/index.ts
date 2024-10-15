import {authToken} from '@/app'
import {NextFunction, Request, Response} from 'express'

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization

  if (!authorization?.includes(authToken)) {
    res.status(401).json({message: 'Not authorized'})
  }

  next()
}
