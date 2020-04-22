import { PropExt } from "./prop.decorator";

import { IQuestion, IBehaviors, IPositioning, IValidators, IEvents, IIcons } from "./question.interface";


export class Question<T> implements IQuestion<T>, IBehaviors, IPositioning, IValidators, IEvents, IIcons {

  $$data: any = {};

  readonly $$id: string = `Q${Date.now()}`;
  readonly $$template: string;
  readonly $$userData: any;

  label: string;
  
  @PropExt<T>(null) value: T;

  constructor(data: any) {
    this.$$userData = data;
  }

  // interactive icons
  info: string;
  alert: string;

  // behaviors
  required: string | boolean;
  disabled: string | boolean;
  readonly: string | boolean;
  locked: string | boolean;
  ignore: string | boolean;
  hidden: string | boolean;

  // position
  group: string | number;
  order: number;
  size: number;
  break: string;
  offset: number;

  // validators
  validators: Function[];
  crossValidators: Function[];

  // events
  onChange: Function[];
  onFocus: Function[];
  onBlur: Function[];
  onMouseOver: Function[];
}
