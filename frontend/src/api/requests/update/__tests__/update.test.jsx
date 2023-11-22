import update from '..';
import { test, it, expect } from 'vitest';

test('update', () => {
  it('should compile update object', () => {
    expect(update).toBeDefined();
    expect(update.appointment).toBeDefined();
    expect(update.client).toBeDefined();
    expect(update.user).toBeDefined();
    expect(update.address).toBeDefined();
  });
});
