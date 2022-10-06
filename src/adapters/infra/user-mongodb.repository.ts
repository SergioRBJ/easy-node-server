import UserEntity from "../../domain/entity/user.entity";
import UserRepository from "src/domain/port/user.repository";

export default class UserRepositoryMongoDbRepository implements UserRepository {
    async getUsers(): Promise<UserEntity[]> {
        throw new Error('Method is not implemented!');
    }
}
