const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");
require("dotenv").config();

const sequelize = new Sequelize(
  `geolog`, // database
  `postgres`, // username
  process.env.DB_PASS, // password
  {
    dialect: "postgres", // DBMS
    host: process.env.DB_HOST, // host
    port: process.env.DB_PORT, // port
    dialectOptions: {},
  }
);

const modelDefiners = [
  require("./models/book.model"),
  require("./models/bookType.model"),
  require("./models/tag.model"),
  require("./models/author.model"),
  require("./models/mineralComposition.model"),
  require("./models/mineral.model"),
  require("./models/texture.model"),
  require("./models/structure.model"),
  require("./models/section.model"),
  require("./models/sectionType.model"),
  require("./models/sectionPhoto.model"),
  require("./models/chemicalComposition.model"),
  require("./models/analysis.model"),
  require("./models/chemicalElement.model"),
  require("./models/chemicalElement2chemicalComposition.model"),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;
