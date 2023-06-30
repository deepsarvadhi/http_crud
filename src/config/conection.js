import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    database: 'crud',
    password: 'test@123',
    port: 5444,
});

pool.connect((err) => {
    if (err) throw err;
})

var table = 'create table if not exists state(ID SERIAL PRIMARY KEY,s_name varchar(20) unique )';
var table = 'CREATE TABLE IF NOT EXISTS city (ID SERIAL PRIMARY KEY,state_id int references state(ID) , name varchar(20))';

pool.query(table, (err, results) => {
    if (err) {
        throw err;
    }
})


export default pool;