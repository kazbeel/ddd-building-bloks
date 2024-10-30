import { BusinessRule } from './business-rule.interface';
import { EntityId, IdType } from './entity-id';
import { BusinessRuleError } from './errors/business-rule.error';
import { DomainError } from './errors/domain.error';

export abstract class Entity<IdT extends IdType> {
  readonly id: EntityId<IdT>;

  readonly props: IdT;

  protected constructor(id: EntityId<IdT>, props: IdT) {
    if (id == null) {
      throw new DomainError('Entity ID must be provided');
    }

    if (props == null) {
      throw new DomainError('Entity properties must be provided');
    }

    this.id = id;
    this.props = props;
  }

  checkRule(rule: BusinessRule): void {
    if (rule.isBroken()) {
      throw new BusinessRuleError(rule);
    }
  }

  equals(another: Entity<IdT>): boolean {
    if (!another) {
      return false;
    }

    if (this === another) {
      return true;
    }

    return this.id.equals(another.id);
  }
}
