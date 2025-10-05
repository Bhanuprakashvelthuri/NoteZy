import express from "express";
import { createdNote, deletedNote, getAllNotes, getNotesById, updatedNote } from "../controllers/notesControllers.js";
 
const router=express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNotesById);
router.post("/",createdNote);
router.put("/:id",updatedNote);
router.delete("/:id",deletedNote);

export default router;