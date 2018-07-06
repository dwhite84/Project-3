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

router.route("/Admin")
    .get(planitController.findAll)
    .put(planitController.update)
    .post(planitController.create)
    .delete(planitController.remove);

router.route("/ExpendableGoods")
    .get(planitController.findById)
    .post(planitController.create)
    .put(planitController.update);

router.route("/Gear")
    .get(planitController.findAll)
    .post(planitController.create)
    .put(planitController.update);


router.route("/Logistics")
    .get(planitController.findAll)
    .post(planitController.create)
    .put(planitController.update);

router.route("/MessageBoard")
    .get(planitController.findAll)
    .post(planitController.create)
    .put(planitController.update);

router.route("/Other")
    .get(planitController.findAll)
    .post(planitController.create)
    .put(planitController.update);

router.route("/Recreational")
    .get(planitController.findAll)
    .post(planitController.create)
    .put(planitController.update);

router.route("/User")
    .get(planitController.findAll)
    .post(planitController.create)
    .put(planitController.update);

module.exports = router;