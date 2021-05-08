import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const { width } = Dimensions.get('window');

const RippleColor = (...args) =>
    Platform.Version >= 21 ? TouchableNativeFeedback.Ripple(...args) : null;

const Touchable =
    Platform.OS === 'web' ? TouchableOpacity : TouchableNativeFeedback;

export default function Dashboard({
                                      column = 2,
                                      data = [],
                                      card = () => {},
                                      background,
                                      rippleColor = '#fff',
                                      ...props
                                  }) {
    const [state, setState] = useState({
        widthDevice: width,
    });
    const { widthDevice } = state;

    const onLayout = (e) => {
        const { width: widthDevice } = Dimensions.get('window');
        setState((prev) => ({ ...prev, widthDevice }));
    };
    var dim = widthDevice / column - 20;
    return (
        <View onLayout={onLayout} style={{ flex: 1 }}>
            <FlatGrid
                itemDimension={dim}
                data={data}
                style={styles.gridView}
                renderItem={({ item, index }) => (
                    <Touchable
                        onPress={() => card(item)}
                        delayPressIn={0}
                        delayPressOut={0}
                        useForeground={true}
                        background={RippleColor(item.rippleColor || rippleColor)}>
                        <View
                            style={[
                                styles.itemContainer,
                                {
                                    backgroundColor:
                                        !item.background || !background ? '#fff' : item.background,
                                    height: dim,
                                },
                            ]}>
                            {item?.icon && item?.icon(item, background)}
                            <Text
                                style={[
                                    styles.itemName,
                                    {
                                        color:
                                            item.nameColor ||
                                            (!item.background || !background ? '#000' : '#fff'),
                                    },
                                    item.styleName,
                                ]}>
                                {item.name || index}
                            </Text>
                        </View>
                    </Touchable>
                )}
                {...props}
            />
        </View>
    );
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
