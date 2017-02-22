import {NativeModules} from 'react-native';
import values from 'object.values';
values.shim();

if (NativeModules.CameraManager == null && NativeModules.CameraModule == null) {
  NativeModules.CameraModule = {
    Aspect: {},
    Type: {},
    Orientation: {},
    CaptureMode: {},
    CaptureTarget: {},
    CaptureQuality: {},
    FlashMode: {},
    TorchMode: {},
    BarCodeType: {},
  };
}

class FormData {
  _data: Map<string, mixed>;

  constructor() {
    this._data = new Map();
  }

  append(name: string, value: mixed) {
    this._data.set(name, value);
  }
}

global.FormData = FormData;
