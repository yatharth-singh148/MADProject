import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const categories = [
  { id: "Meals", title: "Meals", image: require("./assets/meal.png") },
  { id: "Beverages", title: "Beverages", image: require("./assets/beverage.png") },
  { id: "Non-Veg", title: "Non-Veg", image: require("./assets/nonveg.png") },
  { id: "Snacks", title: "Snacks", image: require("./assets/snack.png") },
];

const foodData = {
  "New Vidyarthi Khana": [
    { id: "food1", name: "Paneer Gravy", price: "₹150", image: require("./assets/food1.png"), category: "Meals" },
    { id: "food2", name: "Lassi", price: "₹60", image: require("./assets/food2.png"), category: "Beverages" },
  ],
  "Vidyarthi Khana": [
    { id: "food3", name: "Cheese Pizza", price: "₹89", image: require("./assets/food3.png"), category: "Meals" },
    { id: "food4", name: "Espresso", price: "₹70", image: require("./assets/food4.png"), category: "Beverages" },
    { id: "food5", name: "Pringles Chips", price: "₹100", image: require("./assets/food7.png"), category: "Snacks" }
  ],
  "Library Café": [
    { id: "food5", name: "Shushi", price: "₹120", image: require("./assets/food5.png"), category: "Meals" },
    { id: "food6", name: "Royal Milk Tea", price: "₹80", image: require("./assets/food6.png"), category: "Beverages" },
  ],
};

const banners = [
  { name: "New Vidyarthi Khana", image: require("./assets/banner1.png") },
  { name: "Vidyarthi Khana", image: require("./assets/banner2.png") },
  { name: "Library Café", image: require("./assets/banner3.png") },
];

export default function HomeScreen() {
  const [selectedCanteen, setSelectedCanteen] = useState("New Vidyarthi Khana");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  const filteredFood = foodData[selectedCanteen].filter(
    (food) => !selectedCategory || food.category === selectedCategory
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#272D38", padding: 20 }}>
      {/* Search Bar */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 10, marginBottom: 20 }}>
        <FontAwesome name="search" size={20} color="gray" style={{ marginRight: 10 }} />
        <TextInput placeholder="Search" style={{ flex: 1, paddingVertical: 10 }} />
      </View>
      
      {/* Banner Section */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        {banners.map((banner) => (
          <TouchableOpacity key={banner.name} onPress={() => setSelectedCanteen(banner.name)}>
            <Image source={banner.image} style={{ width: 300, height: 150, borderRadius: 10, marginRight: 10 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Categories Section */}
      <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} onPress={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)} style={{ alignItems: "center", marginRight: 15 }}>
            <Image source={cat.image} style={{ width: 70, height: 70, borderRadius: 35 }} />
            <Text style={{ color: cat.id === selectedCategory ? "#1C52F4" : "#fff", marginTop: 5 }}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Food Items Section */}
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 20, marginBottom: 10 }}>{selectedCanteen} - Popular Dishes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredFood.map((food) => (
          <View key={food.id} style={{ marginRight: 15, backgroundColor: "#333", borderRadius: 10, padding: 10 }}>
            <Image source={food.image} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <Text style={{ color: "#fff", marginTop: 5 }}>{food.name}</Text>
            <Text style={{ color: "#1C52F4", fontWeight: "bold" }}>{food.price}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, backgroundColor: "#272D38", position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Feather name="home" size={24} color="#1C52F4" />
        <Feather name="search" size={24} color="#1C52F4" />
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}> 
          <Feather name="shopping-cart" size={24} color="#1C52F4" />
        </TouchableOpacity>
        <Feather name="user" size={24} color="#1C52F4" />
      </View>
    </View>
  );
}
