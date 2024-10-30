import { deepStrictEqual } from 'node:assert';
import { BusinessRule } from './business-rule.interface';
import { BusinessRuleError } from './errors/business-rule.error';
import { DomainError } from './errors/domain.error';

export abstract class ValueObject<T> {
  readonly props: T;

  constructor(props: T) {
    if (props == null) {
      throw new DomainError('Value properties must be provided');
    }

    this.props = Object.freeze({ ...props });
  }

  protected static checkRule(rule: BusinessRule): void {
    if (rule.isBroken()) {
      throw new BusinessRuleError(rule);
    }
  }

  equals(another: ValueObject<T>): boolean {
    if (!another) {
      return false;
    }

    if (this === another) {
      return true;
    }

    try {
      deepStrictEqual(another.props, this.props);
    } catch (error) {
      return false;
    }

    return true;
  }
}
