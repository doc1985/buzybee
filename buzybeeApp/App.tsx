import React from "react";
import { NativeBaseProvider, extendTheme, Box } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";
import JobListPage from "./src/pages/JobListPage";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/rootStackParams";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  const queryClient = new QueryClient();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="JobListPage"
              component={JobListPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
      {/* </Provider> */}
    </QueryClientProvider>
  );
}
