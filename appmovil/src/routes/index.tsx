import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Welcome } from "../pages/Welcome";
import { SignIn } from "../pages/SignIn";
import { Login } from "../pages/Login";
import { BudgetPlanner } from "../pages/BudgetPlanner";
import {ExpenseTracker} from "../pages/ExpenseTracker";
import { FinancialAnalysis } from "../pages/FinancialAnalysis";
import { Home} from "../pages/home"
import { ProductsListScreen } from '../pages/ProductsListScreen'

const Stack = createNativeStackNavigator();
type StackNavigation = {
  Welcome: undefined;
  SignIn: undefined;
  Login: undefined;
  BudgetPlanner: undefined;
  ExpenseTracker: undefined;
  FinancialAnalysis: undefined;
  ProductsListScreen:undefined;
  home: undefined;
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExpenseTracker"
        component={ExpenseTracker}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BudgetPlanner"
        component={BudgetPlanner}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinancialAnalysis"
        component={FinancialAnalysis}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductsListScreen"
        component={ProductsListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
