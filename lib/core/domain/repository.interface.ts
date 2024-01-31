import { EntityId } from './entity-id';

export interface Repository<T> {
  generateId(): Promise<EntityId>;

  save(entity: T): Promise<T>;
}
