import { database } from "../datasource/index.js";

export class noteService {
    static #instance;
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new noteService();
        }
        return this.#instance;
    }
    async getAllNotes(req, res) {
        try {
            const collection = database.collection("notes");
            const notes = await collection.find().toArray();
            return res.send(notes);
        } catch (error) {
            console.error(error);
        }
    }
    async getNoteByName(req, res) {
        try {
            const collection = database.collection("notes");
            const name = req.params.name;
            // const userid = req.params.id;
            const note_info = await collection.findOne({
                //   user_ID: userid,
                name: name,
            });
            if (note_info) return res.send(note_info);
            else return res.status(400).send({ message: "Note not found" });
        } catch (error) {
            console.error(error);
        }
    }
    async getNoteByUser(req, res) {
        try {
            const collection = database.collection("notes");
            const userid = req.params.id;
            const note_info = await collection
                .find({ user_ID: userid })
                .toArray();
            return res.send(note_info);
        } catch (error) {
            console.error(error);
        }
    }
    async createNotes(req, res) {
        try {
            const collection = database.collection("notes");
            if (
                collection.find({ name: req.body.name, user_ID: req.params.id })
            )
                return res.status(400).send({ error: "Note already exists" });
            await collection.insertOne(req.body);
            return res.status(200).send({ message: "Note added successfully" });
        } catch (error) {
            console.error(error);
        }
    }
    async updateNote(req, res) {
        try {
            const name = req.params.name;
            const collection = database.collection("notes");
            if (!collection.findOne(name)) {
                return res.status(400).send({ error: "Note does not exist" });
            }
            await collection.findOneAndUpdate(name, req.body);
            return res
                .status(200)
                .send({ message: "Note updated successfully" });
        } catch (error) {
            console.error(error);
        }
    }
    async deleteNote(req, res) {
        try {
            const name = req.params.name;
            const collection = database.collection("notes");
            if (!collection.findOne(name)) {
                return res.status(400).send({ error: "Note does not exist" });
            }
            await collection.deleteOne({ name: name });
            return res
                .status(200)
                .send({ message: "Note deleted successfully" });
        } catch (error) {
            console.error(error);
        }
    }
    async getAllNotesOfUser(req, res) {
        try {
            const collection = database.collection("notes");
            const userid = req.params.id;
            const note_info = await collection
                .find({ user_ID: userid })
                .toArray();
            return res.send(note_info);
        } catch (error) {
            console.error(error);
        }
    }
    async createNotesOfUser(req, res) {
        try {
            const collection = database.collection("notes");
            if (
                collection.find({ name: req.body.name, user_ID: req.params.id })
            )
                return res.status(400).send({ error: "Note already exists" });
            await collection.insertOne(req.body);
            return res.status(200).send({ message: "Note added successfully" });
        } catch (error) {
            console.error(error);
        }
    }
}

export const noteServiceInstance = noteService.getInstance();
