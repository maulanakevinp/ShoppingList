import FontAwesomeFreeSolid from '@react-native-vector-icons/fontawesome-free-solid';
import { TouchableOpacity } from 'react-native';
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
  return (
    <>
      <TouchableOpacity
        style={styles.themeToggleButton}
        onPress={onToggleTheme}
      >
        <FontAwesomeFreeSolid name={darkMode ? 'sun' : 'moon'} size={15} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addItemButton}
        onPress={onAddItem}
      >
        <FontAwesomeFreeSolid name="plus" size={15} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

export default FloatingActions;
