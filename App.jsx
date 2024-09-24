import 'react-native-gesture-handler'
import {Provider} from 'react-redux';
import Navigator from '@navigator';
import store from '@utils/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
