const express = require("express");
const { handleDailies } = require("./src/services");
const db = require("./src/config/dbConnection");
const scheduledTasksHandler = require("./src/controllers/scheduledTasksHandler");
// const DatabaseManager = require("./src/managers/databaseManager");

const app = express();

// Initialize database connection
(async () => {
  await db.init();
  scheduledTasksHandler(); // Rescheduled existing tasks on application restart
})();

app.use("/tasks", require("./routes/tasks"));
app.use("/recur", require("./routes/recur"));
app.use("/reschedule", require("./routes/reschedule"));

const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not defined in environment variables

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

handleDailies();
