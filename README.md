# React Native: react-native-dashboard

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-dashboard.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-dashboard)
[![github home](http://img.shields.io/npm/v/react-native-dashboard.svg?style=flat)](https://www.npmjs.com/package/react-native-dashboard)
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS%20%7C%20Web-brightgreen.svg?style=flat&colorB=191A17)
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
import { FontAwesome } from 'react-native-vector-icons';

const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={40}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);

const data = [
    {
        name: 'Me',
        background: '#3498db',
        icon: (item, background) => Icon({ icon: 'user', item, background }),
        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'Family',
        background: '#b71c1c',
        icon: (item, background) => Icon({ icon: 'gratipay', item, background }),
        styleIcon: { color: '#0d47a1' },
    },
    {
        name: 'Lovely',
        background: '#ffeb3b',
        icon: (item, background) => Icon({ icon: 'heart', item, background }),
    },
    {
        name: 'Team',
        background: '#4caf50',
        icon: (item, background) => Icon({ icon: 'users', item, background }),
        styleName: { color: '#0d47a1', fontWeight: 'bold' },
    },
    {
        name: 'Friends',
        nameColor: '#3498db',
        background: '#02cbef',
        icon: (item, background) => Icon({ icon: 'group', item, background }),
    },
    {
        name: 'Calendars',
        background: '#ff5722',
        icon: (item, background) => Icon({ icon: 'calendar', item, background }),
    },
];

export default function App() {
    const card = ({ name }) => console.log('Card: ' + name);
    return (
        <View style={styles.container}>
            <Dashboard
                data={data}
                background={true}
                card={card}
                column={2}
                rippleColor={'#3498db'}
            />
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
| `rippleColor`     | `string`   | `#fff`  | Ripple color, does not work on the web version.

- **items type `array`**

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `background`       | `string`   | `#fff`   |Background card.
| `name`      | `string`   |  | Name card.
| `nameColor`       | `string`   | `#000`   |Name color.
| `styleName`       | `obj`   | `{}`   |Name style.
| `icon`     | `function(item, background)`   |  | 
| `iconColor`       | `string`   | `#3498db`   |Icon color.
| `styleIcon`       | `obj`   | `{}`   |Icon style.
| `rippleColor`     | `string`   | `#fff`  | Ripple color, does not work on the web version.

## 📜 License
This library is provided under the Apache License.
