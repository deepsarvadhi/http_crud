import pool from '../config/conection.js'
import HTTP from '../constants/responseCode.constant.js'
import resdata from '../middleware/errorHandling.js'

function dataFind(req, res) {
    try {
        var insertQuery = `SELECT s_name, (select array_agg (name) from city where city.state_id = state.id) AS allcity from state`;
        pool.query(insertQuery, (err, data) => {
            res.writeHead(200, resdata.global());
            if (err) {
                res.end(JSON.stringify(resdata.BAD_REQUEST()));
            } else {
                res.end(JSON.stringify({ status: true, code: HTTP.SUCCESS, message: "Data Show", data: data.rows }));
            }
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));
    }
}

function dataFindFromCity(req, res) {
    try {

        var insertQuery = `SELECT name, (select s_name from state where city.state_id = state.id) AS state from city`;
        pool.query(insertQuery, (err, data) => {
            res.writeHead(200, resdata.global());
            if (err) {
                res.end(JSON.stringify(resdata.BAD_REQUEST()));
            } else {
                res.end(JSON.stringify({ status: true, code: HTTP.SUCCESS, message: "Data Show", data: data.rows }));
            }
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));
    }
}

function viewStateInstr(req, res) {
    try {

        let data = '';
        req.on('data', insertData => {
            data += insertData;
        });

        req.on('end', () => {
            const user = JSON.parse(data);
            const insertQuery = `SELECT city.name FROM state JOIN city ON state.id = city.state_id WHERE state.s_name = '${user.name}'`;
            pool.query(insertQuery, (err, data) => {
                res.writeHead(200, resdata.global());
                if (err) {
                    res.end(JSON.stringify(resdata.BAD_REQUEST()));
                } else {
                    res.end(JSON.stringify({ status: true, code: HTTP.SUCCESS, message: "Data Show", data: data.rows }));
                }
            });
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));
    }
}

function viewStateAndCityInstr(req, res) {
    try {
        let data = '';
        req.on('data', insertData => {
            data += insertData;
        });

        req.on('end', () => {
            const rr = req.url;
            const user = JSON.parse(data);
            const insertQuery = `select city.name,state.s_name from city inner join state on city.state_id = state.id where city.name = '${user.name}'`
            pool.query(insertQuery, (err, data) => {
                res.writeHead(200, resdata.global());
                if (err) {
                    res.end(JSON.stringify(resdata.BAD_REQUEST()));
                } else {
                    res.end(JSON.stringify({ status: true, code: HTTP.SUCCESS, message: "Data Show", data: data.rows }));
                }
            });
        });
    } catch (error) {
        res.end(JSON.stringify(resdata.ERROR()));
    }
}


export default {
    dataFind,
    dataFindFromCity,
    viewStateInstr,
    viewStateAndCityInstr
}