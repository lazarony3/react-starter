'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _actions = require('../actions/');

var actions = _interopRequireWildcard(_actions);

var _redux = require('redux');

var _actionTypes = require('../constants/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserCreate = function (_React$Component) {
    _inherits(UserCreate, _React$Component);

    function UserCreate(props) {
        _classCallCheck(this, UserCreate);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserCreate).call(this, props));

        _this.state = { list: [] };
        _this.render = _this.render.bind(_this);
        _this.addNewUser = _this.addNewUser.bind(_this);
        return _this;
    }

    _createClass(UserCreate, [{
        key: 'render',
        value: function render() {
            var self = this;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    'Name: ',
                    _react2.default.createElement('input', { type: 'text', id: 'name' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    'Email: ',
                    _react2.default.createElement('input', { type: 'text', id: 'email' })
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: self.addNewUser },
                    'Create User'
                )
            );
        }
    }, {
        key: 'addNewUser',
        value: function addNewUser() {
            // var tmpState = this.state.list;
            var user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value
            };

            // tmpState.push(user);
            this.props.actions.createUser(user);
        }
    }]);

    return UserCreate;
}(_react2.default.Component);

function mapStateToProps(state) {
    console.log(arguments);
    return { list: state };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserCreate);