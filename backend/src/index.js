const cookieParser = require('cookie-parser');
require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

// TODO: use express middlware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: [process.env.FRONT_END_ENDPOINT, process.env.ADMIN_END_POINT]
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
