import { isSuccess, hello } from "../utils";

describe("isSuccess()", () => {
  it("should return OK status", () => {
    const greatSuccess = isSuccess({ status: "OK" });
    expect(greatSuccess).toEqual(true);
  });
});

describe("hello()", () => {
  it("should return a", () => {
    expect(hello("a")).toEqual("a");
  });
});
