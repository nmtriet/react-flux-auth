webpackJsonp([3],{

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _auth = __webpack_require__(209);

	var _auth2 = _interopRequireDefault(_auth);

	var _history = __webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Login = _react2.default.createClass({
	    displayName: 'Login',
	    getInitialState: function getInitialState() {
	        return {
	            error: false
	        };
	    },
	    handleSubmit: function handleSubmit(event) {
	        event.preventDefault();

	        var email = this.refs.email.value;
	        var password = this.refs.password.value;

	        _auth2.default.login(email, password);
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'form',
	            { onSubmit: this.handleSubmit.bind(this) },
	            _react2.default.createElement(
	                'label',
	                null,
	                _react2.default.createElement('input', { ref: 'email', placeholder: 'email', defaultValue: 'trietnguyen308@gmail.com' })
	            ),
	            _react2.default.createElement(
	                'label',
	                null,
	                _react2.default.createElement('input', { ref: 'password', placeholder: 'password' })
	            ),
	            ' (hint: 123456)',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	                'button',
	                { type: 'submit' },
	                'login'
	            ),
	            this.state.error && _react2.default.createElement(
	                'p',
	                null,
	                'Bad login information'
	            )
	        );
	    }
	});
	module.exports = Login;

/***/ }

});