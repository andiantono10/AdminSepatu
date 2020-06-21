import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import AddScreen from '../AddScreen'
import BuktiScreen from '../BuktiScreen'
import DetailScreen from '../DetailScreen'
import EditScreen from '../EditScreen'
import HomeScreen from '../HomeScreen'
import ListScreen from '../ListScreen'
import PembelianScreen from '../PembelianScreen'

const DashboardStack = createStackNavigator({
    'Home' : {
        screen : HomeScreen
    },
    'Edit' :{
        screen: EditScreen
    },
    'Detail' :{
        screen : DetailScreen
    },
    'Add' :{
        screen :AddScreen
    },
    'List' : {
        screen: ListScreen
    },
    'Pembelian' :{
        screen : PembelianScreen
    },
    'Bukti' :{
        screen: BuktiScreen
    }
},{
    initialRouteName: 'Home',
    headerMode: 'none'
})

export default Main = createAppContainer(createSwitchNavigator({
    Rumah: DashboardStack
  }, {
      initialRouteName: 'Rumah',
    })
  );