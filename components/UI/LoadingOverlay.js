import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const LoadingOverlay = () => {
  return (
    <View>
      <ActivityIndicator size='large' color='black' />
    </View>
  );
};

export default LoadingOverlay;
