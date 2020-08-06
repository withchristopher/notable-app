const router = require("./node_modules/express").Router();
const noteRoutes = require("./notes");

router.use(noteRoutes)

module.exports = router;