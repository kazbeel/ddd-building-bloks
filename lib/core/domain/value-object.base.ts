import { deepStrictEqual } from 'node:assert';
import { BusinessRule } from './business-rule.interface';
import { BusinessRuleError } from './errors/business-rule.error';
import { DomainError } from './errors/domain.error';

export abstract class ValueObject<T> {
  private readonly _props: T;

  constructor(props: T) {
    if (props == null) {
      throw new DomainError('Value properties must be provided');
    }

    this._props = Object.freeze({ ...props });
  }

  get props(): T {
    return this._props;
  }

  protected static checkRule(rule: BusinessRule): void {
    if (rule.isBroken()) {
      throw new BusinessRuleError(rule);
    }
  }

  equals(other: ValueObject<T>): boolean {
    if (other == null) {
      return false;
    }

    if (this === other) {
      return true;
    }

    if (!isValueObject(other)) {
      return false;
    }

    try {
      deepStrictEqual(other.props, this.props);
    } catch (error) {
      return false;
    }

    return true;
  }
}

const isValueObject = (obj: any): obj is ValueObject<any> => {
  return obj instanceof ValueObject;
};
