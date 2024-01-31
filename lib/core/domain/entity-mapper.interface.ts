export interface EntityMapper<T> {
  toDomain(dbModel: any): T;

  toPersistence(entity: T): { [key in keyof T]: any };
}
