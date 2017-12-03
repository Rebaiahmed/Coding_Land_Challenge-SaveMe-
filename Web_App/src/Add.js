import React, { Component } from 'react';


var axios = require('axios');










class Add extends Component {



    constructor(props)
    {
      super(props);
      this.state ={
          nom :'',
          cin :'',
          type_sang : '',
          num :0
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleNom = this.handleNom.bind(this);
      this.handleNum = this.handleNum.bind(this);
      this.handleCin = this.handleCin.bind(this);
      this.handleTypeSang = this.handleTypeSang.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }




   


    handleNom(event) {
        this.setState({nom: event.target.value});
      }

    //************************* */
    handleCin(event) {
        this.setState({cin: event.target.value});
      }
    //*********************** */


    handleTypeSang(event) {
        this.setState({type_sang: event.target.value});
      }


      //*********************** */

      handleNum(event) {
        this.setState({num: event.target.value});
      }

      handleChange(event) {
        this.setState({nom: event.target.value});
      }


      onFormSubmit(e) {
        e.preventDefault();
        console.log('onFormSubmit', e)
        console.log('this.state', this.state);
        axios.post('http://localhost:9000/QR', {
            nom : this.state.nom ,
            cin : this.state.cin ,
            num : this.state.cin ,
            type_sang : this.state.type_sang
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


    };


  render() {
    return (
      <div className="App">
     <h3> Ajouter Patient </h3>

     <form onSubmit={ this.onFormSubmit }>
  <div class="form-group">
    <label for="name">Nom</label>
    <input type="text" class="form-control" id="name" value={this.state.nom} 
    onChange={this.handleNom} />
  </div>

  <div class="form-group">
    <label for="cin">CIN</label>
    <input type="text" class="form-control" id="cin" value={this.state.cin}
    onChange={this.handleCin} />
  </div>

  <div class="form-group">
    <label for="birthday">Date naissance</label>
    <input type="text" class="form-control" id="birthday" />
  </div>

  <div class="form-group">
    <label for="maladies">écrivez vos maladies chroniques si vous en avez, séparez par une virgule</label>
    <input type="text" class="form-control" id="maladies" />
  </div>


  <div class="form-group">
    <label for="bloodtype">type de sang</label>
    <input type="text" class="form-control" id="bloodtype" value={this.state.type_sang}
    onChange={this.handleTypeSang} />
  </div>


  <div class="form-group">
    <label for="confiance">Numéro de Confiance</label>
    <input type="text" class="form-control" id="confiance" value={this.state.num} 
    onChange={this.handleNum}/>
  </div>

  
  <button type="submit" class="btn btn-default" >Submit</button>
</form>
      </div>
    );
  }
}

export default Add;
