const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//applies the /api in front of the routes inside of api folder
//API Routes
router.use("/api", apiRoutes);

//If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
console.log(`apiRoutes: ${apiRoutes}`);
module.exports = router;
