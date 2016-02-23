## React Native custom action sheet

### What is this?
This component will fade in/out an overlay and will pop in a modal with a cancel button. You can pass any view that you want to the component and it will be shown in the modal. In the example below I am passing a date picker.

<p align="center">
    <img src ="http://i.imgur.com/Iq6YZGj.gif" />
</p>

### Installation
```npm install react-native-custom-action-sheet --save```

### Usage example

```javascript
var CustomActionSheet = require('react-native-custom-action-sheet');

var SomeComponent = React.createClass({
  render: function() {
    return (
      <View>
        <CustomActionSheet modalVisible={this.state.modalVisible} onCancel={this.toggleModal}>
          <View style={styles.datePickerContainer}>
            <DatePickerIOS mode={"date"} date={@state.dateForPicker} onDateChange={@dateChanged} />
          </View>
        </CustomActionSheet>
      </View>
    );
  }
});
```

### Component props
- `modalVisible` (Boolean) - Decide if the component should be visible or not.
- `onCancel` (Function) - Function to run when the cancel button/background has been pressed.
- `buttonText` (String) - The text of the onCancel button. Defaults to Cancel.


### Questions/Bugs/Ideas?
Feel free to open an issue on github, send suggestions, fork this repository or contact me at eyal.eizenberg@samanage.com

This package was developed during my work at [Samanage](http://www.samanage.com/).

Thanks and Enjoy! :)
