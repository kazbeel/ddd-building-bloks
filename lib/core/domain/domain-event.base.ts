import { UUID, randomUUID } from 'node:crypto';
import { EntityId } from './entity-id';

export abstract class DomainEvent {
  readonly id: UUID;
  readonly occurredOn: Date;

  constructor() {
    this.id = randomUUID();
    this.occurredOn = new Date();
  }

  abstract getAggregateId(): EntityId;
}
