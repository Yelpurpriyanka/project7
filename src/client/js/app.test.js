import "babel-polyfill"
import {getGeoLocation} from './geonames';


describe("Test:function 'GeoLocation()'", () => {
    test('It is defined', () => {
        expect(getGeoLocation).toBeDefined();
    });
  
    test('It is a function', () => {
        expect(typeof getGeoLocation).toBe("function");
    });
  });