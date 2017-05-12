'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('messenger-api');

var Api = function Api(ACCESS_TOKEN) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Api);
  this.subscribe = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _requestPromise2.default)({
              url: _this.BASE_URL + '/me/subscribed_apps',
              qs: { access_token: _this.ACCESS_TOKEN },
              method: 'POST'
            });

          case 2:
            res = _context.sent;

            if (!res.error) {
              _context.next = 7;
              break;
            }

            throw new Error(body.error);

          case 7:
            debug('Successfully subscribed to page: ' + res);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  this.setGetStartedButton = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(payload) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _requestPromise2.default)({
                url: _this.BASE_URL + '/me/messenger_profile',
                qs: { access_token: _this.ACCESS_TOKEN },
                method: 'POST',
                json: {
                  get_started: { payload: payload }
                }
              });

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  this.setPersistentMenu = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(call_to_actions) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      var composer_input_disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _requestPromise2.default)({
                url: _this.BASE_URL + '/me/messenger_profile',
                qs: { access_token: _this.ACCESS_TOKEN },
                method: 'POST',
                json: {
                  persistent_menu: [{
                    locale: locale,
                    composer_input_disabled: composer_input_disabled,
                    call_to_actions: call_to_actions
                  }]
                }
              });

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  this.getUserProfile = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id) {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _requestPromise2.default)({
                url: _this.BASE_URL + '/' + id,
                qs: {
                  access_token: _this.ACCESS_TOKEN,
                  fields: 'first_name,last_name,profile_pic,locale,timezone,gender,is_payment_enabled'
                },
                method: 'GET',
                json: true
              });

            case 2:
              return _context4.abrupt('return', _context4.sent);

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  this.sendReadReceipt = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(id) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _requestPromise2.default)({
                url: _this.BASE_URL + '/me/messages',
                qs: { access_token: _this.ACCESS_TOKEN },
                method: 'POST',
                json: {
                  recipient: { id: id },
                  sender_action: 'mark_seen'
                }
              });

            case 2:
              return _context5.abrupt('return', _context5.sent);

            case 3:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this);
    }));

    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  this.sendTypingOn = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(id) {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return (0, _requestPromise2.default)({
                url: _this.BASE_URL + '/me/messages',
                qs: { access_token: _this.ACCESS_TOKEN },
                method: 'POST',
                json: {
                  recipient: { id: id },
                  sender_action: 'typing_on'
                }
              });

            case 2:
              return _context6.abrupt('return', _context6.sent);

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this);
    }));

    return function (_x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  this.sendTypingOff = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(id) {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _requestPromise2.default)({
                url: _this.BASE_URL + '/me/messages',
                qs: { access_token: _this.ACCESS_TOKEN },
                method: 'POST',
                json: {
                  recipient: { id: id },
                  sender_action: 'typing_off'
                }
              });

            case 2:
              return _context7.abrupt('return', _context7.sent);

            case 3:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this);
    }));

    return function (_x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  this.whitelistDomains = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(domains) {
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _requestPromise2.default)({
                url: _this.BASE_URL + '/me/messenger_profile',
                qs: { access_token: _this.ACCESS_TOKEN },
                method: 'POST',
                json: { whitelisted_domains: domains }
              });

            case 2:
              return _context8.abrupt('return', _context8.sent);

            case 3:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this);
    }));

    return function (_x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  this.ACCESS_TOKEN = ACCESS_TOKEN;
  this.BASE_URL = 'https://graph.facebook.com/v2.8';
}

/**
 * @param Array[String] domains
 */
;

exports.default = Api;