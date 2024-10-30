export interface EntityMapper<EntityType> {
  toDomain(dbModel: any): EntityType;

  toPersistence(entity: EntityType): { [key in keyof EntityType]: any };
}
