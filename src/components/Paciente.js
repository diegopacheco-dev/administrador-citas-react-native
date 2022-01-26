import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Paciente = ({item}) => {
  const {paciente, fecha} = item;

  const formatearFecha = fecha => {
    const fechaFormateada = new Date(fecha);
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return fechaFormateada.toLocaleDateString('es-ES', opciones);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

      <View style={styles.contenedorBotones}>
        <Pressable style={[styles.btn, styles.btnEditar]}>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>

        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Paciente;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {},
  btnEditar: {},
  btnEliminar: {},
});
