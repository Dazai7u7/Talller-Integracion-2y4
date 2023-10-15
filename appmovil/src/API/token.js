import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para verificar si el token está guardado
export const checkToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('Token encontrado:', token);
      return(token)
    } else {
      console.log('No se encontró un token.');
      return(token)
    }
  } catch (error) {
    console.error('Error al acceder a AsyncStorage:', error);
    return(error)
  }
};

