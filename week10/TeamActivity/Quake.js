import {
    getJSON
} from "./utilities.js";
export default class Quake {
    constructor() {
        this.baseUrl =
            "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02";
        this._quakes = [];
    }
    async getEarthQuakesByRadius(position, radius = 100) {
        const query =
            this.baseUrl +
            `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
        console.log(query);
        this._quakes = await getJSON(query);
        return this._quakes;
    }
    getQuakeById(id) {
        console.log(id);
        console.log(this._quakes);
        const result = this._quakes.features.filter(element => element.id === id);
        console.log(result);
        return result[0];
    }
}
