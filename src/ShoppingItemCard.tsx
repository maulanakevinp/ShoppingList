import FontAwesomeFreeSolid from '@react-native-vector-icons/fontawesome-free-solid';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './Style';
import type { ThemeStyles } from './useThemeStyles';
import { Item } from './types';
import { formatCurrencyIDR } from './utils/currency';
import { formatNumberID } from './utils/number';

type ShoppingItemCardProps = {
  item: Item;
  theme: ThemeStyles;
  onItemNameChange: (itemId: number, name: string) => void;
  onItemPriceChange: (itemId: number, value: string) => void;
  onItemQuantityDecrease: (itemId: number) => void;
  onItemQuantityIncrease: (itemId: number) => void;
};

const ShoppingItemCard = ({
  item,
  theme,
  onItemNameChange,
  onItemPriceChange,
  onItemQuantityDecrease,
  onItemQuantityIncrease,
}: ShoppingItemCardProps) => {
  return (
    <View style={[styles.itemCard, theme.itemCard]}>
      <TextInput
        value={item.name}
        style={[styles.itemNameInput, theme.text]}
        onChangeText={(text: string) => onItemNameChange(item.id, text)}
      />
      <View style={styles.itemRow}>
        <View style={styles.itemControlRow}>
          <TextInput
            value={formatNumberID(item.price)}
            onChangeText={(value: string) => onItemPriceChange(item.id, value)}
            style={[styles.priceInput, theme.text]}
          />
          <FontAwesomeFreeSolid name="xmark" size={12} color={theme.iconColor} />
          <TouchableOpacity
            onPress={() => onItemQuantityDecrease(item.id)}
            style={styles.quantityButton}
          >
            <FontAwesomeFreeSolid name="minus" size={8} color={`#fff`} />
          </TouchableOpacity>
          <Text style={[styles.quantityText, theme.text]}>
            {item.quantity}
          </Text>
          <TouchableOpacity
            onPress={() => onItemQuantityIncrease(item.id)}
            style={styles.quantityButton}
          >
            <FontAwesomeFreeSolid name="plus" size={8} color={`#fff`} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.itemTotal, theme.text]}>
          {formatCurrencyIDR(item.price * item.quantity)}
        </Text>
      </View>
    </View>
  );
};

export default ShoppingItemCard;
