import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Header, Left, Body, Right, Card, CardItem, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'


export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id_barang : this.props.navigation.getParam('id_barang'),
      foto_base641: this.props.navigation.getParam('foto1'),
      tipe1: this.props.navigation.getParam('tipe1'),

      foto_base642: this.props.navigation.getParam('foto2'),
      tipe2: this.props.navigation.getParam('tipe2'),

      foto_base643: this.props.navigation.getParam('foto3'),
      tipe3: this.props.navigation.getParam('tipe3'),

      nama_barang: this.props.navigation.getParam('nama_barang'),
      kota_penjual: this.props.navigation.getParam('kota_penjual'),
      kategori: this.props.navigation.getParam('kategori'),
      stock: this.props.navigation.getParam('stock'),
      sizeMin: this.props.navigation.getParam('sizeMin'),
      sizeMax: this.props.navigation.getParam('sizeMax'),
      keterangan: this.props.navigation.getParam('keterangan'),
      harga: this.props.navigation.getParam('harga')
    };
  }

  render() {
    return (
        <View style={{flex:1, paddingTop:30}}>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{color:'white'}}>{this.state.nama_barang}</Text>
          </Body>
          <Right/>
        </Header>
        <ScrollView style={{flex:1, paddingLeft:10, paddingRight:10, paddingTop:5}}>
          <View style={{ height: 200, borderWidth: 1, borderColor: 'black', width: '100%' }}>
            {this.state.foto_base641
                    ? <Image
                        source={{
                          uri: 'data:image/' +
                            this.state.tipe1 +
                            ';base64,' +
                            this.state.foto_base641,
                        }}
                        style={{width: '100%', height: '100%'}}
                        resizeMode="contain"
                      />
                    : (<Text>Test</Text>)}
          </View>
          <View style={{paddingTop:5}}>
            <Text style={{fontSize:20}}>{this.state.nama_barang}</Text>
            <Text style={{ fontSize: 15, color: 'red' }}>Rp {this.state.harga}</Text>
          </View>
          <Card style={{paddingTop:5, paddingBottom:30}}>
            <CardItem header bordered>
              <Text>Detail Produk</Text>
            </CardItem>
            <CardItem cardBody>
              <View style={{ flex: 1, flexDirection: 'column', padding: 15 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>Merk</Text>
                  </View>
                  <View style={{ flex: 2, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>{this.state.nama_barang}</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>Kategori</Text>
                  </View>
                  <View style={{ flex: 2, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>{this.state.kategori}</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>Size </Text>
                  </View>
                  <View style={{ flex: 2, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>{this.state.sizeMin} - {this.state.sizeMax}</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>Stok</Text>
                  </View>
                  <View style={{ flex: 2, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>{this.state.stock}</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>Dikirim</Text>
                  </View>
                  <View style={{ flex: 2, borderWidth: 1, borderColor: 'black', height: 45, justifyContent: 'center', paddingLeft: 5 }}>
                    <Text>Kota {this.state.kota_penjual}</Text>
                  </View>
                </View>
                <View style={{ paddingTop: 15 }}>
                  <Text style={{ fontSize: 18, textAlign: 'center' }}>Keterangan</Text>
                  <Text>
                    {this.state.keterangan}
                      </Text>
                </View>
                <View style={{paddingTop:20, paddingBottom:30}}>
                  <View>
                    <Button block onPress={()=>this.props.navigation.navigate('Edit',{
                      id_barang: this.state.id_barang,
                      nama_barang: this.state.nama_barang,
                      foto1: this.state.foto_base641,
                      tipe1: this.state.tipe1,
                      foto2: this.state.foto_base642,
                      tipe2: this.state.tipe2,
                      foto3: this.state.foto_base643,
                      tipe3: this.state.tipe3,
                      harga: this.state.harga,
                      kota_penjual: this.state.kota_penjual,
                      kategori: this.state.kategori,
                      stock: this.state.stock,
                      sizeMin: this.state.sizeMin,
                      sizeMax: this.state.sizeMax,
                      keterangan: this.state.keterangan
                    })}>
                      <Text style={{color:'white'}}>Edit</Text>
                    </Button>
                  </View>
                  <View style={{ paddingTop: 10 }}>
                    <Button block >
                      <Text style={{color:'white'}}>Delete</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </CardItem>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
