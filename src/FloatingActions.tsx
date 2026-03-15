import FontAwesomeFreeSolid from '@react-native-vector-icons/fontawesome-free-solid';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './Style';

type FloatingActionsProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
  onAddItem: () => void;
};

const FloatingActions = ({
  darkMode,
  onToggleTheme,
  onAddItem,
}: FloatingActionsProps) => {
  const insets = useSafeAreaInsets();
  const addButtonBottom = insets.bottom + 20;
  const themeButtonBottom = addButtonBottom + 60;

  return (
    <>
      <TouchableOpacity
        style={[styles.themeToggleButton, { bottom: themeButtonBottom }]}
        onPress={onToggleTheme}
      >
        <FontAwesomeFreeSolid name={darkMode ? 'sun' : 'moon'} size={15} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.addItemButton, { bottom: addButtonBottom }]}
        onPress={onAddItem}
      >
        <FontAwesomeFreeSolid name="plus" size={15} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

export default FloatingActions;
