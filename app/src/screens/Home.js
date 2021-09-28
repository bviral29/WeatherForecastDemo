import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../../res/Colors';
import {sizeFont, sizeWidth} from '../utils/Size';
import {connect} from 'react-redux';
import Methods from '../utils/Methods';

function Home(props) {

    return (
        <React.Fragment>
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={Colors.PRIMARY}/>
                <View style={styles.container}>
                    <Text
                        style={styles.cityNameStyle}>{props.weatherData.name + ', ' + props.weatherData.sys.country}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: sizeWidth(20)}}>
                        <Image style={styles.weatherImageStyle} resizeMode="contain"
                               source={{uri: 'https://openweathermap.org/img/wn/' + props.weatherData.weather[0].icon + '.png'}}/>
                        <Text style={styles.weatherTextStyle}>{props.weatherData.weather[0].main}</Text>
                    </View>
                    <Text
                        style={styles.mainTempStyle}>{Methods.getKelvinToFahrenheit(props.weatherData.main.temp) + '° F'}</Text>
                    <Text
                        style={styles.feelsLikeTextStyle}>{'Feels like ' + Methods.getKelvinToFahrenheit(props.weatherData.main.feels_like) + '° F'}</Text>
                </View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, padding: sizeWidth(3), alignItems: 'center',
    },
    cityNameStyle: {
        fontSize: sizeFont(7),
    },
    mainTempStyle: {
        fontSize: sizeFont(17),
    },
    weatherImageStyle: {width: sizeWidth(16), height: sizeWidth(16)},
    weatherTextStyle: {fontSize: sizeFont(4)},
    feelsLikeTextStyle: {fontSize: sizeFont(3), color: Colors.GRAY},
});

const mapStateToProps = state => {
    return {
        weatherData: state.WeatherForecastReducer.weatherData,
        currentCityName: state.WeatherForecastReducer.currentCityName,
    };
};

export default connect(
    mapStateToProps,
)(Home);
