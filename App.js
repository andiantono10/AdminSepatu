/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AddScreen from './screens/AddScreen'
import ListScreen from './screens/ListScreen';
import PembelianScreen from './screens/PembelianScreen';
import HomeScreen from './screens/HomeScreen';
import Main from './screens/route/Route'
const App: () => React$Node = () => {
  console.disableYellowBox = true;
  return (
    <>
      {/* <AddScreen/> */}
      {/* <ListScreen/> */}
      {/* <PembelianScreen/> */}
      {/* <HomeScreen/> */}
      <Main/>
    </>
  );
};

export default App;
