import { Item } from '../types';

const isItem = (value: unknown): value is Item => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;

  return (
    typeof item.id === 'number'
    && typeof item.name === 'string'
    && typeof item.price === 'number'
    && typeof item.quantity === 'number'
  );
};

export const parseStoredItems = (value: string | null): Item[] => {
  if (!value) {
    return [];
  }

  try {
    const parsedValue: unknown = JSON.parse(value);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(isItem);
  } catch {
    return [];
  }
};
