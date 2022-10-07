import { Request, Response, Router } from 'express';
import { isLeft } from '../../../shared/errors/either';
import UserRepositoryPort from '../../../domain/port/outbound/user-repository.port';
import GetUsersService from '../service/get-users.service';

export default class UserController {
  constructor(readonly userRepository: UserRepositoryPort) {}

  buildRouter(): Router {
    const router = Router();
    router.get('/users', this.getUsersHandler.bind(this));
    return router;
  }

  getUsersHandler(req: Request, res: Response): Promise<void> {
    const getUserService = new GetUsersService(this.userRepository);

    const result = getUserService.execute();

    return result.then(response => {
      if (isLeft(response)) {
        res
          .status(400)
          .json({ name: response.value.name, message: response.value.message });
      } else {
        res.status(200).json(response.value);
      }
    });
  }
}
