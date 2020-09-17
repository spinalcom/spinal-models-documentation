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

const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;


const MESSAGE_TYPES = {
  text: "text",
  image: "img",
  file: "file"
}
module.exports.MESSAGE_TYPES = MESSAGE_TYPES;

let SpinalFile = class SpinalFile extends globalType.Model {
  constructor(_id, _name) {
    super();
    if (FileSystem._sig_server) {
      this.add_attr({
        id: _id,
        name: _name
      });
    }
  }
}

module.exports.SpinalFile = SpinalFile;


spinalCore.register_models(SpinalFile);

let SpinalNote = class SpinalNote extends Model {
  constructor(username, message, userId, type = MESSAGE_TYPES.text,
    file) {
    super();

    this.add_attr({
      username: username,
      date: Date.now(),
      message: message,
      userId: userId,
      type: type,
      file: file ? new Ptr(file) : undefined
    });
  }
};

module.exports.SpinalNote = SpinalNote;
spinalCore.register_models(SpinalNote);

let SpinalURL = class SpinalURL extends Model {
  constructor(name, url) {
    super();

    this.add_attr({
      label: name,
      date: Date.now(),
      URL: url
    });
  }
};
module.exports.SpinalURL = SpinalURL;
spinalCore.register_models(SpinalURL);

var SpinalAttribute = class SpinalAttribute extends Model {
  constructor(label, value, type = "", unit = "") {
    super();

    this.add_attr({
      label: label,
      value: value,
      date: Date.now(),
      type: type,
      unit: unit
    });
  }
};

module.exports.SpinalAttribute = SpinalAttribute;
spinalCore.register_models(SpinalAttribute);
