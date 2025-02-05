import Link from "next/link"
import { File, Folder } from "lucide-react"
import type { File as FileType } from "../lib/mock-data"

interface FileListProps {
  files: FileType[]
  onFolderClick: (folderId: string) => void
}

export function FileList({ files, onFolderClick }: FileListProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-700 text-gray-300 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Type</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
              <td className="py-2 px-4">
                {file.type === "folder" ? (
                  <button onClick={() => onFolderClick(file.id)} className="flex items-center w-full text-left">
                    <Folder className={`w-5 h-5 mr-3 ${file.iconColor}`} />
                    <span className="text-gray-300">{file.name}</span>
                  </button>
                ) : (
                  <Link href={file.url ?? "#"} className="flex items-center">
                    <File className={`w-5 h-5 mr-3 ${file.iconColor}`} />
                    <span className="text-gray-300">{file.name}</span>
                  </Link>
                )}
              </td>
              <td className="py-2 px-4 text-gray-400">{file.type.charAt(0).toUpperCase() + file.type.slice(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

