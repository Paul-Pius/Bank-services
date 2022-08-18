import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = req.cookies.Token;

    if (token) {
      try {
        if (process.env.JWT_SECRET) {
          await jwt.verify(token, process.env.JWT_SECRET);
          next();
        }
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized");
      }
    } else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1];

        await jwt.verify(token, process.env.JWT_SECRET);
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

module.exports = { protect };
