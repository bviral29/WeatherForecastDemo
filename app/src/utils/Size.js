import React from 'react';
import {Dimensions} from 'react-native';
//import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const percentHeight = height / 100;
const percentWidth = width / 100;

// export const getDeviceID = () => {
//     return DeviceInfo.getUniqueId();
// };
// export const getDevicePlatform = () => {
//     return Platform.OS
// }
// export const getdeviceName = async () => {
//
//     return new Promise((resolve, reject) => {
//     DeviceInfo.getDeviceName().then( result => {
//            resolve(result)
//         }
//     )
//     })
//
// }
export const sizeWidth = percent => {
    return (
        percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
    );
};

export const sizeHeight = percent => {
    return (
        percent * (percentWidth > percentHeight ? percentWidth : percentHeight)
    );
};

export const sizeFont = percent => {
    return (
        percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
    );
};
