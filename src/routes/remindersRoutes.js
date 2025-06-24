import { Router } from "express";
import { ReminderController } from "../controllers/reminderControllers.js";
const router = Router();

router.get("/", ReminderController.getAllReminder);

router.get("/:id", ReminderController.getReminderById);

router.post("/", ReminderController.createReminder);

router.patch("/:id", ReminderController.updateReminder);

router.delete("/:id", ReminderController.deleteReminder);

export default router;
