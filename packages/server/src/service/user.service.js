import { database } from "../datasource/index.js";

export class userService {
    static #instance;
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new userService();
        }
        return this.#instance;
    }
    async createUser(req, res) {
        try {
            const user = {
                user_ID: req.body.user_ID,
                user_Name: req.body.user_Name,
                user_password: req.body.user_password,
                name: req.body.name,
            };

            const collection = database.collection("users");
            if (collection.find({ user_ID: user.user_ID }))
                return res.status(400).send({ error: "User already exists" });
            await collection.insertOne(user);

            return res.status(200).send({ message: "User added successfully" });
        } catch (error) {
            console.error(error);
        }
    }
    async getAllUsers(req, res) {
        try {
            const collection = database.collection("users");
            const users = await collection.find().toArray();
            res.send(users);
        } catch (error) {
            console.error(error);
        }
    }
    async getUserIDs(req, res) {
        try {
            const collection = database.collection("users");
            const id = req.params.id;
            const user_info = await collection.findOne({
                user_ID: id,
            });
            if (user_info) return res.status.send(user_info);
            else return res.status(400).send({ message: "User not found" });
        } catch (error) {
            console.error(error);
        }
    }
    async updateUsers(req, res) {
        try {
            const user = {
                user_ID: req.body.user_ID,
                user_Name: req.body.user_Name,
                user_password: req.body.pass_Word,
                user_password: req.body.name,
            };
            const collection = database.collection("users");
            await collection.updateOne(
                { user_ID: user.user_ID },
                {
                    $set: {
                        user_Name: user.user_Name,
                        user_password: user.user_password,
                        name: user.name,
                    },
                }
            );

            return res
                .status(200)
                .send({ message: "User updated successfully" });
        } catch (error) {
            console.error(error);
        }
    }
    async deleteUsers(req, res) {
        try {
            const id = req.params.id;
            const collection = database.collection("users");
            if (!collection.findOne(id)) {
                return res.status(400).send({ error: "User does not exist" });
            }
            await collection.deleteOne({ user_ID: id });
            //return res.status.send({ message: "User deleted successfully" });
            return res
                .status(200)
                .send({ message: "User deleted successfully" });
        } catch (error) {
            console.error(error);
        }
    }
    async login(req, res) {
        try {
            const user_name = req.body.user_name;
            const pass_Word = req.body.pass_Word;
            const collection = database.collection("users");
            const user_info = await collection.findOne({
                user_Name: user_name,
                user_password: pass_Word,
            });
            if (user_info) return res.status.send(user_info);
            else return res.status(400).send({ message: "User not found" });
        } catch (error) {
            console.error(error);
        }
    }
    //   async register(req, res) {
    //     try {
    //       const collection = database.collection("users");
    //       if (collection.find({ user_ID: user_ID }))
    //         return
    // return res.status(400).send({ error: "User already exists" });
    //       await collection.insertOne({ user_ID, user_Name, pass_Word, name });
    //
    // return res.status(200).send({ message: "User added successfully" });
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
}
export const userServiceInstance = userService.getInstance();
