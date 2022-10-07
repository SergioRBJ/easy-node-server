import mongoose, { Model, Schema } from "mongoose";
import UserEntity from "../../domain/entity/user.entity";
import UserRepository from "../../domain/port/outbound/user-repository.port";

export type UserAttributes = {
    username: string;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
};

export type UserDocument = UserAttributes;

const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
    },
    { timestamps: true },
);

const userMongooseModel = mongoose.model<UserDocument, Model<UserDocument>>('User', UserSchema);

export default class UserRepositoryMongoDbRepository implements UserRepository {
    async findUsers(): Promise<UserEntity[]> {

        const data = await userMongooseModel.find();

        if (!data) {
            throw new Error('Users not found.');
        }

        const users = data.map((user) => ({ id: user._id, username: user.username }));

        return users;
    }
}
