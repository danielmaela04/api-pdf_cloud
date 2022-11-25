import { Express } from "express";
import { AdminRoutes } from "./admin";

export default function AppRoutes(App: Express) {
  app.use("/admin", AdminRoutes);
}
