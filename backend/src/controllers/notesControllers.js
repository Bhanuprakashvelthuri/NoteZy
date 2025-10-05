import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt: -1});
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNotesById(req,res){
  try{
    const getNote=await Note.findById(req.params.id);
    if(!getNote) return res.status(404).json({message:"Note is Not Found By Id"});
    res.status(200).json(getNote);
  }catch(error){
     console.error("Error in getNote By Id",error);
     res.status(500).json({message:"Internal Server Error"});
  }
  
}


export async function createdNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();

    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in CreatedNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updatedNote(req, res) {
  try {
    const { title, content } = req.body;
   const updatedNote= await Note.findByIdAndUpdate(req.params.id, { title, content },{
     new:true
   });
   if(!updatedNote) return res.status(404).json({message:"Note is Not Found"});
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deletedNote(req, res) {
  try{
       const {title,content}=req.body;
       const deletedNote=await Note.findByIdAndDelete(req.params.id,{title,content},{
        new:true
       });
       if(!deletedNote) return res.status(404).json({message:"Note is Not Found"});
       res.status(200).json({message:"Note is successfully Deleted"});
  }catch(error){
     console.error("Error in deleteingNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
