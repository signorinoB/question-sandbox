import { BehaviorSubject } from "rxjs";

interface IPropertyExtended<T, V> {
  value$: BehaviorSubject<T>;
  parser: (...args) => V;
  setValue: (value: T) => void;
  getValue: () => T;
}

abstract class PropertyExtended<T, V> implements IPropertyExtended<T, V> {
  parse = (...args): V => this.parser(this.getValue(), ...args);
  value$: BehaviorSubject<T> = new BehaviorSubject(undefined);
  getValue = (): T => this.value$.getValue();
  setValue = (value: T):void => this.value$.next(value);
  setDefault = (): void => this.setValue(this.defaultValue);
  constructor(
    public readonly defaultValue: T = null, 
    public readonly parser: (...args) => V) { this.setDefault(); }
}

const parseEvaluable = (value: string|boolean, data) => {
  if (typeof value === 'string' && ['true', 'false'].includes(value)) return JSON.parse(value);
  if (typeof value === 'boolean') return value;
  throw `<${value}> is not boolean!`;
};

const parseNumeric = (value: number) => value * 2.14;

const parseStringy = (value: any) => ['string', 'number'].includes(typeof value) ? value.toString().toUpperCase(): null;

class Eva extends PropertyExtended<string|boolean, boolean> {
  constructor(o: string|boolean = true) { super(o, parseEvaluable); }
}

class Num extends PropertyExtended<number, number> {
  constructor(o: number) { super(o, parseNumeric); }
}

class Str extends PropertyExtended<string, string> {
  constructor(o: string) { super(o, parseStringy); }
}

function Deco(O: any) {

  return function(target, key) {

    if (!('$$data' in target)) target.$$data = {};

    target.$$data[key] = O;

    Object.defineProperty(target, key, {
      get: function() { 
        return O.$$data[key].parse(target);
      },
      set: function(value: any) { 
        O.$$data[key].setValue(value);
      }
    });
  };
}

export function Props(target, key) {

}

export const Evaluable = (defaultValue = true) => Deco(new Eva(defaultValue));

export const Stringy = (defaultValue) => Deco(new Str(defaultValue));

export const Numy = (defaultValue) => Deco(new Num(defaultValue));
