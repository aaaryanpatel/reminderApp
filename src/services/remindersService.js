export const ReminderService = {
    async getAllReminders() {
        // fetch all reminder;
        return [];
    },
    async getReminderById() {
        // fetch reminder by id
        return {}; 
    },
    async createReminder(newReminder) {
        // create reminder
        return {};
    },

    async updateReminder(reminderId, newValues) {
        // update reminder
        return {};

    },

    async deleteReminder(reminderId) {
        return {message: 'Reminder deleted successfully'}
    }
}