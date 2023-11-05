<<<<<<< HEAD
const contacts = require("../../models/contacts");
const { createError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {
      throw createError(404);
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
=======
const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);
const { createError } = require(`${basedir}/helpers`);

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw createError(404);
  }

  res.json({
    message: "Contact deleted"
  })
}

module.exports = removeContact;
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
