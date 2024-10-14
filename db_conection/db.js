
import { Low } from "lowdb";
import { JSONFile } from 'lowdb/node';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createDb = (filePath) => {
    const adapter = new JSONFile(filePath);
    const db = new Low(adapter,  { defaultValue: {} });
    return db;
};


const loadAllDbs = () => {
    const dbs = {};
    const files = fs.readdirSync(join(__dirname, '..', 'data'));
    files.forEach(file => {
        const dbName = file.replace('.json', '');
        dbs[dbName] = createDb(join(__dirname, '..', 'data', file));
    });
    return dbs;
};



export default loadAllDbs;