import { Either } from '../../../shared/errors/either';
import UserEntity from '../../entity/user.entity';

export default interface GetUserUsecasePort {
  execute(): Promise<Either<Error, UserEntity[]>>;
}
