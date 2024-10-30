import { Entity } from '../domain/entity.base';

export interface Specification<EntityType extends Entity<any>> {
  isSatisfiedBy(entity: EntityType): Promise<boolean>;
}
