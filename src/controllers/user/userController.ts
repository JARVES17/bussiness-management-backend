import { Request, Response } from "express";
import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import { handleError } from "../../utils/errorHandler.ts";

const getUserProfile = (req: Request, res: Response): void => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      res.status(400).json({ error: "Unauthorized: Token missing" });
      return;
    }

    const decoded: string | JwtPayload = jsonwebtoken.verify(
      token,
      process.env.JWT_SECRET as string
    );

    res.status(200).json({ decoded });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const getUpdateUserProfile = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleError(res, error);
  }
};

export { getUserProfile };
