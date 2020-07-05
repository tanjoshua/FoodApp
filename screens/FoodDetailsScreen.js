import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummydata";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FoodDetailsScreen = (props) => {
  const foodId = props.navigation.getParam("mealId");
  const selectedFood = MEALS.find((meal) => meal.id === foodId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedFood.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedFood.duration} minutes</Text>
        <Text>{selectedFood.complexity}</Text>
        <Text>{selectedFood.affordability}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedFood.ingredients.map((ingredient) => (
        <View style={styles.listItem} key={ingredient}>
          <Text>{ingredient}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedFood.steps.map((step) => (
        <View style={styles.listItem} key={step}>
          <Text>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

// set header title
FoodDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: "100%",
  },
  details: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  listItem: {
    marginLeft: 10,
  },
});

export default FoodDetailsScreen;
