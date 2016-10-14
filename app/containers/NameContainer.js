import React from 'react';

var NameContainer = React.createClass({
    handleNameChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },
    render: function () {
        return (
            <div>
                <label>Nimi:</label>
                <input type="text" id="name" placeholder="nimi" onChange={this.handleNameChange} />
            </div>
        )
    }
});
module.exports = NameContainer;