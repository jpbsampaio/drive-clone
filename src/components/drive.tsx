"use client"

import { useState } from "react"
import { Breadcrumb } from "./breadcrumb"
import { FileList } from "./file-list"
import { mockData, type Folder } from "../lib/mock-data"
import { Button } from "~/components/ui/button"
import { Upload } from "lucide-react"

export function Drive() {
  const [currentFolder, setCurrentFolder] = useState<Folder>(mockData)
  const [path, setPath] = useState<string[]>([])

  const handleFolderClick = (folderId: string) => {
    const newFolder = findFolder(currentFolder, folderId)
    if (newFolder) {
      setCurrentFolder(newFolder)
      setPath([...path, newFolder.name])
    }
  }

  const findFolder = (folder: Folder, id: string): Folder | null => {
    if (folder.id === id) return folder
    for (const child of folder.children) {
      if (child.type === "folder") {
        const found = findFolder(child as Folder, id)
        if (found) return found
      }
    }
    return null
  }

  const handleUpload = () => {
    alert("Upload functionality would be implemented here")
  }

  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <Breadcrumb path={path} />
        <Button onClick={handleUpload}>
          <Upload className="w-4 h-4 mr-2" />
          Upload
        </Button>
      </div>
      <FileList files={currentFolder.children} onFolderClick={handleFolderClick} />
    </div>
  )
}

