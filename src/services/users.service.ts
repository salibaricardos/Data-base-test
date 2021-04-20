import HttpException from "../exceptions/HttpException";
import { User } from "../interfaces/users.interface";
import db from "mongodb";
import userModel from "../models/users.model";
import { isEmptyObject } from "../utils/util";
import * as moment from "moment";

class UserService {
  public user = userModel;

  public async findAllUser(): Promise<User[]> {
    const user: User[] = await this.user.find();
    return user;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await this.user.findById(userId);
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: User): Promise<User> {
    if (isEmptyObject(userData))
      throw new HttpException(400, "You're not userData");

    const findUser: User = await this.user.findOne({ email: userData.email });
    if (findUser)
      throw new HttpException(
        409,
        `You're email ${userData.email} already exists`
      );
    const date = moment().format("MMMM Do YYYY, h:mm:ss a");
    const createUserData: User = await this.user.create({
      ...userData,
      creatingDate: date,
    });
    return createUserData;
  }

  public async updateUser(userId: string, userData: User): Promise<User> {
    if (isEmptyObject(userData))
      throw new HttpException(400, "You're not userData");
    const date = moment().format("MMMM Do YYYY, h:mm:ss a");
    const updateUserById: User = await this.user.findByIdAndUpdate(userId, {
      ...userData,
      updatingDate: date,
    });
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }

  public async deleteUserData(userId: string): Promise<User> {
    const deleteUserById: User = await this.user.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }
}

export default UserService;
