import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
config();
const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(compression());
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map