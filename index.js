import express from "express";
import loadAllDbs from "./db_conection/db.js";
import { replaceUnderscores } from "./utils/replaceUnderscores.js";

const app = express();
app.use(express.json());

const dbs = loadAllDbs();

const PORT = 3000;
const HOST = "localhost";

const getData = async (dbName) => {
  const db = dbs[dbName];
  if (db) {
    await db.read();
    return db.data;
  }
  return null;
};

app.get("/api/:dbName", async (req, res) => {
  const data = await getData(req.params.dbName);
  if (data) {
    res.json(replaceUnderscores(data));
  } else {
    res.status(404).send("Database not found");
  }
});

app.get("/api/:dbName/departamentos", async (req, res) => {
  const data = await getData(req.params.dbName);
  if (data) {
    res.json(replaceUnderscores(data.departamentos));
  } else {
    res.status(404).send("Database not found");
  }
});

app.get("/api/:dbName/departamentos/:departamento", async (req, res) => {
  const data = await getData(req.params.dbName);
  if (data) {
    const departamento = data.departamentos.find(
      (d) => d.departamento === req.params.departamento
    );
    if (departamento) {
      res.json(replaceUnderscores(departamento));
    } else {
      res.status(404).send("Departamento not found");
    }
  } else {
    res.status(404).send("Database not found");
  }
});

app.get(
  "/api/:dbName/departamentos/:departamento/localidades",
  async (req, res) => {
    const data = await getData(req.params.dbName);
    if (data) {
      const departamento = data.departamentos.find(
        (d) => d.departamento === req.params.departamento
      );
      if (departamento) {
        res.json(replaceUnderscores(departamento.localidades));
      } else {
        res.status(404).send("Departamento not found");
      }
    } else {
      res.status(404).send("Database not found");
    }
  }
);

app.get(
  "/api/:dbName/departamentos/:departamento/localidades/:localidad",
  async (req, res) => {
    console.log("Parámetros recibidos:", req.params);
    const data = await getData(req.params.dbName);
    if (data) {
      const departamento = data.departamentos.find(
        (d) => d.departamento === req.params.departamento
      );
      if (departamento) {
        const localidad = departamento.localidades.find(
          (l) => l.localidad === req.params.localidad
        );
        if (localidad) {
          res.json(replaceUnderscores(localidad));
        } else {
          res.status(404).send("Localidad not found");
        }
      } else {
        res.status(404).send("Departamento not found");
      }
    } else {
      res.status(404).send("Database not found");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
