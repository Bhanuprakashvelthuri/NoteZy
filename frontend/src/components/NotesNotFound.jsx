import { NotebookIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="rounded-full p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <NotebookIcon className="size-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        No Notes Yet
      </h3>
      <p className="text-base-content/70">
        Ready To Organize Your Thoughts? Create Your First Note to Get Started On Your Journey..!
      </p>
      <Link
        to="/create"
        className="btn border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
      >
        Create Your First Note.
      </Link>
    </div>
  )
}

export default NotesNotFound
