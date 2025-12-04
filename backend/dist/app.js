import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import compression from "compression";
import rateLimit from "express-rate-limit";
import cors from "cors";
config();
const app = express();
app.use(compression());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    message: "Too many requests, please try again later.",
}));
app.use(express.json({ limit: "1mb" }));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use((req, res, next) => {
    res.header("Access-Control-Expose-Headers", "Set-Cookie");
    next();
});
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map