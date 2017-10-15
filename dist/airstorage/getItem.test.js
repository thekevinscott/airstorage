"use strict";

var _getItem = require("./getItem");

var _getItem2 = _interopRequireDefault(_getItem);

var _errors = require("../utils/errors");

var _request = require("./request");

var request = _interopRequireWildcard(_request);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("getItem", () => {
  test("that it throws if key is missing", done => {
    try {
      (0, _getItem2.default)();
    } catch (err) {
      expect(err.name).toEqual(_errors.MissingArgumentError.name);
      expect(err.message).toEqual(`Failed to execute 'getItem': 1 argument required, but only 0 present`);
      done();
    }
  });

  test("that it calls request if both values are present", () => {
    const callback = () => {};
    const key = "foo";

    request.default = jest.fn();
    (0, _getItem2.default)(key, callback);

    const expected = {
      callback,
      url: `/get/${key}`
    };

    expect(request.default).toBeCalledWith(expected);
  });
});