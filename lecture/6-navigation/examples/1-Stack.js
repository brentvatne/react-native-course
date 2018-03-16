import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}

class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    title: 'First screen',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeNameTwo')}
        />
      </View>
    );
  }
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    title: 'Second screen',
  };

  render() {
    const showGoBack = this.props.navigation.getParam('showGoBack');

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'orange',
        }}>
        <Button
          title="Go to three"
          onPress={() => this.props.navigation.navigate('routeNameThree')}
        />
        {showGoBack ? (
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        ) : null}
      </View>
    );
  }
}

class ScreenComponentThree extends React.Component {
  static navigationOptions = {
    title: 'Third and final screen',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 25,
          borderColor: 'purple',
        }}>
        <Button
          title="Go to two and enable back"
          onPress={() =>
            this.props.navigation.navigate('routeNameTwo', { showGoBack: true })
          }
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    routeNameOne: ScreenComponentOne,
    routeNameTwo: ScreenComponentTwo,
    routeNameThree: ScreenComponentThree,
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);
