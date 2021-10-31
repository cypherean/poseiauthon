import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';

class Cam extends Component {
  state = {
    barcodes: [],
  };

  barcodeRecognized = ({barcodes}) => {
    barcodes.forEach(barcode => console.log(barcode.data));
    this.setState({barcodes});
  };

  renderBarcodes = () => (
    <View>{this.state.barcodes.map(this.renderBarcode)}</View>
  );

  renderBarcode = ({data}) =>
    Alert.alert(
      'Scanned Data',
      data,
      [
        {
          text: 'Okay',
          onPress: () => console.log('Okay Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // ye line daalte hi app crash kr hi hai, idky
          // onGoogleVisionBarcodesDetected={this.barcodeRecognized}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  // add the following
  scanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Cam;
