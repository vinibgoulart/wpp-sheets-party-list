import { config } from "../../config";
import { getDriveService } from "../DriveService";

export const createPermission = async (fileId: string) => {
  const { driveService } = await getDriveService();

  try {
    const drive = await driveService.permissions.create({
      fileId,
      requestBody: {
        emailAddress: config.GOOGLE_USER_EMAIL,
        type: "user",
        role: "writer",
      },
    });

    return {
      data: drive.data,
    };
  } catch (err) {
    throw err;
  }
};
