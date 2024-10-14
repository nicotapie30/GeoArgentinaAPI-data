
// Importar librerias y Módulos
import express from 'express';
import loadAllDbs from './db_conection/db.js';

// Crear servidor
const app = express();
app.use(express.json());

const PORT = 3000;
const HOST = 'localhost';


// Conectar con archivo de base de datos
const dbs = loadAllDbs();

const getData = async (dbName) => {
  const db = dbs[dbName];
  if (db) {
    await db.read();
    return db.data;
  }
  return null;
};


// Crear endpoint a las provincias
app.get('/api/:dbName', async (req, res) => {
  const data = await getData(req.params.dbName);
  if (data) {
    res.json(data);
  } else {
    res.status(404).send('Database not found');
  }
});


// Crear endpoint a los departamentos
app.get('/api/:dbName/departamentos', async (req, res) => {
  const data = await getData(req.params.dbName);
  if (data) {
    res.json(data.departamentos);
  } else {
    res.status(404).send('Database not found');
  }
});


// Crear endpoint a un departamento específico
app.get('/api/:dbName/departamentos/:departamento', async (req, res) => {
  const data = await getData(req.params.dbName);
  if (data) {
    const departamento = data.departamentos.find(d => d.departamento === req.params.departamento);
    if (departamento) {
      res.json(departamento);
    } else {
      res.status(404).send('Departamento not found');
    }
  } else {
    res.status(404).send('Database not found');
  }
});


// Crear endpoint a las localidades de un departamento
app.get('/api/:dbName/departamentos/:departamento/localidades', async (req, res) => {
  const data = await getData(req.params.dbName);
  if (data) {
    const departamento = data.departamentos.find(d => d.departamento === req.params.departamento);
    if (departamento) {
      res.json(departamento.localidades);
    } else {
      res.status(404).send('Departamento not found');
    }
  } else {
    res.status(404).send('Database not found');
  }
});


// Crear endpoint a las localidades específicas de un departamento
app.get('/api/:dbName/departamentos/:departamento/localidades/:localidad', async (req, res) => {
    const data = await getData(req.params.dbName);
    if (data) {
      const departamento = data.departamentos.find(dep => dep.departamento === req.params.departamento);
      if (departamento) {
        const localidad = departamento.localidades.find(loc => loc.localidad === req.params.localidad);
        if (localidad) {
          res.json(localidad);
        } else {
          res.status(404).send('Localidad not found');
        }
      } else {
        res.status(404).send('Departamento not found');
      }
    } else {
      res.status(404).send('Database not found');
    }
  });


  
// Crear puerto
app.listen(PORT, HOST, () => {
  console.log(`Server running at http//${HOST}:${PORT}`);
});
