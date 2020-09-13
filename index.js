const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

let words = [
  {
    name: 'hacktoberfest',
    definition: 'A developer festival where we give back to the community',
    id: 'FK0kGv7',
  },
  {
    name: 'dyslexia',
    definition: 'A learning disorder characterised by difficulty reading.',
    id: 'ib6w_Rr',
  },
  {
    name: 'react ',
    definition: 'A UI library created by Facebook',
    id: 'gNshTkd',
  },
  {
    name: 'angular',
    definition: 'A frontend framework developed by Google',
    id: 'U8lGlfj',
  },
  {
    name: 'localhost',
    definition: 'a local web sever that is hosted on your computer',
    id: '4sZx7Xv',
  },
];

app.get('/', (req, res) => {
  res.send('<h2>Word Wiki API Server</h2>');
});

app.get('/api/words', (req, res) => {
  res.status(200).json(words);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
