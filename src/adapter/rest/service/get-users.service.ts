import UserEntity from 'src/domain/entity/user.entity';
import { Either, Left } from '../../../shared/errors/either';
import UserRepositoryPort from '../../../domain/port/outbound/user-repository.port';
import GetUserUseCase from '../../../domain/usecase/get-users.usecase';

export default class GetUsersService {
  constructor(readonly userRepository: UserRepositoryPort) {}

  async execute(): Promise<Either<Error, UserEntity[]>> {
    const getUserUseCase = new GetUserUseCase(this.userRepository);
    try {
      return getUserUseCase.execute();
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      return Left(new Error(message));
    }
  }
}
