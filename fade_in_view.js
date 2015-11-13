'use strict';

var React = require('react-native');
var window = React.Dimensions.get('window');
var { Animated, StyleSheet, View} = React;

var FadeInView = React.createClass({
  getInitialState: function() {
    return {
      fadeAnim: new Animated.Value(0)
    };
  },

  componentWillReceiveProps: function(newProps) {
    return Animated.timing(this.state.fadeAnim, {
      toValue: newProps.visible ? 0.7 : 0,
      duration: 300
    }).start();
  },

  render: function() {
    return (
      <Animated.View style={[styles.overlay, {opacity: this.state.fadeAnim}]}>
        {this.props.children}
      </Animated.View>
    );
  }
});

var styles = StyleSheet.create({
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: window.height,
    width: window.width,
    backgroundColor: 'black',
    position: 'absolute'
  }
});

module.exports = FadeInView;
