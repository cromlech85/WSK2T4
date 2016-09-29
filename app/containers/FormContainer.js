import React from 'react';

var FormContainer = React.createClass({
    getInitialState: function () {
        return {
                id: 0,
                name: '',
                email: '',
                food: '',
                sauna: '',
                data: []
            };
    },
    componentWillMount: function () {
        this.setState({id: 0});  
    },
    handleNameChange: function (e) {
        this.setState({name: e.target.value});
    },
    handleEmailChange: function (e) {
        this.setState({email: e.target.value});
    },
    handleFoodChange: function (e) {
        this.setState({email: e.target.value});
    },
    handleSaunaChange: function (e) {
        
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
                    <label>Nimi:</label>
                    <input type="text" id="name" placeholder="nimi" onChange={this.handleNameChange} />

                    <label>Email:</label>
                    <input type="email" id="email" placeholder="email" onChange={this.handleEmailChange} />

                    <label>Ruokavalinta:</label>
                    <select id="food" onChange={this.handleFoodChange}>
                        <option value="Kala">Kala</option>
                        <option value="Liha">Liha</option>
                        <option value="Kasvis">Kasvis</option>
                    </select>
                    <div>
                        <label><input type="checkbox" onChange={this.handleSaunaChange} /> Osallistun saunailtaan</label>
                    </div>
                </div>
                <button type="submit">Lähetä</button>
            </form>
        )
    }
});
module.exports = FormContainer;
