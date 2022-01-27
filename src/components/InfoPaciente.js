import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {formatearFecha} from '../helpers';

const InfoPaciente = ({paciente, setModalPaciente, setPaciente}) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Información <Text style={styles.titulo}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}>
          <Text style={styles.btnCerrarTexto}>Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha de alta:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfoPaciente;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F59E0B',
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
  btnCerrar: {
    marginTop: 30,
    marginBottom: 30,
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
  },
  contenido: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
  valor: {
    fontWeight: '700',
    fontSize: 22,
    color: '#334155',
  },
});
