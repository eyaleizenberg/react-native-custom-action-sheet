'use strict';

var React = require('react-native');
var Button = require('./button');
var FadeInView = require('./fade_in_view');
var window = require('Dimensions').get('window');
var { Animated, Modal, StyleSheet, TouchableOpacity, View} = React;

var ActionModal = React.createClass({
  render: function() {
    return (
      <FadeInView visible={this.props.modalVisible}>
        <Modal
          animated={true}
          transparent={true}
          visible={this.props.modalVisible}>
          <View style={styles.modalContainer}>
            {this.props.children}
            <Button onPress={this.props.onCancel} text={"Cancel"} />
          </View>
        </Modal>
      </FadeInView>
    );
  }
});

var styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "flex-end"
  }
});

module.exports = ActionModal;
