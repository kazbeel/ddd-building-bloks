import { BusinessRule } from './business-rule.interface';
import { EntityId } from './entity-id';
import { BusinessRuleError } from './errors/business-rule.error';
import { DomainError } from './errors/domain.error';

export abstract class Entity<T> {
  private readonly _id: EntityId;
  private readonly _props: T;

  constructor(id: EntityId, props: T) {
    if (id == null) {
      throw new DomainError('Entity ID must be provided');
    }

    if (props == null) {
      throw new DomainError('Entity properties must be provided');
    }

    this._id = id;
    this._props = props;
  }

  get id(): EntityId {
    return this._id;
  }

  get props(): T {
    return this._props;
  }

  checkRule(rule: BusinessRule): void {
    if (rule.isBroken()) {
      throw new BusinessRuleError(rule);
    }
  }

  equals(other: Entity<T>): boolean {
    if (other == null) {
      return false;
    }

    if (this === other) {
      return true;
    }

    if (!isEntity(other)) {
      return false;
    }

    return this._id.equals(other._id);
  }
}

const isEntity = (obj: any): obj is Entity<any> => {
  return obj instanceof Entity;
};
