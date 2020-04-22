
export interface IQuestion<T> {
  readonly template: string;
  readonly id: string;
  readonly data: any;
  value: T;
}

export interface IBehaviors { // handling
  required: string | boolean;
  disabled: string | boolean;
  readonly: string | boolean;
  locked: string | boolean;
  ignore: string | boolean;
  hidden: string | boolean;
}

export interface IPositioning {
  group: string | number;
  order: number;
  size: number;
  break: string;
  offset: number;
}

export interface IValidators {
  validators: Function[];
  crossValidators: Function[];
}

export interface IEvents {
  onChange: Function[];
  onFocus: Function[];
  onBlur: Function[];
  onMouseOver: Function[];
}

export interface IIcons {
  info: string;
  alert: string;
}
