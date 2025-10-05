import React from "react";
import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formateDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note ,setNotes}) => {

     const handleDelete =async (e,id)=>{
        e.preventDefault();
        if(!window.confirm("Are you sure you want to delete?")) return;
        try {
          await api.delete(`/notes/${id}`);
          setNotes((prev)=> prev.filter((note)=> note._id !==id));
          toast.success("Note Was Deteled");
        } catch (error) {
          console.log("Error in handleDelete..",error);
          toast.error("Failed To Delete Note");
        }
     }



  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#aa0b98]"
    >
      <div className="card-body">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-sky-200 to-cyan-300 text-transparent bg-clip-text">
          {note.title}
        </h3>

        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">{formateDate(new Date(note.createdAt))}</span>

          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e,note._id)}>
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
