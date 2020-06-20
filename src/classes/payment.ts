import { HasFormatters } from "../interfaces/HasFormatter";

export class Payment implements HasFormatters {
  recipient: string;
  details: string;
  amount: number;

  constructor(a: string, b: string, c: number) {
    this.recipient = a;
    this.details = b;
    this.amount = c;
  }
  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
