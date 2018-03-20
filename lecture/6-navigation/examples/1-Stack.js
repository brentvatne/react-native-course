import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    headerTitle: 'First screen',
    headerTintColor: 'teal',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>
        <Button
          title="Go to screen two"
          onPress={() => {
            this.props.navigation.navigate('RouteNameTwo');
          }}
        />
      </View>
    );
  }
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Hi',
      headerRight: (
        <Button
          title="Press me"
          onPress={() => navigation.navigate('RouteNameThree', { number: 11 })}
        />
      ),
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'orange',
        }}>
        <Button
          title="Go to screen three"
          onPress={() => {
            this.props.navigation.navigate('RouteNameThree', {
              number: randomNumber(),
            });
          }}
        />
      </View>
    );
  }
}

class ScreenComponentThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `Number: ${navigation.getParam('number')}`,
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'purple',
        }}>
        <Text style={{ fontSize: 25 }}>
          {this.props.navigation.getParam('number')}
        </Text>
        <Button
          title="New number"
          onPress={() => {
            this.props.navigation.setParams({ number: randomNumber() });
          }}
        />
        <Button
          title="Go back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  RouteNameOne: ScreenComponentOne,
  RouteNameTwo: ScreenComponentTwo,
  RouteNameThree: ScreenComponentThree,
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
