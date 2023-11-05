<<<<<<< HEAD
const contacts = require("../../models/contacts");
const { addSchema } = require("../../schemas/contacts");
const { createError } = require("../../helpers");

const addContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw createError(404, error.message);
    }
    console.log(error);
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = addContact;
=======
const { basedir } = global;
const { Contact, schemas } = require(`${basedir}/models/contact`);
const { createError } = require(`${basedir}/helpers`);

const addContact = async (req, res) => {
    // Preventing lack of necessary data
    const { error } = schemas.add.validate(req.body);
    if (error) {
        throw createError(400, "missing required name field");
    }

    const { id: owner } = req.user;
    const result = await Contact.create({...req.body, owner});
    res.status(201).json(result)
};

module.exports = addContact;
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
