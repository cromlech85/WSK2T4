import React from 'react';

var SaunaContainer = React.createClass({
    handleSaunaChange: function (e) {
        if(e.target.checked == true){
            this.props.onChange('joo');
        } else {
            this.props.onChange('ei');
        }
    },
    render: function () {
        return(
            <div>
                <label><input type="checkbox" onChange={this.handleSaunaChange} /> Osallistun saunailtaan</label>
            </div>
        )
    }
});
module.exports = SaunaContainer;