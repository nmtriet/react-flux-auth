webpackJsonp([4],{

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _auth = __webpack_require__(209);

	var _auth2 = _interopRequireDefault(_auth);

	var _history = __webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

	        _this.state = {
	            error: false
	        };
	        return _this;
	    }

	    _createClass(Login, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(event) {
	            event.preventDefault();

	            var email = this.refs.email.value;
	            var password = this.refs.password.value;

	            _auth2.default.login(email, password);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'form',
	                { onSubmit: this.handleSubmit.bind(this) },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: 'email' },
	                        'Email'
	                    ),
	                    _react2.default.createElement('input', { ref: 'email', placeholder: 'email', id: 'email', className: 'form-control', defaultValue: 'trietnguyen308@gmail.com' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: 'password' },
	                        'Password'
	                    ),
	                    _react2.default.createElement('input', { ref: 'password', placeholder: 'password', id: 'password', className: 'form-control' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-default' },
	                        'Login'
	                    )
	                ),
	                this.state.error && _react2.default.createElement(
	                    'p',
	                    null,
	                    'Bad login information'
	                )
	            );
	        }
	    }]);

	    return Login;
	}(_react2.default.Component);

	;
	module.exports = Login;

/***/ }

});