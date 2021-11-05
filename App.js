import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import ListCard from './components/ListCard'

import { Header } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //initialize the counter duration
    this.array = [],
    this.state = {
      totalDuration: 1500,
      arrayHolder:[],
      textInput_Holder:'',
      timerInput_Holder:''
    };
  }
  
  //deleteItem = data => {
    //let allItems = [...this.state.arrayHolder];
    //let filteredItems = allItems.filter(item => item.id != data.id);
    //this.setState({ arrayHolder: filteredItems })
  //}

  setTime(){
    this.setState({
      totalDuration:this.state.timerInput_Holder
    })
  }

  //componentDidMount(){
    //this.setState({ arrayHolder: [...this.array] })
  //}

  keyExtractor = (item, index) => index.toString();
  
  addToList=()=>{
    //This requires a database
  }
  joinData = () => {
    this.array.push({title : this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.array] })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
          marginTop:5,
          marginBottom:5
        }}
      />
    );
  }

  GetItem(item) {
    alert(item);
  }

  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#1b5c74'}
          placement={"left"}
          centerComponent={{
            text: '             Study Skills',
            style: { color: '#fff', fontSize: 35 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require('./assets/logo.png')}
        />
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          style={{marginLeft:140, marginTop:-150}}
          digitStyle={{backgroundColor:'#1b5c74'}}
          digitTxtStyle={{color:'white'}}
          timetoShow={['H', 'M', 'S']}
          //formate to show
          onFinish={() => alert('Good job!')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Time in minutes"
          onChangeText={text => {
            this.setState({ timerInput_Holder:text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity /*onPress={this.setTime()}*/>
          <Ionicons
            name={"checkmark-circle"}
            size={RFValue(40)}
            color={"green"}
            style={{ marginLeft:330, marginTop:-45 }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.inputBox2}
          placeholder="Add to list"
          onChangeText={text => this.setState({ textInput_Holder:text})}
          value={this.state.text}/>
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>     Add an item to list</Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(index) => index.toString()}
          data={this.state.arrayHolder}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  imageIcon: {
    width: 150,
    height: 180,
    marginLeft: 10,
    marginTop:5
  },
  button:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#1b5c74',
      width: 160,
      height: 30,
      marginTop:10,
      marginBottom:20,
  },
  buttonText:{
    color:'white',
    fontSize:14,
    fontWeight:'bold'
  },
  inputBox: {
    marginTop: 10,
    marginLeft:175,
    width: '35%',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
  },
  inputBox2: {
    marginTop: 40,
    justifyContent:'center',
    marginLeft:10,
    alignSelf: 'center',
    width: '80%',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
  },
});