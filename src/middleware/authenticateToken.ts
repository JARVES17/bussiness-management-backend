import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Define an extended Request type to include user property
declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload;
  }
}

// let tokenBlacklist: string[] = [];

const invalidateToken = (req: Request, res: Response) => {
  const token: string | undefined = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  // Add the token to the blacklist
  //   tokenBlacklist.push(token);
  //   return res.status(200).json({ success: true, message: "Logout successful" });
};

const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const authHeader: string | undefined = req.headers["authorization"];
  const token: string | undefined = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: "Unauthorized: Token missing" });
  }

  //   if (tokenBlacklist.includes(token)) {
  //     return res.status(403).json({
  //       success: false,
  //       error: "Unauthorized: Token has been invalidated",
  //     });
  //   }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, error: "Unauthorized: Invalid token" });
    }
    req.user = user;
    next();
  });
};

export { authenticateToken, invalidateToken };
