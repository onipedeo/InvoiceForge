import create from '..';
import { test, it, expect } from 'vitest';

test('create', () => {
  it('should compile create object', () => {
    expect(create).toBeDefined();
    expect(create.address).toBeDefined();
    expect(create.appointment).toBeDefined();
    expect(create.client).toBeDefined();
    expect(create.invoice).toBeDefined();
    expect(create.user).toBeDefined();
  });
});
