import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import Formulario from './src/components/Formulario';
import InfoPaciente from './src/components/InfoPaciente';
import Paciente from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPaciente, setModalPaciente] = useState(false);

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEditar[0]);
  };

  const pacienteEliminar = id => {
    Alert.alert('Eliminar', '¿Estás seguro?', [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Eliminar',
        onPress: () => {
          console.log('eliminando');
          const pacientesActualizados = pacientes.filter(
            pacienteState => pacienteState.id !== id,
          );

          setPacientes(pacientesActualizados);
        },
      },
    ]);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

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
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
                setPaciente={setPaciente}
              />
            );
          }}
        />
      )}

      {modalVisible && (
        <Formulario
          isOpen={modalVisible}
          cerrarModal={cerrarModal}
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}

      <Modal visible={modalPaciente} animationType="fade">
        <InfoPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>
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
