'use strict';

var React = require('react-native');
var Button = require('./button');
var FadeInView = require('./fade_in_view');
var { Modal, StyleSheet, TouchableOpacity, View} = React;

var ActionModal = React.createClass({
  getInitialState: function() {
    return {
      modalVisible: this.props.modalVisible
    };
  },

  _setModalVisible: function(visible) {
    this.setState({modalVisible: visible});
  },

  render: function() {
    return (
      <FadeInView visible={this.state.modalVisible} backgroundColor={this.props.backgroundColor}>
        <Modal
          animated={true}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={function() {this._setModalVisible(false);}}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.container} onPress={this.props.onCancel}></TouchableOpacity>
            {this.props.children}
            <Button onPress={this.props.onCancel} text={this.props.buttonText || "Cancel"} />
          </View>
        </Modal>
      </FadeInView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
    justifyContent: "flex-end"
  }
});

module.exports = ActionModal;
