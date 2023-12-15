const DatabaseManager = require("../managers/databaseManager");
require("dotenv").config();

/**
 * Reschedules tasks from the database on application startup.
 * This function takes no parameters and is designed to handle tasks
 * based on their status start_date
 */
async function scheduledTasksHandler() {
  const dbManager = new DatabaseManager();
  const allScheduledTasks = await dbManager.getAllScheduledTasks();
  // TODO: reschedule tasks
}

module.exports = scheduledTasksHandler;
