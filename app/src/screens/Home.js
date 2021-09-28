import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../../res/Colors';
import {sizeFont, sizeWidth} from '../utils/Size';
import {connect} from 'react-redux';
import Methods from '../utils/Methods';

function Home(props) {

    console.log('HOME :>>> ', props.weatherData);

    return (
        <React.Fragment>
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={Colors.PRIMARY}/>
                <View style={styles.container}>
                    <Text
                        style={styles.cityNameStyle}>{props.weatherData.name + ', ' + props.weatherData.sys.country}</Text>
                    <Text
                        style={styles.mainTempStyle}>{Methods.getKelvinToFahrenheit(props.weatherData.main.temp)}</Text>
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
});

const mapStateToProps = state => {
    return {
        weatherData: state.WeatherForecastReducer.weatherData,
    };
};

export default connect(
    mapStateToProps,
)(Home);
