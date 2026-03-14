import { useMemo } from 'react';
import styles from './Style';

export type ThemeStyles = {
  screen: typeof styles.screenDark;
  text: typeof styles.textDark;
  itemCard: typeof styles.itemCardDark;
  iconColor: string;
};

const useThemeStyles = (darkMode: boolean): ThemeStyles => {
  return useMemo<ThemeStyles>(() => {
    if (darkMode) {
      return {
        screen: styles.screenDark,
        text: styles.textDark,
        itemCard: styles.itemCardDark,
        iconColor: '#fff',
      };
    }

    return {
      screen: styles.screenLight,
      text: styles.textLight,
      itemCard: styles.itemCardLight,
      iconColor: '#000',
    };
  }, [darkMode]);
};

export default useThemeStyles;
