import { DomainError } from './errors/domain.error';

export type IdType = string | number;

export class EntityId<IdT extends IdType = string> {
  private readonly id: IdT;

  constructor(id: IdT) {
    this.validate(id);

    this.id = id;
  }

  get value(): IdT {
    return this.id;
  }

  equals(another: EntityId<IdT>): boolean {
    if (!another) {
      return false;
    }

    return this.id === another.id;
  }

  private validate(id: IdT): void {
    if (id == null) {
      throw new DomainError('Identifier must be provided');
    }
  }
}
