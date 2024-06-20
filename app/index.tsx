import React from "react";
import { View, Text } from "react-native";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

const Welcome = () => {

  const [value, setValue] = React.useState('');

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <View className="h-full items-center justify-center bg-secondary">
      <Input
        className="w-full"
        placeholder='Write some stuff...'
        value={value}
        onChangeText={onChangeText}
        aria-labelledbyledBy='inputLabel'
        aria-errormessage='inputError'
      />
    </View>
  );
};

export default Welcome;
