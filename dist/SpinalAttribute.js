"use strict";
/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinalAttribute = void 0;
const spinal_core_connectorjs_1 = require("spinal-core-connectorjs");
class SpinalAttribute extends spinal_core_connectorjs_1.Model {
    constructor(label, value, type, unit) {
        super();
        if (spinal_core_connectorjs_1.FileSystem._sig_server === false)
            return;
        if (label === undefined)
            this.add_attr('label', label);
        if (value === undefined)
            this.add_attr('value', value);
        if (type === undefined)
            this.add_attr('type', type);
        if (unit === undefined)
            this.add_attr('unit', unit);
        this.add_attr('lastModificationDate', Date.now());
    }
}
exports.SpinalAttribute = SpinalAttribute;
spinal_core_connectorjs_1.spinalCore.register_models(SpinalAttribute);
//# sourceMappingURL=SpinalAttribute.js.map