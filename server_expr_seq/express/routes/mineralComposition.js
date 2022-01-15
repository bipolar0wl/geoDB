const sequelize = require("../../sequelize");
const { models } = require("../../sequelize");
const { getIdParam } = require("../helpers");

async function getAll(req, res) {
  const mineralComposition = await models.mineralComposition.findAll({
    attributes: [`id`, `name`],
    include: [
      { model: models.texture, attributes: [`id`, `name`], required: false },
      { model: models.structure, attributes: [`id`, `name`], required: false },
      // [sequelize.fn(`COUNT`, sequelize.col(`sections.id`)), `glass`],
      // [sequelize.literal(`(SELECT "hello")`), `glass`],
      // {
      //   model: models.section,
      //   where: { sectionTypeId: 1 },
      //   attributes: {
      //     // include: [[`id`, `glass`]],
      //     // include: [
      //     //   [sequelize.literal(`(SELECT COUNT (id) FROM sections)`), `glass`],
      //     // ],
      //     exclude: [],
      //   },
      //   required: false,
      // },

      {
        model: models.section,
        separate: true,
        alias: `test`,
        where: { sectionTypeId: 1 },
        // attributes: {
        //   include: [sequelize.literal(`(SELECT "hello")`), `glass`],
        // },
        through: {
          paranoid: true,
        },
      },
    ],
    through: {
      paranoid: true,
    },
  });
  console.log(mineralComposition);
  res.status(200).json(mineralComposition);
}

async function getById(req, res) {
  const id = getIdParam(req);
  const mineralComposition = await models.mineralComposition.findByPk(id);
  if (mineralComposition) {
    res.status(200).json(mineralComposition);
  } else {
    res.status(404).send("404 - Not found");
  }
}

async function create(req, res) {
  if (req.body.id) {
    res
      .status(400)
      .send(
        `Bad request: ID should not be provided, since it is determined automatically by the database.`
      );
  } else {
    await models.mineralComposition.create(req.body);
    res.status(201).end();
  }
}

async function update(req, res) {
  const id = getIdParam(req);

  // We only accept an UPDATE request if the `:id` param matches the body `id`
  if (req.body.id === id) {
    await models.mineralComposition.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(200).end();
  } else {
    res
      .status(400)
      .send(
        `Bad request: param ID (${id}) does not match body ID (${req.body.id}).`
      );
  }
}

async function remove(req, res) {
  const id = getIdParam(req);
  await models.mineralComposition.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
