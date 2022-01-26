import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [pacientes, setPacientes] = useState([]);
  console.log('**********', pacientes);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Paciente item={item} />;
          }}
        />
      )}

      <Formulario
        isOpen={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 50,
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
