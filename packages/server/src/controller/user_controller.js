import { userServiceInstance } from "../service/user.service.js";

export class userController {
  static #instance;
  static getInstance() {
    if (!this.#instance) {
      this.#instance = new userController();
    }
    return this.#instance;
  }
  async createUser(req, res) {
    return await userServiceInstance.createUser(req, res);
  }
  async getAllUsers(req, res) {
    return await userServiceInstance.getAllUsers(req, res);
  }
  async getUserIDs(req, res) {
    return await userServiceInstance.getUserIDs(req, res);
  }
  async updateUsers(req, res) {
    return await userServiceInstance.updateUsers(req, res);
  }
  async deleteUsers(req, res) {
    return await userServiceInstance.deleteUsers(req, res);
  }
  async login(req, res) {
    return await userServiceInstance.login(req, res);
  }
  // async register(req, res) {
  //   return await userService.register(req, res);
  // }
}
export const userControllerInstance = userController.getInstance();
