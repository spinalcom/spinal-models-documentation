const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;
let exports = (module.exports = {});



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

let SpinalNote = class SpinalNote extends Model {
    constructor(name = "message") {
      super();
  
      this.add_attr({
        username: "",
        owner: "",
        date: Date.now(),
        message: ""
      });
    }
  };

  let SpinalURL = class SpinalURL extends Model {
    constructor(name = "url") {
      super();
  
      this.add_attr({
        name: "",
        date: Date.now(),
        url: ""
      });
    }
  };

  var SpinalAttribute = class SpinalAttribute extends Model {
    constructor(name = "attributes") {
      super();
  
      this.add_attr({
        name: "",
        value: "",
        date: Date.now()
      });
    }
  };
  
exports.SpinalFile = SpinalFile;
spinalCore.register_models(SpinalFile);

exports.SpinalNote = SpinalNote;
spinalCore.register_models(SpinalNote);

exports.SpinalURL = SpinalURL;
spinalCore.register_models(SpinalURL);

exports.SpinalAttribute = SpinalAttribute;
spinalCore.register_models(SpinalAttribute);