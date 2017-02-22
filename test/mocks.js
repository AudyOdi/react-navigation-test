import EventEmitter from 'events';
import {addMock} from 'mocha-react-native';

let ImageResizer = {
  createResizedImage: (imagePath, newWidth, newHeight, compressFormat, quality, rotation = 0, outputPath) => {
    return Promise.resolve(JSON.stringify([imagePath, newWidth, newHeight, compressFormat, quality, rotation, outputPath]));
  },
};

addMock('EventEmitter', EventEmitter);
addMock('react-native-image-resizer', ImageResizer);
