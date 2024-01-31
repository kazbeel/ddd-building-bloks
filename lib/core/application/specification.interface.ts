import { Entity } from '../domain/entity.base';

export interface Specification<T extends Entity<any>> {
  isSatisfiedBy(entity: T): Promise<boolean> | boolean;
}
