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
import { Administrar_gastos } from "../pages/Administrar_gastos";
import { Administrar_presupuesto } from "../pages/Administrar_presupuesto";
import { Actualizar_gastos } from "../pages/Actualizar_gastos";
import { Editar_gasto } from "../pages/Editar_gastos";
import {Editar_presupuesto} from "../pages/Editar_presupuesto"
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
  Administrar_gastos:undefined;
  Administrar_presupuesto:undefined;
  Actualizar_gastos:undefined;
  Editar_gasto:undefined;
  Editar_presupuesto:undefined;
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
      <Stack.Screen
        name="Administrar_gastos"
        component={Administrar_gastos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Administrar_presupuesto"
        component={Administrar_presupuesto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Actualizar_gastos"
        component={Actualizar_gastos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Editar_gasto"
        component={Editar_gasto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Editar_presupuesto"
        component={Editar_presupuesto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
