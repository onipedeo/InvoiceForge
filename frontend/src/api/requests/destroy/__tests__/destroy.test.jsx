import destroyRequests from '..';

import { test, it, expect } from 'vitest';

test("'destroyRequests' object", () => {
  it("should compile 'destroyRequests' object", () => {
    expect(destroyRequests).toBeDefined();
    expect(destroyRequests.address).toBeDefined();
    expect(destroyRequests.appointment).toBeDefined();
    expect(destroyRequests.client).toBeDefined();
  });
});
