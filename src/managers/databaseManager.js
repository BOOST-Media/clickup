const db = require("../config/dbConnection");

// Everything in this file is still in progress, may refactor entirley

class DatabaseManager {
  constructor() {
    // Singleton pattern
    if (DatabaseManager.instance) {
      return DatabaseManager.instance;
    }
    DatabaseManager.instance = this;
    this.init();
  }

  init() {
    this.db = db.getDB(); // Store a reference to the MongoDB connection in this instance
    this.scheduledTasksCollection = this.db.collection("scheduledTasks"); // Store a reference to the scheduledTasks collection for use
  }

  async createScheduledTask(task) {
    try {
      await this.scheduledTasksCollection.insertOne(task);
      console.log("Scheduled task created successfully.");
    } catch (err) {
      console.error("Error creating scheduled task:", err);
    }
  }

  async getAllScheduledTasks() {
    try {
      const allScheduledTasks = await this.scheduledTasksCollection
        .find({})
        .toArray();
      return allScheduledTasks;
    } catch (err) {
      console.error("Error creating scheduled task:", err);
    }
  }
}

module.exports = DatabaseManager;
