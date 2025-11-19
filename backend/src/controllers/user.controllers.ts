import User from "../models/user.model.js";
import { Request, Response } from "express";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token.js";
import { COOKIE_NAME } from "../utils/constants.js";

const isProd = process.env.NODE_ENV === "production";

export function setCookie(
  res: Response,
  name: string,
  token: string,
  days = 7
) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  if (isProd) {
    console.log("Production Ready!");
  }

  res.cookie(name, token, {
    path: "/",
    httpOnly: true,
    secure: isProd,
    signed: true,
    sameSite: isProd ? "none" : "lax",
    expires,
  });
}

export function clearCookie(res: Response, name: string) {
  res.clearCookie(name, {
    path: "/",
    httpOnly: true,
    secure: isProd,
    signed: true,
    sameSite: isProd ? "none" : "lax",
  });
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};

export const userSignUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).send("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = createToken({
      id: newUser._id.toString(),
      email: newUser.email,
    });

    res.clearCookie(COOKIE_NAME);
    setCookie(res, COOKIE_NAME, token, 7);

    return res
      .status(201)
      .json({ message: "OK", name: newUser.name, email: newUser.email });
  } catch (error) {
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};

export const userSignIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("User not found");
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect password");
    }

    const token = createToken({ id: user._id.toString(), email: user.email });

    res.clearCookie(COOKIE_NAME);
    setCookie(res, COOKIE_NAME, token, 7);

    return res
      .status(201)
      .json({ message: "OK", name: user.name, email: user.email });
  } catch (error) {
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};

export async function verifyUser(req: Request, res: Response) {
  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res.status(401).send("User not found");
    }

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission denied");
    }

    return res
      .status(201)
      .json({ message: "OK", name: user.name, email: user.email });
  } catch (error) {
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
}

export async function userLogout(req: Request, res: Response) {
  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res.status(401).send("User not found");
    }

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission denied");
    }

    clearCookie(res, COOKIE_NAME);

    return res.status(201).json({ message: "OK" });
  } catch (error) {
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
}
