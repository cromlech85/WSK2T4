import React from 'react';

var FoodContainer = React.createClass({
    handleFoodChange: function (e) {
        var food = e.target.value;
        this.props.onChange(food);
    },
    render: function () {
        return (
            <div>
                <label>Ruokavalinta:</label>
                    <select id="food" onChange={this.handleFoodChange}>
                        <option value="Kala">Kala</option>
                        <option value="Liha">Liha</option>
                        <option value="Kasvis">Kasvis</option>
                    </select>
            </div>
        )
    }
});
module.exports = FoodContainer;