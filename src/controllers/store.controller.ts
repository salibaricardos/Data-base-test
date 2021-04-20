import { NextFunction, Request, Response } from "express";
import { Store } from "../interfaces/store.interface";
import storeService from "../services/store.service";

class StoreController {
  public storeService = new storeService();

  public getstore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllStoreData: Store[] = await this.storeService.findStore();
      res.status(200).json({ data: findAllStoreData, message: "Store info" });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userId: string = req.params.id;

    try {
      const findOneUserData: Store = await this.storeService.findUserById(
        userId
      );
      res.status(200).json({ data: findOneUserData, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userData: Store = req.body;

    try {
      const createUserData: Store = await this.storeService.createUser(
        userData
      );
      res.status(201).json({ data: createUserData, message: "created" });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userId: string = req.params.id;
    const userData: Store = req.body;

    try {
      const updateUserData: Store = await this.storeService.updateUser(
        userId,
        userData
      );
      res.status(200).json({ data: updateUserData, message: "updated" });
    } catch (error) {
      next(error);
    }
  };
}

export default StoreController;
