'use strict';

var React = require('react');
var ReactNative = require('react-native');
var { Animated, Dimensions, StyleSheet, View } = ReactNative;
var window = Dimensions.get('window');

var FadeInView = React.createClass({
  getInitialState: function() {
    return {
      fadeAnim: new Animated.Value(0)
    };
  },

  componentDidMount() {
    this._animate(this.props);
  },

  componentWillReceiveProps: function(newProps) {
    this._animate(newProps);
  },

  _animate(newProps){
    return Animated.timing(this.state.fadeAnim, {
      toValue: newProps.visible ? 0.7 : 0,
      duration: 300
    }).start();
  },
  
  render: function() {
    return (
      <Animated.View style={[styles.overlay,
          {opacity: this.state.fadeAnim},
          {backgroundColor: this.props.backgroundColor || 'black' }
        ]}>
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
    position: 'absolute'
  }
});

module.exports = FadeInView;
