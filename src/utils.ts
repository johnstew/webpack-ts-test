/* Type Playground */
export type SuccessResponse<T = object> = {
  [P in keyof T]?: T[P];
} & { status: "OK" };

export function isSuccess(resp: SuccessResponse): resp is SuccessResponse {
  return (resp as SuccessResponse).status === "OK";
}

export function hello<T, X = void, Y = void>(a: T, b?: X, c?: Y): T | X | Y {
  return a;
}

export class Drawer<ClothingType> {
  contents: ClothingType[] = [];

  add(object: ClothingType) {
    this.contents.push(object);
  }

  remove() {
    return this.contents.pop();
  }
}

export interface Sock {
  color: string;
}

export interface TShirt {
  size: "s" | "m" | "l";
}

/* End Type Playground */

export default () => {
  const greatSuccess = isSuccess({ status: "OK" });
  console.log(greatSuccess);

  const exampleHello = hello<string>("hello");
  console.log(exampleHello);
};
