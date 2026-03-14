import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import styles from './Style';
import useThemeStyles from './useThemeStyles';
import ShoppingItemCard from './ShoppingItemCard';
import FloatingActions from './FloatingActions';
import { Item } from './types';
import { formatCurrencyIDR } from './utils/currency';
import { parseNumberInput } from './utils/number';
import { parseStoredItems } from './utils/storage';
import { STORAGE_KEYS } from './constants/storageKeys';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [items, setItems] = useState<Item[]>([]);

  const theme = useThemeStyles(darkMode);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEYS.ITEMS).then(storedItems => {
      setItems(parseStoredItems(storedItems));
    });
    AsyncStorage.getItem(STORAGE_KEYS.DARK_MODE).then(storedDarkMode => {
      if (storedDarkMode) {
        setDarkMode(storedDarkMode === 'true');
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.DARK_MODE, darkMode.toString());
  }, [darkMode]);

  const updateItem = (itemId: number, updater: (item: Item) => Item) => {
    setItems(currentItems => currentItems.map(item => (
      item.id === itemId ? updater(item) : item
    )));
  };

  const handleItemNameChange = (itemId: number, name: string) => {
    updateItem(itemId, item => ({ ...item, name }));
  };

  const handleItemPriceChange = (itemId: number, value: string) => {
    updateItem(itemId, item => ({
      ...item,
      price: parseNumberInput(value),
    }));
  };

  const handleItemQuantityDecrease = (itemId: number) => {
    setItems(currentItems => {
      const selectedItem = currentItems.find(item => item.id === itemId);

      if (!selectedItem) {
        return currentItems;
      }

      if (selectedItem.quantity === 1) {
        return currentItems.filter(item => item.id !== itemId);
      }

      return currentItems.map(item => (
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    });
  };

  const handleItemQuantityIncrease = (itemId: number) => {
    updateItem(itemId, item => ({ ...item, quantity: item.quantity + 1 }));
  };

  const handleAddItem = () => {
    setItems(currentItems => [
      ...currentItems,
      { id: Date.now(), name: 'item', price: 0, quantity: 1 },
    ]);
  };

  const handleThemeToggle = () => {
    setDarkMode(currentMode => !currentMode);
  };

  const total = items.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);

  return (
    <View
      style={[styles.screen, theme.screen]}  
    >
      <Text
        style={[styles.title, theme.text]}
      >
        Kalkulator Daftar Belanja
      </Text>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        {items.length > 0 && items.map(item => (
          <ShoppingItemCard
            key={item.id}
            item={item}
            theme={theme}
            onItemNameChange={handleItemNameChange}
            onItemPriceChange={handleItemPriceChange}
            onItemQuantityDecrease={handleItemQuantityDecrease}
            onItemQuantityIncrease={handleItemQuantityIncrease}
          />
        ))}
        <Text
          style={[styles.grandTotal, theme.text]}
        >
          Total: {formatCurrencyIDR(total)}
        </Text>
      </ScrollView>
      <FloatingActions
        darkMode={darkMode}
        onToggleTheme={handleThemeToggle}
        onAddItem={handleAddItem}
      />
    </View>
  );
};
export default App;