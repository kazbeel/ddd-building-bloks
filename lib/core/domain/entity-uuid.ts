import { randomUUID, UUID } from 'node:crypto';
import { EntityId } from './entity-id';

export class EntityUuid extends EntityId<UUID> {
  constructor(uuid: UUID = randomUUID()) {
    super(uuid);
  }
}
