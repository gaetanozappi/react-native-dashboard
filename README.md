# React Native: react-native-dashboard

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-dashboard.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-dashboard)
[![github home](http://img.shields.io/npm/v/react-native-dashboard.svg?style=flat)](https://www.npmjs.com/package/react-native-dashboard)
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--dashboard-blue.svg?style=flat-square)](https://github.com/gaetanozappi/react-native-dashboard)
[![npm](https://img.shields.io/npm/dm/react-native-dashboard.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-dashboard)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-dashboard.svg?style=flat)](https://github.com/gaetanozappi/react-native-dashboard/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-dashboard.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-dashboard/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-dashboard.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-dashboard/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-dashboard.svg)]()

<img src="https://github.com/gaetanozappi/react-native-dashboard/raw/master/screenshot/react-native-dashboard.png" />       
<img src="https://github.com/gaetanozappi/react-native-dashboard/raw/master/screenshot/react-native-dashboard2.png" />       

-   [Usage](#-usage)
-   [License](#-license)

## 💻 Usage

```javascript
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';

const data = [
  { name: 'Me', background: '#3498db', icon: 'user', iconColor: '#0d47a1' },
  {
    name: 'Family',
    background: '#b71c1c',
    icon: 'gratipay',
    styleIcon: { color: '#0d47a1' },
  },
  { name: 'Lovely', background: '#ffeb3b', icon: 'heart' },
  {
    name: 'Team',
    background: '#4caf50',
    icon: 'users',
    styleName: { color: '#0d47a1', fontWeight: 'bold' },
  },
  {
    name: 'Friends',
    nameColor: '#0d47a1',
    background: '#02cbef',
    icon: 'group',
  },
  { name: 'Calendars', background: '#ff5722', icon: 'calendar' },
];

export default function App() {
  const card = ({ name }) => console.log('Card: ' + name);
  return (
    <View style={styles.container}>
      <Dashboard data={data} background={true} card={card} column={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `data`      | `array`   |  | We need to pass an array, as in the example.
| `background`       | `bool`   | `false`   | It allows to choose whether to use the value of the background that is in the array.
| `card`          | `function`   |    | Function that lets you know which card has been selected.
| `column`     | `number`   | `2`  | Number of cards per line.

- **items type `array`**

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `background`       | `string`   | `#fff`   |Background card.
| `name`      | `string`   |  | Name card.
| `nameColor`       | `string`   | `#000`   |Name color.
| `styleName`       | `obj`   | `{}`   |Name style.
| `icon`     | `string(FontAwesome)`   |  | Icon name.
| `iconColor`       | `string`   | `#3498db`   |Icon color.
| `styleIcon`       | `obj`   | `{}`   |Icon style.

## 📜 License
This library is provided under the Apache License.
