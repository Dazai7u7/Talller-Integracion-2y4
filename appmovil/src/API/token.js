import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para verificar si el token está guardado
export const checkToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      // El token existe en AsyncStorage, puedes usarlo
      console.log('Token encontrado:', token);
      // Aquí puedes realizar acciones con el token, como enviarlo en las solicitudes a la API, etc.
    } else {
      // No se encontró un token en AsyncStorage
      console.log('No se encontró un token.');
      // Puedes manejar esta situación según tus necesidades, por ejemplo, redirigir al usuario al inicio de sesión.
    }
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir al acceder a AsyncStorage
    console.error('Error al acceder a AsyncStorage:', error);
  }
};

