import { Router } from "express";
import storeController from "../controllers/store.controller";
import Route from "../interfaces/routes.interface";
import validationMiddleware from "../middlewares/validation.middleware";

class StoreRoute implements Route {
  public path = "/store";
  public router = Router();
  public storeController = new storeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.storeController.getstore);
    this.router.get(`${this.path}/:id`, this.storeController.getUserById);
    this.router.post(`${this.path}`, this.storeController.createUser);
    this.router.put(`${this.path}/:id`, this.storeController.updateUser);
  }
}

export default StoreRoute;
