import { DomainEvent } from './domain-event.base';
import { IdType } from './entity-id';
import { Entity } from './entity.base';

export abstract class AggregateRoot<IdT extends IdType> extends Entity<IdT> {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  clearDomainEvents(): void {
    this._domainEvents = [];
  }
}
