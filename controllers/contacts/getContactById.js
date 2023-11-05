<<<<<<< HEAD
const contacts = require("../../models/contacts");
const { createError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.getContactById(id);

    if (!result) {
      throw createError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
=======
const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);
const { createError } = require(`${basedir}/helpers`);

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw createError(404);
  }

  res.json(result)
}

module.exports = getContactById;
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
