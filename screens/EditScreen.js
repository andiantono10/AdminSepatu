import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Card, CardItem, Button, Label, Header, Right, Left, Body, Form, Item, Input, Textarea } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

export default class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id_barang: this.props.navigation.getParam('id_barang'),
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
    const { width, height } = Dimensions.get('window');
    return (
        <View style={{ flex: 1, paddingTop: 30 }}>
        <Header >
          <Left>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{ color: 'white' }}>Edit Barang</Text>
          </Body>
          <Right>

          </Right>
        </Header>
        <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
          <ScrollView style={{ flex: 1 }}>
            <Card style={{ flexDirection: 'row', height: 200, justifyContent: 'space-between' }}>
              <View style={{ flex: 1, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black' }}>
                  {
                    this.state.foto_base641 && <Image
                      source={{ uri: 'data:image/' + this.state.tipe1 + ';base64,' + this.state.foto_base641 }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  }
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Upload</Text>
                  </Button>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Reset</Text>
                  </Button>
                </View>
              </View>
              <View style={{ flex: 1, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black' }}>
                  {
                    this.state.foto_base642 && <Image
                      source={{ uri: 'data:image/' + this.state.tipe2 + ';base64,' + this.state.foto_base642 }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  }
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Upload</Text>
                  </Button>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Reset</Text>
                  </Button>
                </View>
              </View>
              <View style={{ flex: 1, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black' }}>
                  {
                    this.state.foto_base643 && <Image
                      source={{ uri: 'data:image/' + this.state.tipe3 + ';base64,' + this.state.foto_base643 }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  }
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Upload</Text>
                  </Button>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Reset</Text>
                  </Button>
                </View>
              </View>
            </Card>
            <Card>
              <Form>
                <Item floatingLabel>
                  <Label>Nama Produk</Label>
                  <Input value={this.state.nama_barang} onChangeText={nama_barang => this.setState({ nama_barang })}/>
                </Item>
                <Item floatingLabel>
                  <Label>Kota Penjual</Label>
                  <Input value={this.state.kota_penjual} onChangeText={kota_penjual => this.setState({ kota_penjual })}/>
                </Item>
                <Item floatingLabel>
                  <Label>Kategori</Label>
                  <Input value={this.state.kategori} onChangeText={kategori => this.setState({ kategori })}/>
                </Item>
                <Item floatingLabel>
                  <Label>Stock</Label>
                  <Input value={this.state.stock} onChangeText={stock => this.setState({ stock })}/>
                </Item>
                <Item regular style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
                  <Text>Available Size : </Text>
                  <View style={{ width: 60 }}>
                    <Input placeholder='Size' value={this.state.sizeMin} onChangeText={sizeMin => this.setState({ sizeMin })}/>
                  </View>
                  <Text> --- </Text>
                  <View style={{ width: 60 }}>
                    <Input placeholder='Size' value={this.state.sizeMax} onChangeText={sizeMax => this.setState({ sizeMax })}/>
                  </View>
                </Item>
                <Textarea rowSpan={3} bordered placeholder="Textarea" value={this.state.keterangan} onChangeText={keterangan => this.setState({ keterangan })}/>
              </Form>
              <View style={{ paddingTop: 20, paddingBottom: 50, paddingLeft: 10, paddingRight: 10 }}>
                <Button block>
                  <Text style={{ color: 'white' }}>Simpan</Text>
                </Button>
              </View>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
