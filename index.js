import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import loadAllDbs from "./db_conection/db.js";
import { replaceUnderscores } from "./utils/replaceUnderscores.js";
import { normalize } from "./utils/normalize.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

const dbs = loadAllDbs();

const PORT = process.env.PORT ?? 3000;

const getData = async (dbName) => {
  const db = dbs[normalize(dbName)];
  if (db) {
    await db.read();
    return db.data;
  }
  return null;
};

app.get("/api/:dbName", async (req, res) => {
  const dbName = normalize(decodeURIComponent(req.params.dbName));
  const data = await getData(dbName);
  if (data) {
    res.json(replaceUnderscores(data));
  } else {
    res.status(404).send("Database not found");
  }
});

app.get("/api/:dbName/departamentos", async (req, res) => {
  const dbName = normalize(decodeURIComponent(req.params.dbName));
  const data = await getData(dbName);
  if (data) {
    res.json(replaceUnderscores(data.departamentos));
  } else {
    res.status(404).send("Database not found");
  }
});

app.get("/api/:dbName/departamentos/:departamento", async (req, res) => {
  const dbName = normalize(decodeURIComponent(req.params.dbName));
  const departamento = normalize(decodeURIComponent(req.params.departamento));
  const data = await getData(dbName);
  if (data) {
    const dep = data.departamentos.find(
      (d) => normalize(d.departamento) === departamento
    );
    if (dep) {
      res.json(replaceUnderscores(dep));
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
    const dbName = normalize(decodeURIComponent(req.params.dbName));
    const departamento = normalize(decodeURIComponent(req.params.departamento));
    const data = await getData(dbName);
    if (data) {
      const dep = data.departamentos.find(
        (d) => normalize(d.departamento) === departamento
      );
      if (dep) {
        res.json(replaceUnderscores(dep.localidades));
      } else {
        res.status(404).send("Departamento not found");
      }
    } else {
      res.status(404).send("Database not found");
    }
  }
);

app.get(
  `/api/:dbName/departamentos/:departamento/localidades/:localidad`,
  async (req, res) => {
    const dbName = decodeURIComponent(req.params.dbName);
    const departamento = decodeURIComponent(req.params.departamento);
    const localidad = decodeURIComponent(req.params.localidad);

    const normalizedDbName = normalize(dbName);
    const normalizedDepartamento = normalize(departamento);
    const normalizedLocalidad = normalize(localidad);

    const data = await getData(normalizedDbName);

    if (data) {
      const dep = data.departamentos.find(
        (d) => normalize(d.departamento) === normalizedDepartamento
      );

      if (dep) {
        const loc = dep.localidades.find(
          (l) => normalize(l.localidad) === normalizedLocalidad
        );

        if (loc) {
          res.json(replaceUnderscores(loc));
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
  console.log(`Server is running on http://localhost:${PORT}`);
});
