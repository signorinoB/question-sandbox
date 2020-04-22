
interface ISplit {
  readonly raw: string;
  readonly parsed: string[];
}

class Split implements ISplit {
  readonly parsed: string[];
  constructor(public readonly raw: string) {
    this.parsed = isSplittable(raw) ? raw.split('|') : [];
  }
}

function isSplittable(o: any): boolean {
  return typeof o === 'string' && /^([a-z0-1]+(\|[a-z0-1])*)$/gi.test(o);
}


