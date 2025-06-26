import { ReminderModel } from "../models/reminderModel.js";

export const ReminderService = {
    async getAllReminders() {
        // fetch all reminder;
        return ReminderModel.getAll;
    },
    async getReminderById(reminderId) {
        // fetch reminder by id
        const reminder = await ReminderModel.findById(reminderId);
        if(!reminder) {
            throw new Error('reminder not found')
        }
        return reminder;
    },
    async createReminder(newReminder) {
        // create reminder

        const { reminder, notes , userId } = newReminder;

        const sanitizedReminder = {
            reminder: reminder?.trim(),
            notes: notes?.trim(),
            userId,
            
        }

        const createdReminder = ReminderModel.create(sanitizedReminder);
        return createdReminder;
    },

    async updateReminder(reminderId, newValues) {
        // update reminder
        return {};

        

    },

    async deleteReminder(reminderId) {
        return {message: 'Reminder deleted successfully'}
    }
}