import { Image, StyleSheet } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreens from "./src/screens/HomeScreens";
import { store } from "./src/redux/stores";
import { Provider } from "react-redux";
import OffersScreens from "./src/screens/OffersScreens";
import CartScreens from "./src/screens/CartScreens";
import AccountScreens from "./src/screens/AccountScreens";
import FoodeDetailedScreen from "./src/screens/FoodeDetailedScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
// import SearchBar from "./src/Componets/SearchBar";

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator(
      {
        Landing: LandingScreen,
      },

      {
        defaultNavigationOptions: {
          headerShown: false,
        },
      }
    ),
  },
  homeStack: createBottomTabNavigator({
    home: {
      screen: createStackNavigator(
        {
          HomePage: HomeScreens,
          FoodDetaildePage: FoodeDetailedScreen,
          RestaurantPage: RestaurantScreen,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./assets/images/home_icon.png")
              : require("./assets/images/home_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Offers: {
      screen: createStackNavigator({
        HomePage: OffersScreens,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./assets/images/offer_icon.png")
              : require("./assets/images/offer_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Cart: {
      screen: createStackNavigator({
        HomePage: CartScreens,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./assets/images/cart_icon.png")
              : require("./assets/images/cart_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Account: {
      screen: createStackNavigator({
        HomePage: AccountScreens,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./assets/images/account_icon.png")
              : require("./assets/images/account_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
  }),
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

// export default function App() {
//   return (
//     // <Provider store={store}>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="LandingScreen"
//           component={LandingScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="homeStack"
//           component={tabScreenNavigation}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//     // </Provider>
//   );
// }

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
