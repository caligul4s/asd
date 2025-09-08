import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }} // Puedes cambiar la URL
        style={styles.profileImage}
      />

      {/* Nombre */}
      <Text style={styles.name}>Miranda Victoria</Text>

      {/* Info */}
      <Text style={styles.info}>Amante de la tecnología y los gatitos 🐱✨</Text>

      {/* Botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonFollow}>
          <Text style={styles.buttonText}>Seguir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonMessage}>
          <Text style={styles.buttonText}>Mensajes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // círculo perfecto
    marginBottom: 15
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  info: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10
  },
  buttonFollow: {
    backgroundColor: '#0095f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonMessage: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});