"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/cpanel Models
 */
function proxyLicenseCpanel(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseCpanel = proxyLicenseCpanel;
exports.default = proxyLicenseCpanel;
