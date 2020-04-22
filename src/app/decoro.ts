import { Stringy, Numy, Evaluable, Props } from "./form/question/prop.decorator";

export class Decoro {

  //@Props props: any;
  public static $$data: any = {};
  
  @Evaluable() dodos: string|boolean;
  @Numy(10) cats: number;
  //@Numy(8) pigs: number;
  //@Stringy('no bats!') bats: string;

  get isHidden() {
    return !this.dodos;
  }

  constructor() {
    this.cats = 9999;

  }
}
