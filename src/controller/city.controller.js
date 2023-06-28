import pool from '../config/conection.js'
import HTTP from '../constants/responseCode.constant.js'
import resdata from '../middleware/errorHandling.js'

function createUser(req, res) {
    try {
        let data = '';
        req.on('data', insertData => {
            data += insertData;
        });

        req.on('end', () => {
            const user = JSON.parse(data);
            let insertQuery = `INSERT INTO city (state_id, name) values ((select ID from state where s_name = '${user.state}'), '${user.city}')`;
            pool.query(insertQuery, (err, result) => {
                res.writeHead(200, resdata.global());
                if (err) {
                    res.end(JSON.stringify(resdata.BAD_REQUEST()));
                } else {
                    res.end(JSON.stringify(resdata.SUCCESS()));
                }
            });
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));

    }
}

function getUsers(req, res) {
    try {
        var insertQuery = 'SELECT * FROM city';
        pool.query(insertQuery, (err, data) => {
            res.writeHead(200, resdata.global());
            if (err) {
                res.end(JSON.stringify(resdata.BAD_REQUEST()));
            }
            res.end(JSON.stringify({ status: true, code: HTTP.SUCCESS, message: "Data Show", data: data.rows }));
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));
    }
}

function updateUser(req, res) {
    try {
        let data = '';
        req.on('data', insertData => {
            data += insertData;
        });

        req.on('end', () => {
            const updatedUser = JSON.parse(data);
            var insertQuery = `UPDATE city SET name = '${updatedUser.Name}' WHERE id = '${updatedUser.id}'`;
            pool.query(insertQuery, (err, result) => {
                res.writeHead(200, resdata.global());
                if (err) {
                    res.end(JSON.stringify(resdata.BAD_REQUEST()));
                }
                res.end(JSON.stringify(resdata.SUCCESS()));
            });
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));
    }
}

function deleteUser(req, res) {
    try {
        let data = '';
        req.on('data', insertData => {
            data += insertData;
        });

        req.on('end', () => {
            const updatedUser = JSON.parse(data);
            var insertQuery = `DELETE FROM city WHERE id = '${updatedUser.id}'`;
            pool.query(insertQuery, (err, result) => {
                res.writeHead(200, resdata.global());
                if (err) {
                    res.end(JSON.stringify(resdata.BAD_REQUEST()));
                } else {
                    res.end(JSON.stringify(resdata.SUCCESS()));
                }
            });
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));
    }
}

export default {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}