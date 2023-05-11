const express  = require ('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;



require('./routes/product.routes')(app);

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

// const AllMyShowRoutes = require ('./routes/show.routes');
// AllMyShowRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`))