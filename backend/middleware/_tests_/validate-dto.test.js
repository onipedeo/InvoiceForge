const validateDto = require('../validate-dto');
const yup = require('yup');

describe('validateDto', () => {
  let schema;
  let req;
  let res;
  let next;

  beforeEach(() => {
    schema = yup.object().shape({
      name: yup.string().required(),
      age: yup.number().required(),
    });

    req = {
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update the req body when it matches the provided schema', async () => {
    req.body = {
      name: 'John Doe',
      age: 30,
    };

    await validateDto(schema)(req, res, next);

    expect(req.body).toEqual({
      name: 'John Doe',
      age: 30,
    });
    expect(next).toHaveBeenCalled();
  });

  it('should set the response status to 422 when the req body is invalid', async () => {
    req.body = {
      name: 'John Doe',
      age: { jijdsa: 12321 }, // Invalid type
    };

    await validateDto(schema)(req, res, next);

    expect(res.status).toHaveBeenCalledWith(422);
  });

  it('should coerce close types to the expected type', async () => {
    req.body = {
      name: 'John Doe',
      age: '30', // Coercible type
    };

    await validateDto(schema)(req, res, next);

    expect(req.body).toEqual({
      name: 'John Doe',
      age: 30, // Coerced to number
    });

  });

  it("should call next with an error when the req body is invalid", async () => {
    req.body = {
      name: 'John Doe',
      age: { jijdsa: 12321 }, // Invalid type
    };

    await validateDto(schema)(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it("should pass control to the next middleware when the req body is valid", async () => {
    req.body = {
      name: 'John Doe',
      age: 30,
    };

    await validateDto(schema)(req, res, next);

    expect(next).toHaveBeenCalled();
  });

});
