import { noteServiceInstance } from "../service/note.service.js";

export class NoteController {
    static #instance;
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new NoteController();
        }
        return this.#instance;
    }
    async getAllNotes(req, res) {
        return await noteServiceInstance.getAllNotes(req, res);
    }
    async getNoteByName(req, res) {
        return await noteServiceInstance.getNoteByName(req, res);
    }
    async getNoteByUser(req, res) {
        return await noteServiceInstance.getNoteByUser(req, res);
    }
    async createNotes(req, res) {
        return await noteServiceInstance.createNotes(req, res);
    }
    async updateNote(req, res) {
        return await noteServiceInstance.updateNote(req, res);
    }
    async deleteNote(req, res) {
        return await noteServiceInstance.deleteNote(req, res);
    }
    async getAllNotesOfUser(req, res) {
        return await noteServiceInstance.getAllNotesOfUser(req, res);
    }
    async createNotesOfUser(req, res) {
        return await noteServiceInstance.createNotesOfUser(req, res);
    }
}
export const noteControllerInstance = NoteController.getInstance();
