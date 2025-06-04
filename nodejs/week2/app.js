import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const documents = JSON.parse(fs.readFileSync("documents.json"));

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search
app.get("/search", (req, res) => {
  const q = req.query.q;

  if (!q) {
    return res.json(documents);
  }

  const results = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      String(value).toLowerCase().includes(q.toLowerCase())
    )
  );

  res.json(results);
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((doc) => doc.id === id);

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  res.json(document);
});

// POST /search
app.post("/search", (req, res) => {
  const q = req.query.q;
  const { fields } = req.body;

  if (q && fields) {
    return res.status(400).json({
      error: "You cannot use both query parameter 'q' and 'fields' in body",
    });
  }

  if (q) {
    const results = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(q.toLowerCase())
      )
    );
    return res.json(results);
  }


  if (fields) {
    const results = documents.filter((doc) =>
      Object.entries(fields).every(
        ([key, value]) =>
          doc[key] && String(doc[key]).toLowerCase() === value.toLowerCase()
      )
    );
    return res.json(results);
  }

  res.json(documents);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
