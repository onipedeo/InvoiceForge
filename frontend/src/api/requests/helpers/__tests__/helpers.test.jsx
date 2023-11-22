
import helpers from '..';
import { describe, test, assert } from 'vitest';

describe('API Request Helpers', () => {
  test('should export create module', () => {
    assert.isDefined(helpers.create);
  });

  test('should export get module', () => {
    assert.isDefined(helpers.get);
  });

  test('should export update module', () => {
    assert.isDefined(helpers.update);
  });

  test('should export destroy module', () => {
    assert.isDefined(helpers.destroy);
  });

  test.run();
});
