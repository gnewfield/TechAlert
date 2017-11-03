import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Animated, Dimensions, Easing} from 'react-native';
import SubmitButton from 'react-native-submit-button';

export default class App extends React.Component {
  constructor() {
    super();
    this.state ={
      submitButtonState: 'normal'
    };
  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.title}>STC{'\n\t'}Go!</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.singleLine}
            placeholder="NetID"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.singleLine}
            placeholder="Location"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.singleLine}
            placeholder="Brief description"
            multiline={true}
            numberOfLines={10}
            placeholderTextColor="white"
          />
        </View>
      <SubmitButton 
        primaryColor='#0F4D92'
        width={250}
        buttonText="Request Assistance"
        onSubmit={() => this.setState({submitButtonState: 'success'})}
        onSuccess={() => {}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708FB9',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50,
  },
  title: {
    fontFamily: 'Georgia', 
    fontSize: 50,
    color: '#0F4D92',
    textAlign: 'center',
  },
  inputs: {
    paddingTop: 25,
    width: 250,
    justifyContent: 'flex-start',
  },
  singleLine: {
    height: 50,
    textAlign: 'left',
  },
  description: {
    height: 250,
    textAlign: 'left',
  },
});
