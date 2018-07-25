import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import { Constants } from 'expo';
import GridView from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const RippleColor = (...args) =>
  Platform.Version >= 21 ? TouchableNativeFeedback.Ripple(...args) : null;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: width,
    };
  }

  onLayout(e) {
    const { width } = Dimensions.get('window');
    this.setState({ width });
  }

  render() {
    var dim = this.state.width / this.props.column - 20;
    return (
      <View onLayout={this.onLayout.bind(this)} style={{flex:1}}>
        <GridView
          itemDimension={dim}
          items={this.props.items}
          style={styles.gridView}
          renderItem={item => (
            <TouchableNativeFeedback
              onPress={() => {
                this.props.card(item);
              }}
              delayPressIn={0}
              delayPressOut={0}
              useForeground={true}
              background={RippleColor('#fff')}>
              <View
                style={[
                  styles.itemContainer,
                  {
                    backgroundColor: this.props.background
                      ? item.background
                      : '#fff',
                    height: dim,
                  },
                ]}>
                <Icon
                  name={item.icon}
                  size={40}
                  color={this.props.background ? '#fff' : '#3498db'}
                />
                <Text
                  style={[
                    styles.itemName,
                    { color: this.props.background ? '#fff' : '#000' },
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableNativeFeedback>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
  },
});
