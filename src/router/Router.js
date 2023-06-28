import statecontroller from '../controller/city.controller.js';
import controller from '../controller/state.controller.js'
import datacontroller from '../controller/DataFind.js'

const routes = {
    '/City_insert': statecontroller.createUser,
    '/City_view': statecontroller.getUsers,
    '/City_update': statecontroller.updateUser,
    '/City_delete': statecontroller.deleteUser,
    '/insert': controller.createUser,
    '/view': controller.getUsers,
    '/update': controller.updateUser,
    '/delete': controller.deleteUser,
    '/viewStateCity': datacontroller.dataFind,
    '/viewCityState': datacontroller.dataFindFromCity,
    '/viewStateInstr': datacontroller.viewStateInstr,
    '/viewStateAndCityInstr': datacontroller.viewStateAndCityInstr
};
export default routes;