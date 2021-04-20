import HttpException from "../exceptions/HttpException";
import { Store } from "../interfaces/store.interface";
import db from "mongodb";
import storeModel from "../models/store.model";
import { isEmptyObject } from "../utils/util";
import * as moment from "moment";

class UserService {
  public store = storeModel;

  public async findStore(): Promise<Store[]> {
    const store: Store[] = await this.store.find();
    return store;
  }

  public async findUserById(userId: string): Promise<Store> {
    const findUser: Store = await this.store.findById(userId);
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: Store): Promise<Store> {
    if (isEmptyObject(userData))
      throw new HttpException(400, "You're not userData");

    const findUser: Store = await this.store.findOne({ email: userData.email });
    if (findUser)
      throw new HttpException(
        409,
        `You're email ${userData.email} already exists`
      );
    const date = moment().format("MMMM Do YYYY, h:mm:ss a");
    const createUserData: Store = await this.store.create({
      ...userData,
      creatingDate: date,
    });
    return createUserData;
  }

  public async updateUser(userId: string, userData: Store): Promise<Store> {
    if (isEmptyObject(userData))
      throw new HttpException(400, "You're not userData");
    const date = moment().format("MMMM Do YYYY, h:mm:ss a");
    const updateUserById: Store = await this.store.findByIdAndUpdate(userId, {
      ...userData,
      updatingDate: date,
    });
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }
}

export default UserService;
