import get from '..';
import { test, it, expect } from 'vitest';


test('get', () => {
  it('should compile get object', () => {
    expect(get).toBeDefined();
  });
});
