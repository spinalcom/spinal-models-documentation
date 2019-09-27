const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;

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
  constructor(username, message) {
    super();

    this.add_attr({
      username: username,
      date: Date.now(),
      message: message
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
  constructor(label, value) {
    super();

    this.add_attr({
      label: label,
      value: value,
      date: Date.now()
    });
  }
};

module.exports.SpinalAttribute = SpinalAttribute;
spinalCore.register_models(SpinalAttribute);
