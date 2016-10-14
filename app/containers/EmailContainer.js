import React from 'react';

var EmailContainer = React.createClass({
    handleEmailChange: function (e) {
        var email = e.target.value;
        this.props.onChange(email);
    },
    render: function () {
        return (
            <div>
                <label>Email:</label>
                <input type="email" id="email" placeholder="email" onChange={this.handleEmailChange} />
            </div>
        )
    }
});
module.exports = EmailContainer;