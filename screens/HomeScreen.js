import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Left, Right, Body } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import ListScreen from './ListScreen'
import PembelianScreen from './PembelianScreen'
import Icon from 'react-native-vector-icons/Ionicons'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
        <Container style={{paddingTop:30}}>
            <Header hasTabs>
                <Body>
                    <Text style={{color:'white'}}>Admin Toko</Text>
                </Body>
                <Right>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add')}>
                        <Icon name="md-add" size={32} color='#fff' />
                    </TouchableOpacity>
                </Right>
            </Header>
            <Tabs>
            <Tab heading={<TabHeading><Text style={{color:'white'}}>Menu Barang</Text></TabHeading>}>
                <ListScreen navigation={navigation} />
            </Tab>
            <Tab heading={<TabHeading><Text style={{color:'white'}}>Pembelian</Text></TabHeading>}>
                <PembelianScreen navigation={navigation} />
            </Tab>
            </Tabs>
        </Container>
    );
  }
}
