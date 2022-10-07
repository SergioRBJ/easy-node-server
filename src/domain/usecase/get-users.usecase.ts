import { Either, Left, Right } from '../../shared/errors/either';
import UserEntity from '../entity/user.entity';
import GetUserUsecasePort from '../port/inbound/get-user-usecase.port';
import UserRepositoryPort from '../port/outbound/user-repository.port';

export default class GetUserUsecase implements GetUserUsecasePort {
  constructor(readonly userRepository: UserRepositoryPort) {}

  async execute(): Promise<Either<Error, UserEntity[]>> {
    try {
      const users = await this.userRepository.findUsers();
      return Right(users);
    } catch (err) {
      return Left(err as Error);
    }
  }
}
