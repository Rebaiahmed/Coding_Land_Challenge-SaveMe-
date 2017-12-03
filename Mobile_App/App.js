/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Linking,
  View,TouchableOpacity,
  Alert,
  TextInput
} from 'react-native';
var axios = require('axios');

import { Container, Header, Content, Button, Text, Card , CardItem ,Icon,Right  } from 'native-base';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from 'react-native-modal'

import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});






//******************************************//

class  Dossier extends Component {

  constructor(props) {
    super(props);
    this.state ={
      user :{}
    }
    console.log(JSON.stringify(props));
const {state} = this.props.navigation;

console.log(JSON.stringify(state));
//console.log(state.params.qode.params);

  }


  //******************//
componentWillMount()
{

  axios.get('http://localhost:9000/User/id=04848993')
  .then(function (response) {
    console.log(JSON.stringify(response));
    this.setState({user:response.data})
  })
  .catch(function (error) {
    console.log(error);
  });
}


  render() {
const {state} = this.props.navigation;
const {user} = this.state ;
    return (

      <Container>
        <Header />

        <Content>


<Card>
           <CardItem>
             <Icon active name="logo-googleplus" />
             <Text> Nom : Ilyes</Text>
             <Right>
               <Icon name="arrow-forward" />
             </Right>
            </CardItem>



            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text> Cin :04848993</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>




             <CardItem>
               <Icon active name="logo-googleplus" />
               <Text> Type Sanguin :A</Text>
               <Right>
                 <Icon name="arrow-forward" />
               </Right>
              </CardItem>



              <CardItem>
                <Icon active name="logo-googleplus" />
                <Text> Maladies : Fiévre  Diabéte A</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
               </CardItem>



               <CardItem>
                 <Icon active name="logo-googleplus" />
                 <Text> Numéro de confiance  :20140428</Text>
                 <Right>
                   <Icon name="arrow-forward" />
                 </Right>
                </CardItem>


              </Card>





        </Content>
      </Container>
    );

}

}







class UselessTextInput extends Component {

  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
    this.state = { code: '' };
  }

//********************//
DisplayData = () =>
{
  console.log("clicked");
  const {state} = this.props.navigation;
  const navigation = this.props.navigation;
  navigation.navigate('Dossier',{qode: state})

  /*const {state} = this.props.navigation;
  console.log("data from UI1" + JSON.stringify(state));
if(this.state.code ==109)
{
  //this.props.navigation.navigate('Dossier',{'Data':state});
const {navigate} = this.props.navigation;
navigate('Dossier', {qode: state})
}*/

}



  render() {
/*let code = this.state.code ;
  const {state} = this.props.navigation;
  let Data = null ;
if(code==109)
{
  let Data = (
    <Card>
    <CardItem>
      <Icon active name="logo-googleplus" />
      <Text>{ state.params }</Text>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
     </CardItem>
         </Card>
  )
}*/

    return (

      <Container>
        <Header />
        <Content>

        <TextInput
            style={{ borderColor: 'gray', borderWidth: 1}}
            onChangeText={(code) => this.setState({code})}
            value={this.state.code}
          />

          <Button rounded success onPress={() => this.DisplayData()}>
             <Text>Valider Code</Text>
           </Button>




           </Content>
         </Container>
    );

}

}

//*************UI ***********************//







 class App extends Component<{}> {


  constructor(props){
         super(props);
         console.log("props");
         this.state ={
           isModalVisible : false
         }
     }



  onSuccess(e) {
    console.log("e" + JSON.stringify(e));
  const {navigate} = this.props.navigation;
navigate('Details', {qode: e})





      /*Linking.openURL(e.data).then(e=>{
        console.log("e" + JSON.stringify(e));
      })
      .catch(err => console.error('An error occured', err));*/
    }





    _showModal = () => this.setState({ isModalVisible: true })

     _hideModal = () => this.setState({ isModalVisible: false })




    render() {
       return (

         <QRCodeScanner
           onRead={this.onSuccess.bind(this)}
           topContent={(
             <Text style={styles.centerText}>
                 Récupere le Dossier Médical de Cet Patient
             </Text>
           )}
           bottomContent={(
             <TouchableOpacity style={styles.buttonTouchable} onPress={this._showModal }>
               <Text style={styles.buttonText}>OK. Got it!</Text>
             </TouchableOpacity>
           )}
         />





       );
     }
   }


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});







//***************Define ***********************//

const RootNavigator = StackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: UselessTextInput,
  },
  Dossier :{
    screen : Dossier
  }
},
  { headerMode: 'none' });


export default RootNavigator;
