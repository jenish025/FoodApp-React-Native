import { store } from "./src/redux/stores";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
