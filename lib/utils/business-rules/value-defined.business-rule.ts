import { BusinessRule } from '../../core/domain/business-rule.interface';

export class ValueMustBeDefinedBusinessRule implements BusinessRule {
  constructor(private readonly value: unknown) {}

  isBroken(): boolean {
    return this.value === null || typeof this.value === 'undefined';
  }

  get message(): string {
    return 'The value is not defined (null or undefined)';
  }
}
