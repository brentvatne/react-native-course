// import Example from './examples/0-Switch';
import Example from './examples/1-Stack';
export default Example;

// import React from 'react';
// import {
//   Button,
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import { Constants } from 'expo';
// import contacts, { compareNames } from './contacts';
// import { createSwitchNavigator } from 'react-navigation';
// import AddContactScreen from './screens/AddContactScreen';
// import ContactListScreen from './screens/ContactListScreen';

// const AppNavigator = createSwitchNavigator(
//   {
//     AddContact: AddContactScreen,
//     ContactList: ContactListScreen,
//   },
//   {
//     initialRouteName: 'ContactList',
//   }
// );

// export default class App extends React.Component {
//   state = {
//     contacts: contacts,
//   };

//   addContact = newContact => {
//     this.setState(prevState => ({
//       showForm: false,
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   render() {
//     return (
//       <AppNavigator
//         screenProps={{
//           contacts: this.state.contacts,
//           addContact: this.addContact,
//         }}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Constants.statusBarHeight,
//   },
// });
