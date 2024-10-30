import { EntityId } from './entity-id';

export interface Repository<Entity> {
  generateId(): Promise<EntityId>;

  save(entity: Entity): Promise<Entity>;
}
