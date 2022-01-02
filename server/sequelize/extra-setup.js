const { Sequelize } = require("sequelize");

function applyExtraSetup(sequelize) {
  const {
    book,
    tag,
    bookType,
    author,
    mineralComposition,
    mineral,
    texture,
    structure,
    section,
    sectionType,
    sectionPhoto,
    chemicalComposition,
    analysis,
    chemicalElement,
    chemicalElement2chemicalComposition,
  } = sequelize.models;
  console.log(sequelize.models);

  book.belongsToMany(tag, { through: "tag2book" });
  tag.belongsToMany(book, { through: "tag2book" });

  book.belongsToMany(author, { through: "author2book" });
  author.belongsToMany(book, { through: "author2book" });

  book.belongsTo(bookType);
  bookType.hasMany(book);

  mineralComposition.belongsToMany(mineral, {
    through: "mineral2mineralComposition",
  });
  mineral.belongsToMany(mineralComposition, {
    through: "mineral2mineralComposition",
  });

  mineralComposition.belongsTo(texture);
  texture.hasMany(mineralComposition);

  mineralComposition.belongsTo(structure);
  structure.hasMany(mineralComposition);

  mineralComposition.hasMany(section);
  section.belongsTo(mineralComposition);

  section.belongsToMany(mineral, { through: "mineral2section" });
  mineral.belongsToMany(section, { through: "mineral2section" });

  section.belongsTo(texture);
  texture.hasMany(section);

  section.belongsTo(structure);
  structure.hasMany(section);

  section.belongsTo(sectionType);
  sectionType.hasMany(section);

  sectionPhoto.belongsTo(section);
  section.hasMany(sectionPhoto);

  section.belongsTo(chemicalComposition);
  chemicalComposition.hasMany(section);

  chemicalComposition.belongsToMany(chemicalElement, {
    through: chemicalElement2chemicalComposition,
  });
  chemicalElement.belongsToMany(chemicalComposition, {
    through: chemicalElement2chemicalComposition,
  });

  section.belongsTo(analysis);
  analysis.hasMany(section);
}

module.exports = { applyExtraSetup };
