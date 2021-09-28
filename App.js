import React from 'react';
import {SafeAreaView} from 'react-native';
import AppRouter from './AppRouter';
import NavigationActions from './app/src/utils/NavigationActions';
import {Provider} from 'react-redux';
import configureStore from './app/src/store/Store';
import Colors from './app/res/Colors';

const store = configureStore();

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={{flex: 0, backgroundColor: Colors.PRIMARY}}/>
                <SafeAreaView style={{flex: 1, backgroundColor: Colors.PRIMARY}}>
                    <AppRouter ref={ref => NavigationActions.setTopLevelNavigator(ref)}/>
                </SafeAreaView>
            </Provider>
        );
    }
}
