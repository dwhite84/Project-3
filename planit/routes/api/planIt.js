const router = require("express").Router();
const planitController = require("../../controllers/planitController");

//
router.route("/")
    .get(planitController.findById)
    .post(planitController.create)


router.route("/:id")
    .get(planitController.findById)
    .put(planitController.update)
    .delete(planitController.remove);

module.exports = router;