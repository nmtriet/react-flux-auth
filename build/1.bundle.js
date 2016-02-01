webpackJsonp([1],{

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _auth = __webpack_require__(209);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logout = _react2.default.createClass({
		displayName: 'Logout',
		componentDidMount: function componentDidMount() {
			_auth2.default.logout();
		},
		render: function render() {
			return _react2.default.createElement(
				'p',
				null,
				'You are now logged out'
			);
		}
	});
	module.exports = Logout;

/***/ }

});