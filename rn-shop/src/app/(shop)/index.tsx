import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";

export default function Page() {
  return (
    <View style={styles.container}>
     
      <FlatList data={PRODUCTS} renderItem={({ item }) => (
        <ProductListItem product={item} />
        )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListHeaderComponent={ListHeader}
      contentContainerStyle={styles.flatListContent}
      columnWrapperStyle={styles.flatListColumn}
      style={{ paddingHorizontal: 10, paddingVertical: 5 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
});
