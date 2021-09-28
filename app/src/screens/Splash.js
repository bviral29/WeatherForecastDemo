import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Images from '../../res/Images';
import Colors from '../../res/Colors';
import {sizeFont, sizeWidth} from '../utils/Size';
import Strings from '../../res/Strings';
import {callWeatherDataAPI} from '../actions/WeatherDataAction';

export default function Splash(props) {

    const currentCity = 'Ahmedabad, GJ, IN';
    let splashInterval;
    const dispatch = useDispatch();
    const getWeatherResponse = useSelector(state => state.WeatherForecastReducer);
    const {loading, error, weatherData} = getWeatherResponse;

    if (Object.keys(weatherData).length !== 0) {
        splashInterval = setTimeout(() => {
            props.navigation.replace('Home');
        }, 1000);
    }

    // useEffect(() => {
    //     const splashInterval = setTimeout(() => {
    //         props.navigation.replace('Home');
    //     }, 2000);
    //     return () => clearTimeout(splashInterval);
    // }, []);

    useEffect(() => {
        dispatch(callWeatherDataAPI(currentCity));

        return () => clearTimeout(splashInterval);
    }, [dispatch]);

    return (
        <React.Fragment>
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={Colors.PRIMARY}/>
                <View style={styles.container}>
                    <Image
                        style={styles.imgLogoStyle}
                        resizeMode="contain"
                        source={Images.IC_WEATHER}/>
                </View>
                <Text style={styles.appNameStyle}>{Strings.APP_NAME}</Text>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    imgLogoStyle: {
        height: '45%', width: '45%',
    },
    appNameStyle: {
        color: Colors.BLACK, fontSize: sizeFont(5), alignSelf: 'center', marginBottom: sizeWidth(15),
    },
});
