/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./controller.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar controller = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('https://fast-food-fast1.herokuapp.com/api/v1');\nvar token = localStorage.getItem('token');\nvar method = {\n  method: 'POST',\n  headers: {\n    Accept: 'text/plain, application/json, */*',\n    'Content-type': 'application/json',\n    'x-access-token': token\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee() {\n  var data;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return controller.post('/auth', method);\n\n        case 3:\n          data = _context.sent;\n          console.log(data);\n\n          if (!(data.auth === \"false\")) {\n            _context.next = 7;\n            break;\n          }\n\n          return _context.abrupt(\"return\", 'Failed');\n\n        case 7:\n          if (data.auth === \"true\") {\n            localStorage.setItem('token', data.token);\n          }\n\n          if (!(data.user.user_role === \"User\")) {\n            _context.next = 10;\n            break;\n          }\n\n          return _context.abrupt(\"return\", \"User\");\n\n        case 10:\n          return _context.abrupt(\"return\", 'Admin');\n\n        case 13:\n          _context.prev = 13;\n          _context.t0 = _context[\"catch\"](0);\n\n          if (!_context.t0) {\n            _context.next = 17;\n            break;\n          }\n\n          return _context.abrupt(\"return\", 'Failed');\n\n        case 17:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, this, [[0, 13]]);\n})));\n\n//# sourceURL=webpack:///./auth.js?");

/***/ }),

/***/ "./controller.js":
/*!***********************!*\
  !*** ./controller.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Controller =\n/*#__PURE__*/\nfunction () {\n  function Controller(baseUrl) {\n    _classCallCheck(this, Controller);\n\n    this.baseUrl = baseUrl;\n  }\n\n  _createClass(Controller, [{\n    key: \"get\",\n    value: function () {\n      var _get = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(get_route) {\n        var _this = this;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.getUrl = this.baseUrl + get_route;\n                _context.next = 3;\n                return fetch(this.getUrl).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this.data = data;\n                });\n\n              case 3:\n                return _context.abrupt(\"return\", this.data);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function get(_x) {\n        return _get.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"post\",\n    value: function () {\n      var _post = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(post_route, method) {\n        var _this2 = this;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                this.postUrl = this.baseUrl + post_route;\n                this.method = method;\n                _context2.next = 4;\n                return fetch(this.postUrl, method).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this2.data = data;\n                });\n\n              case 4:\n                return _context2.abrupt(\"return\", this.data);\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function post(_x2, _x3) {\n        return _post.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"put\",\n    value: function () {\n      var _put = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(put_route, method) {\n        var _this3 = this;\n\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                this.puUrl = this.baseUrl + put_route;\n                this.method = method;\n                _context3.next = 4;\n                return fetch(this.putUrl, method).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this3.data = data;\n                });\n\n              case 4:\n                return _context3.abrupt(\"return\", this.data);\n\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      return function put(_x4, _x5) {\n        return _put.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"delete\",\n    value: function () {\n      var _delete2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(delete_route, method) {\n        var _this4 = this;\n\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                this.deleteUrl = this.baseUrl + delete_route;\n                this.method = method;\n                _context4.next = 4;\n                return fetch(this.deleteUrl, method).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this4.data = data;\n                });\n\n              case 4:\n                return _context4.abrupt(\"return\", this.data);\n\n              case 5:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      return function _delete(_x6, _x7) {\n        return _delete2.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return Controller;\n}();\n\n\n\n//# sourceURL=webpack:///./controller.js?");

/***/ }),

/***/ "./login.js":
/*!******************!*\
  !*** ./login.js ***!
  \******************/
/*! exports provided: userLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userLogin\", function() { return userLogin; });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./controller.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./auth.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar login = document.getElementById('login');\nvar signUp = document.getElementById('signUpButton');\nvar loginSection = document.getElementById('loginSection');\nvar userValidation = document.getElementById('userValidation');\nvar LoginForm = document.getElementById('loginForm');\nvar showPassword = document.getElementById('showPassword');\nvar confirmPassword = document.getElementById('confirmPassword');\nvar email = document.getElementById('email');\nvar comparePassword = document.getElementById('comparePassword');\nvar notMember = document.getElementById('notMember');\nvar submitBtn = document.getElementById('submitBtn');\nvar loginBtn = document.getElementById('loginBtn');\nvar confirmPasswordLabel = document.getElementById('confirmPasswordLabel');\nvar emailLabel = document.getElementById('emailLabel');\nvar message = document.getElementById('message');\nvar password = document.getElementById('password');\nvar letter = document.getElementById('letter');\nvar capital = document.getElementById('capital');\nvar number = document.getElementById('number');\nvar length = document.getElementById('length');\nvar username = document.getElementById('username');\nvar login_return = document.getElementById('login_return');\nvar signUpButton = document.getElementById('signUpButton');\nvar section1 = document.getElementById('section1');\nvar textWrapper = document.getElementById('textWrapper');\nvar baseUrl = 'https://fast-food-fast1.herokuapp.com/api/v1';\nvar controller = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](baseUrl); // resizes the dimensions of the Screen to fit the screen\n\nfunction autoResizeDiv() {\n  if (section1 == null || textWrapper == null) {\n    return;\n  }\n\n  section1.style.height = \"\".concat(window.innerHeight, \"px\");\n  textWrapper.style.height = \"\".concat(window.innerHeight - 250, \"px\");\n}\n\nwindow.onresize = autoResizeDiv;\nautoResizeDiv(); // submits a registration data\n\nsubmitBtn.addEventListener('click',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(e) {\n    var body, method, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            e.preventDefault();\n            _context.prev = 1;\n            body = JSON.stringify({\n              user_name: username.value,\n              user_role: 'User',\n              user_email: email.value,\n              user_password: password.value\n            });\n            method = {\n              method: 'POST',\n              headers: {\n                Accept: 'text/plain, application/json, */*',\n                'Content-type': 'application/json'\n              },\n              body: body\n            };\n\n            if (!(comparePassword.innerHTML === 'Password matching')) {\n              _context.next = 13;\n              break;\n            }\n\n            _context.next = 7;\n            return controller.post('/auth/signup', method);\n\n          case 7:\n            data = _context.sent;\n            console.log(data); // logs in user\n\n            userLogin();\n            alert('Signup Successful, Please Login');\n            _context.next = 14;\n            break;\n\n          case 13:\n            alert('Error! Signup Failed, Password does not match');\n\n          case 14:\n            _context.next = 19;\n            break;\n\n          case 16:\n            _context.prev = 16;\n            _context.t0 = _context[\"catch\"](1);\n\n            if (_context.t0) {\n              alert('Network Error, Please check your network connection and try again');\n            }\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[1, 16]]);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}()); // submits a login data for validation\n\nloginBtn.addEventListener('click',\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(e) {\n    var body, method, data;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            e.preventDefault();\n            _context2.prev = 1;\n            body = JSON.stringify({\n              user_name: username.value,\n              user_role: 'User',\n              user_password: password.value\n            });\n            method = {\n              method: 'POST',\n              headers: {\n                Accept: 'text/plain, application/json, */*',\n                'Content-type': 'application/json'\n              },\n              body: body\n            };\n            _context2.next = 6;\n            return controller.post('/auth/login', method);\n\n          case 6:\n            data = _context2.sent;\n            console.log(data);\n\n            if (data.auth === 'true') {\n              localStorage.setItem('token', data.token);\n            }\n\n            if (data.user.user_role === 'User') {\n              window.location.replace('https://fast-food-fast1.herokuapp.com/front-page.html');\n            } else window.location.replace('https://fast-food-fast1.herokuapp.com/admin.html');\n\n            _context2.next = 15;\n            break;\n\n          case 12:\n            _context2.prev = 12;\n            _context2.t0 = _context2[\"catch\"](1);\n\n            if (_context2.t0) {\n              alert('Network Error, Please check your network connection and try again');\n            }\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[1, 12]]);\n  }));\n\n  return function (_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}()); // eventListener Opens the Login View when the login button is clicked\n\nlogin.addEventListener('click', userLogin);\nsignUp.addEventListener('click', userSignup);\nlogin_return.addEventListener('click', userLogin); // event listener to toggle password visibility\n\nshowPassword.addEventListener('click', viewPassword); // When the user clicks on the password field, show the message box\n\npassword.onfocus = function () {\n  message.style.display = 'block';\n}; // When the user clicks outside of the password field, hide the message box\n\n\npassword.onblur = function () {\n  message.style.display = 'none';\n}; // When the user starts to type text into the password field\n\n\npassword.onkeyup = function () {\n  var count = 0; // Validate lowercase letters\n\n  var lowerCase = /[a-z]/g;\n  validate(letter, lowerCase, count++); // Validate capital letters\n\n  var upperCase = /[A-Z]/g;\n  validate(capital, upperCase, count++); // Validate numbers\n\n  var numbers = /[0-9]/g;\n  validate(number, numbers, count++); // Validate length\n\n  if (password.value.length >= 8) {\n    length.classList.remove('invalid');\n    length.classList.add('valid');\n    count++;\n  } else {\n    length.classList.remove('valid');\n    length.classList.add('invalid');\n  }\n\n  if (count == 4) {\n    message.style.display = 'none';\n  }\n}; // function allows to toggle betwwen Password visibilty\n\n\nfunction viewPassword() {\n  if (password.type === 'password') {\n    password.type = 'text';\n    confirmPassword.type = 'text';\n  } else {\n    password.type = 'password';\n    confirmPassword.type = 'password';\n  }\n}\n/**\n * function allows to Validate password with a green tick\n * @param {*} attribute - the P element to be modified\n * @param {*} check - the Regex pattern to be checked for\n * @param {*} count - count stores the number of rules obeyed\n */\n\n\nfunction validate(attribute, check, count) {\n  if (password.value.match(check)) {\n    attribute.classList.remove('invalid');\n    attribute.classList.add('valid');\n  } else {\n    attribute.classList.remove('valid');\n    attribute.classList.add('invalid');\n  }\n}\n/* checks if the text entered in the 'password section'\nand 'confirm password' section are the same\n*/\n\n\nconfirmPassword.onkeyup = function () {\n  if (confirmPassword.value == password.value) {\n    comparePassword.style.color = 'green';\n    comparePassword.innerHTML = 'Password matching';\n  } else {\n    comparePassword.style.color = 'red';\n    comparePassword.innerHTML = 'Password not matching';\n  }\n};\n\nfunction userSignup() {\n  login_return.style.display = 'block';\n  confirmPassword.style.display = 'block';\n  comparePassword.style.display = 'block';\n  email.style.display = 'block';\n  notMember.style.display = 'none';\n  submitBtn.style.display = 'block';\n  loginBtn.style.display = 'none';\n  confirmPasswordLabel.style.display = 'block';\n  emailLabel.style.display = 'block';\n}\n\nfunction userLogin() {\n  confirmPassword.style.display = 'none';\n  comparePassword.style.display = 'none';\n  email.style.display = 'none';\n  notMember.style.display = 'block';\n  submitBtn.style.display = 'none';\n  loginBtn.style.display = 'block';\n  confirmPasswordLabel.style.display = 'none';\n  emailLabel.style.display = 'none';\n  loginSection.style.display = 'block';\n  login_return.style.display = 'none';\n}\n\n//# sourceURL=webpack:///./login.js?");

/***/ })

/******/ });