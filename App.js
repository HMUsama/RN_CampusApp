import React from 'react';
import Navigator from './src/navigations/Navigation';
import { Root } from "native-base";
import { Font ,AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true
     };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // ...Ionicons.font,
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
       <Navigator/>
       </Root>
    )
  }
}