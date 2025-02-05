import DriveContents from "../../drive-contents";
import { getAllParentsForFolder, getFiles, getFolders } from "~/server/db/queries";

export default async function GoogleDriveClone(props: {
    params: Promise<{ folderId: string }>;
}) {
    const params = await props.params;

    const parsedFolderId = parseInt(params.folderId);
    if (isNaN(parsedFolderId)) {
        return <div>Invalid folder ID</div>;
    }

    const foldersPromise = getFolders(parsedFolderId);

    const filesPromise = getFiles(parsedFolderId);

    const parentsPromise = getAllParentsForFolder(parsedFolderId);

    const [files, folders, parents] = await Promise.all([filesPromise, foldersPromise, parentsPromise]);

    return <DriveContents files={files} folders={folders} parents={parents} />;
}