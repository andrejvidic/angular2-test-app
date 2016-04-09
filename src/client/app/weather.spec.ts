import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {WeatherApp} from '../app/weather';

beforeEachProviders(() => [WeatherApp]);

describe('App: Weather', () => {
  it('should have the `defaultMeaning` as 42', inject([WeatherApp], (app: WeatherApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([WeatherApp], (app: WeatherApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

