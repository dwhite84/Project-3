const router = require("express").Router();
const planitRoutes = require("./planit");

router.use("/planit", planitRoutes);

module.exports = router;