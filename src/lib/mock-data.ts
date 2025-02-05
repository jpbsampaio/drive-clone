export interface File {
  id: string
  name: string
  type: "file" | "folder"
  url?: string
  iconColor: string
}

export interface Folder extends File {
  children: File[]
}

export const mockData: Folder = {
  id: "root",
  name: "My Drive",
  type: "folder",
  iconColor: "text-blue-400",
  children: [
    {
      id: "1",
      name: "Documents",
      type: "folder",
      iconColor: "text-yellow-400",
      children: [
        {
          id: "1-1", 
          name: "Resume.pdf",
          type: "file",
          url: "/files/resume.pdf",
          iconColor: "text-red-400",
        },
        {
          id: "1-2",
          name: "Cover Letter.docx", 
          type: "file",
          url: "/files/cover-letter.docx",
          iconColor: "text-blue-400",
        },
      ],
    } as Folder,
    {
      id: "2",
      name: "Images", 
      type: "folder",
      iconColor: "text-green-400",
      children: [
        {
          id: "2-1",
          name: "Vacation.jpg",
          type: "file", 
          url: "/files/vacation.jpg",
          iconColor: "text-pink-400",
        },
        {
          id: "2-2",
          name: "Family.png",
          type: "file",
          url: "/files/family.png",
          iconColor: "text-purple-400",
        },
      ],
    } as Folder,
    {
      id: "3",
      name: "Project Proposal.pptx",
      type: "file",
      url: "/files/project-proposal.pptx", 
      iconColor: "text-orange-400",
    },
    {
      id: "4",
      name: "Budget.xlsx",
      type: "file",
      url: "/files/budget.xlsx",
      iconColor: "text-green-400",
    },
  ],
}

