import { hello } from "../idk";

describe("hello()", () => {
  it("should output Yeah", () => {
    expect(hello()).toEqual("Yeah");
  });
});
