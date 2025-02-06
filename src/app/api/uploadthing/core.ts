import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";
import { MUTATIONS, QUERIES } from "~/server/db/queries";

const f = createUploadthing();

export const ourFileRouter = {

  driveUploader: f({
    blob: {
      maxFileSize: "1GB",
      maxFileCount: 10,
    },
  })
    .input(
      z.object({
        folderId: z.number(),
      }),
    )
    .middleware(async ({ input }) => {
      const user = await auth();

      if (!user.userId) throw new UploadThingError("Unauthorized");

      const folder = await QUERIES.getFolderById(input.folderId);

      if (!folder) throw new UploadThingError("Folder not found");

      if (folder.ownerId !== user.userId)
        throw new UploadThingError("Unauthorized");
      return { userId: user.userId, parentId: input.folderId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);


      await MUTATIONS.createFile({
        file: {
          name: file.name,
          size: file.size,
          url: file.url,
          parent: metadata.parentId,
        },
        userId: metadata.userId,
      });

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;