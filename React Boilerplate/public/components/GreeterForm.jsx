var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var updates = {};
        var nameRef = this.refs.name;
        var name = nameRef.value;
        var messageRef = this.refs.message;
        var message = messageRef.value;

        if (name.length > 0) {
            nameRef.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            messageRef.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div><input type="text" ref="name" placeholder="Enter name" /></div>
                <div><textarea ref="message" placeholder="Enter message" /></div>
                <div><button>Submit</button></div>
            </form>
        )
    }
});

module.exports = GreeterForm;