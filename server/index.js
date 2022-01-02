require("dotenv").config();

const app = require("./express/app");
const sequelize = require("./sequelize");

const PORT = process.env.PORT || 5000;

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: false, alter: true }); // Проверка таблиц
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  console.log(`Starting Sequelize + Express example on port ${PORT}...`);

  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
  });
}

init();
