import create from '..';
import { test, it, expect } from 'vitest';

test('create', () => {
  it('should compile create object', () => {
    expect(create).toBeDefined();
  });
});
