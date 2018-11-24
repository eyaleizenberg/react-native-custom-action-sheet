import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import Button from "./button";
import FadeInView from "./fade_in_view";

const ActionModal = ({ modalVisible, backgroundColor, buttonText, children, onCancel, cancelButton }) => (
  <FadeInView visible={modalVisible} backgroundColor={backgroundColor}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onCancel}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.container} onPress={onCancel}></TouchableOpacity>
        {children}
        {cancelButton && <Button onPress={onCancel} text={buttonText || "Cancel"} />}
      </View>
    </Modal>
  </FadeInView>
);

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end"
  }
});

export default ActionModal;
