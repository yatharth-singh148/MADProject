import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const cartItems = [
  { id: "1", name: "Lassi", price: 60, image: require("./assets/food2.png"), quantity: 1 },
  { id: "2", name: "Royal Milk Tea", price: 80, image: require("./assets/food6.png"), quantity: 1 },
];

export default function CartScreen() {
  const navigation = useNavigation();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <View style={{ flex: 1, backgroundColor: "#272D38", padding: 20 }}>
      {/* Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 10 }}>
        <Text style={{ color: "#1C52F4", fontSize: 18 }}>{"< Payment"}</Text>
      </TouchableOpacity>
      
      {/* Cart Details */}
      <View style={{ backgroundColor: "#333", padding: 15, borderRadius: 10, marginBottom: 10 }}>
        <Text style={{ color: "#fff", fontSize: 16 }}>CANTEEN</Text>
        <Text style={{ color: "gray" }}>Add shipping address</Text>
      </View>
      <View style={{ backgroundColor: "#333", padding: 15, borderRadius: 10, marginBottom: 10 }}>
        <Text style={{ color: "#fff", fontSize: 16 }}>RECEIVE ORDER</Text>
        <Text style={{ color: "gray" }}>Self-service Pickup</Text>
      </View>
      <View style={{ backgroundColor: "#333", padding: 15, borderRadius: 10, marginBottom: 10 }}>
        <Text style={{ color: "#fff", fontSize: 16 }}>PAYMENT</Text>
        <Text style={{ color: "gray" }}>UPI</Text>
      </View>
      
      {/* Cart Items */}
      <Text style={{ color: "#fff", fontSize: 18, marginVertical: 10 }}>Items</Text>
      <ScrollView>
        {cartItems.map((item) => (
          <View key={item.id} style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <Image source={item.image} style={{ width: 60, height: 60, borderRadius: 10, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#fff" }}>{item.name}</Text>
              <Text style={{ color: "gray" }}>Brand</Text>
              <Text style={{ color: "gray" }}>Veg/Non-Veg</Text>
              <Text style={{ color: "gray" }}>Quantity: {item.quantity}</Text>
            </View>
            <Text style={{ color: "#1C52F4", fontSize: 16 }}>₹{item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Total Amount */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Total</Text>
        <Text style={{ color: "#1C52F4", fontSize: 18 }}>₹{total}</Text>
      </View>
      
      {/* Place Order Button */}
      <TouchableOpacity style={{ backgroundColor: "#00C853", padding: 15, borderRadius: 10, alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}
