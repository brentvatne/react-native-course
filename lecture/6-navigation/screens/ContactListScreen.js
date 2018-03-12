import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import SectionListContacts from '../SectionListContacts';

export default class ContactListScreen extends React.Component {
  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="add contact" onPress={this.showForm} />
        {this.state.showContacts && (
          <SectionListContacts contacts={this.props.screenProps.contacts} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
