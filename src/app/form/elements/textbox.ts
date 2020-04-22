import { Question } from "../question/question";

class Textbox extends Question<string> {
  readonly template: string = 'textbox';
  min: number;
  constructor(data: any) {
    super(data);
    this.min = data['min'] || null;
  }
}