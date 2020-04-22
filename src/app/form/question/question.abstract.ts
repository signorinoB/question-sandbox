import { PropExt } from "./prop.decorator";

import { IQuestion } from "./question.interface";
import { IBehaviors } from "./question.interface";
import { IPositioning } from "./question.interface";
import { IValidators } from "./question.interface";
import { IListeners } from "./question.interface";


abstract class Question<T> implements IQuestion<T>, IBehaviors, IPositioning, IValidators, IListeners {
  readonly template: string;
  readonly id: string = `Q${Date.now()}`;
  readonly data: any;
  label: string;
  value: T;
  constructor(data: any) {
    this.data = data;
  }
}
