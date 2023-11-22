import getRequest from '..';
import { test, it, expect } from 'vitest';

test("'destroyRequests' object", () => {
  it("should compile 'destroyRequests' object", () => {
    expect(getRequest).toBeDefined();
    expect(getRequest.appointmentData).toBeDefined();
    expect(getRequest.clientData).toBeDefined();
    expect(getRequest.userData).toBeDefined();
    expect(getRequest.idByEmail).toBeDefined();
  });
});
