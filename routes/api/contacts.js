<<<<<<< HEAD
const express = require("express");
=======
const express = require('express')
const { basedir } = global;

const { auth } = require(`${basedir}/middlewares`);

const ctrl = require(`${basedir}/controllers/contacts`);

const { ctrlWrapper } = require(`${basedir}/helpers`);
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4

const ctrl = require("../../controllers/contacts");

<<<<<<< HEAD
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", ctrlWrapper(ctrl.addContact));

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

router.put("/:id", ctrlWrapper(ctrl.updateContact));

module.exports = router;
=======
router.get('/', auth, ctrlWrapper(ctrl.getAllContacts));

router.get('/:contactId', auth, ctrlWrapper(ctrl.getContactById));

router.post('/', auth, ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeContact));

router.put('/:contactId', auth, ctrlWrapper(ctrl.updateContactById));

router.patch('/:contactId/favorite', auth, ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
