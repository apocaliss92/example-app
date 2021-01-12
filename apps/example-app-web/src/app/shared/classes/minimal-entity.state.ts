import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export type SortDirection = 'ASC' | 'DESC';

export interface SortField<T> {
  field: keyof T;
  direction?: SortDirection;
}

export const selectEntityId = <T>(entity: T, idKey: keyof T & string) =>
  typeof entity[idKey] === 'string' || typeof entity[idKey] === 'number'
    ? ((entity[idKey] as unknown) as string)
    : null;

export function sortEntity<T>(a: T, b: T, sortFields: SortField<T>[]): number {
  let result = 0;
  for (const sortField of sortFields) {
    if (typeof a[sortField.field] === 'string' || typeof a[sortField.field] === 'number') {
      const aStringField = String(a[sortField.field]);
      const bStringField = String(b[sortField.field]);
      const comparison = aStringField.localeCompare(bStringField);
      if (!!comparison) {
        result = sortField.direction === 'ASC' ? comparison : -Math.abs(comparison);
        break;
      }
    }
  }
  return result;
}

export const createEntityAdapterFactory = <T>(idKey: keyof T & string, sortFields?: SortField<T>[]): EntityAdapter<T> =>
  createEntityAdapter<T>({
    selectId: (entity: T) => selectEntityId<T>(entity, idKey),
    sortComparer: !!sortFields ? (a: T, b: T) => sortEntity<T>(a, b, sortFields) : false
  });
