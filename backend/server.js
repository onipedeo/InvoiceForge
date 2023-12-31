const Express = require('express');
require('dotenv').config()
router = require('./routes')
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const cors = require('cors');


// Express Configuration
App.use(cors());
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use('/api', router)




App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});