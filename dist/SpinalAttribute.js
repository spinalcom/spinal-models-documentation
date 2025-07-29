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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    updateSpinalAttributeDate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.date !== 'undefined') {
                this.rem_attr('date');
                this.add_attr('lastModificationDate', Date.now());
            }
            else {
                this.lastModificationDate.set(Date.now());
            }
        });
    }
    setValue(value) {
        this.value.set(value);
        this.updateSpinalAttributeDate();
    }
    setLabel(label) {
        this.label.set(label);
        this.updateSpinalAttributeDate();
    }
    setType(type) {
        if (this.type === undefined) {
            this.add_attr('type', type);
        }
        else {
            this.type.set(type);
        }
        this.updateSpinalAttributeDate();
    }
    setUnit(unit) {
        if (this.unit === undefined) {
            this.add_attr('unit', unit);
        }
        else {
            this.unit.set(unit);
        }
        this.updateSpinalAttributeDate();
    }
}
exports.SpinalAttribute = SpinalAttribute;
spinal_core_connectorjs_1.spinalCore.register_models(SpinalAttribute);
//# sourceMappingURL=SpinalAttribute.js.map