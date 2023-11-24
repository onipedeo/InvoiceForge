import destroy from '..';
import { test, it, expect } from 'vitest';

test("'destroy' object", () => {
  it("should compile 'destroy' object", () => {
    expect(destroy).toBeDefined();
  });
});
