import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const initialValues = {
  paciente: '',
  propietario: '',
  email: '',
  telefono: '',
  sintomas: '',
  fecha: new Date(),
};

const Formulario = ({isOpen, setModalVisible, setPacientes}) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleCita = () => {
    // validar
    if (
      [
        formValues.paciente,
        formValues.propietario,
        formValues.email,
        formValues.telefono,
        formValues.sintomas,
      ].includes('')
    ) {
      console.log('Hay Errores');
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    setPacientes(prev => [...prev, {...formValues, id: Date.now()}]);
    setFormValues(initialValues);
    setModalVisible(false);
  };

  return (
    <Modal animationType="fade" visible={isOpen}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text>Cita</Text>
          </Text>

          <Pressable
            onPress={() => setModalVisible(!isOpen)}
            style={styles.btnCancelar}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={formValues.paciente}
              onChangeText={text =>
                setFormValues({...formValues, paciente: text})
              }
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={formValues.propietario}
              onChangeText={text =>
                setFormValues({...formValues, propietario: text})
              }
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              value={formValues.email}
              onChangeText={text => setFormValues({...formValues, email: text})}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.input}
              placeholder="Teléfono Propietario"
              placeholderTextColor={'#666'}
              value={formValues.telefono}
              onChangeText={text =>
                setFormValues({...formValues, telefono: text})
              }
              maxLength={10}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                date={formValues.fecha}
                onDateChange={fecha => setFormValues({...formValues, fecha})}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Sintomas"
              placeholderTextColor={'#666'}
              value={formValues.sintomas}
              onChangeText={text =>
                setFormValues({...formValues, sintomas: text})
              }
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <Pressable onPress={handleCita} style={styles.btnNuevaCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
    marginBottom: 20,
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    marginTop: 30,
    marginBottom: 30,
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
  },
  campo: {
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: '#fff',
    borcderRadius: 10,
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#f59e0b',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    color: '#5827A4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
