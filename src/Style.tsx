import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenDark: {
    backgroundColor: '#333',
  },
  screenLight: {
    backgroundColor: '#f5f5f5',
  },
  container: {
    paddingHorizontal: 20,
    gap: 10,
    paddingBottom: 150,
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDark: {
    color: '#fff',
  },
  textLight: {
    color: '#000',
  },
  itemCard: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemCardDark: {
    backgroundColor: '#444',
  },
  itemCardLight: {
    backgroundColor: '#fff',
  },
  itemNameInput: {
    fontSize: 13,
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  priceInput: {
    padding: 0,
  },
  quantityButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 100,
  },
  quantityText: {
    minWidth: 16,
    textAlign: 'center',
  },
  itemTotal: {
    textAlign: 'right',
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
    marginHorizontal: 20,
  },
  themeToggleButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 100,
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
  addItemButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 17,
    paddingVertical: 15,
    borderRadius: 100,
    margin: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default styles;