import React from 'react';
import NameContainer from './NameContainer';
import EmailContainer from './EmailContainer';
import FoodContainer from './FoodContainer';
import SaunaContainer from './SaunaContainer'

var FormContainer = React.createClass({
    getInitialState: function () {
        return {
                id: 0,
                name: '',
                email: '',
                food: 'Kala',
                sauna: 'ei',
                data: []
            };
    },
    componentWillMount: function () {
        this.setState({id: 0});  
    },
    addName: function (name) {
        this.setState({name: name});
    },
    addEmail: function (email) {
        this.setState({email: email});
    },
    addFood: function (food) {
        this.setState({food: food});
    },
    addSaunaParticipation: function (reply) {
        this.setState({
            sauna: reply
        });
    },
    onSubmit: function (newUser) {
        var allUsers = this.state.data;
        allUsers.push(newUser);
        this.setState({
            data: allUsers
        });
    },
    handleSubmit: function (e) {
        var id = this.state.id;
        var name = this.state.name;
        var email = this.state.email;
        var food = this.state.food;
        var sauna = this.state.sauna;
        this.onSubmit({id: id, name: name, email: email, food: food, sauna: sauna});
        this.setState({id: id+1, name: '', email: '', food: '', sauna: ''});
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <NameContainer name={this.state.name} onChange={this.addName} />

                    <EmailContainer email={this.state.email} onChange={this.addEmail} />

                    <FoodContainer food={this.state.food} onChange={this.addFood} />
                    
                    <SaunaContainer sauna={this.state.sauna} onChange={this.addSaunaParticipation} />
                </div>
                <button type="submit">Lähetä</button>
            </form>
        )
    }
});
module.exports = FormContainer;
