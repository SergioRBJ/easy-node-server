import express from "express";
import UserRepositoryMongoDbRepository from "./adapter/infra/user-mongodb.repository";
import UserController from "./adapter/rest/controller/user.controller";

const routes = express();

const userRepository = new UserRepositoryMongoDbRepository();
const userController = new UserController(userRepository);
routes.use('/users', userController.buildRouter());

export default routes;
