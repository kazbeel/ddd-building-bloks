import { DomainError } from './errors/domain.error';

export abstract class Identifier<T> {
  readonly value: T;

  constructor(value: T) {
    if (value == null) {
      throw new DomainError('Identifier must be provided');
    }

    this.value = value;
  }

  equals(other: Identifier<T>): boolean {
    if (other == null) {
      return false;
    }

    if (this === other) {
      return true;
    }

    if (!isIdentifier(other)) {
      return false;
    }

    return this.value == other.value;
  }
}

const isIdentifier = (obj: any): obj is Identifier<any> => {
  return obj instanceof Identifier;
};
