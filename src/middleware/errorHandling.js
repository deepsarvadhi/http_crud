import HTTP from '../constants/responseCode.constant.js';

const resdata = class {
    static global(req, res) {
        return (200, { 'Content-Type': 'application/json' });
    }
    static BAD_REQUEST(req, res) {
        return ({ status: false, code: HTTP.BAD_REQUEST, message: "Error" });
    }
    static SUCCESS(req, res) {
        return ({ status: true, code: HTTP.SUCCESS, message: "Success" });
    }
    static ERROR(req, res) {
        return { status: false, code: HTTP.INTERNAL_SERVER_ERROR, message: "Something went wrong!" };
    }
    static URLNOTFOUND(req, res) {
        return { status: false, code: HTTP.NOT_FOUND, message: "URL not found from server.js !" };
    }
}

export default resdata;
