import { isSuccess, hello, Drawer, Sock, TShirt} from "../utils";

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

describe('new Drawer()', () => {
  it('should add and remove socks', () => {
    const sockDrawer = new Drawer<Sock>();

    sockDrawer.add({ color: "white" });
    expect(sockDrawer.contents).toEqual([{ color: 'white' }]);
    const mySock = sockDrawer.remove();
    expect(sockDrawer.contents.length).toEqual(0);
  });
});
