var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {
  geojsonName = req.params.name;
  geojsonPath = `/json/${geojsonName}.geojson`;
  res.render(
    'maps/index', { title: geojsonName, geojsonPath: geojsonPath });
});

module.exports = router;
