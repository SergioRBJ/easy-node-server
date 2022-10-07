import UserEntity from "../../entity/user.entity";

export default interface UserRepositoryPort {
    findUsers(): Promise<UserEntity[]>
}
