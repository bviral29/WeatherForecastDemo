export default class Methods {

    static getKelvinToFahrenheit(temperature) {
        if (temperature == null || temperature === '' || temperature === undefined) {
            return temperature;
        }

        return Math.ceil(((parseFloat(temperature) - 273.15) * 1.8) + 32);
    }
}
