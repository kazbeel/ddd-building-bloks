import { Identifier } from './identifier.base';

export class EntityId extends Identifier<number | string> {
  constructor(id: number) {
    super(id);
  }
}
