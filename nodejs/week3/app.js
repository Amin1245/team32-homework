import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());


let documents = [];
try {
  const data = fs.readFileSync('documents.json', 'utf-8');
  documents = JSON.parse(data);
} catch (err) {
  console.error('Error reading documents.json:', err);
}


app.get('/search', (req, res) => {
  res.json(documents);
});

app.get('/documents/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find(doc => doc.id === id);

  if (document) {
    res.json(document);
  } else {
    res.status(404).json({ error: 'Document not found' });
  }
});


app.post('/search', (req, res) => {
  const query = req.body.query?.toLowerCase();

  if (!query) {
    return res.status(400).json({ error: 'Query is required in request body' });
  }

  const results = documents.filter(doc => doc.text.toLowerCase().includes(query));
  res.json(results);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
