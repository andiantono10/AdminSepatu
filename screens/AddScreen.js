import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { Card, CardItem, Button, Label, Header, Right, Left, Body, Form, Item, Input, Textarea } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto_base641:null,
      tipe1: 'jpg',

      foto_base642:null,
      tipe2: 'jpg',

      foto_base643:null,
      tipe3: 'jpg',

      nama_barang:'',
      kota_penjual: '',
      kategori:'',
      stock:'',
      sizeMin:'',
      sizeMax: '',
      keterangan:'',
      harga: ''
    };
  }

  _pickImage1 = async () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({foto_base641: response.data})
      }
    });
  }

  _pickImage2 = async () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({foto_base642: response.data})
      }
    });
  }

  _pickImage3 = async () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({foto_base643: response.data})
      }
    });
  }

  _addItem = ()=>{
    const {foto_base641, foto_base642, foto_base643, tipe1, tipe2, tipe3, kota_penjual, kategori, stock, sizeMin, sizeMax, keterangan, nama_barang, harga} = this.state;
    //console.log(this.state);
    fetch('http://simlabtiug.xyz/api_sepatu/AddItem.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nama_barang:nama_barang,
        foto1: foto_base641,
        foto2: foto_base642,
        foto3: foto_base643,
        tipe1:tipe1,
        tipe2:tipe2,
        tipe3:tipe3,
        kota_penjual:kota_penjual,
        kategori:kategori,
        stock:stock,
        sizeMin:sizeMin,
        sizeMax:sizeMax,
        keterangan:keterangan,
        harga:harga
      })
    }).then((response) => response.json())
      .then((responseJson => {
        if (responseJson == 'Success') {
          alert('Barang Telah di tambahkan');
          this.props.navigation.navigate('Home');
        }else{
          alert('Barang Error'+responseJson);
        }
      })).catch((err)=>{
        alert("Error add "+err);
      })
  }

  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View style={{ flex: 1, paddingTop:30 }}>
        <Header >
          <Left>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{ color: 'white' }}>Tambah Barang</Text>
          </Body>
          <Right>
            
          </Right>
        </Header>
        <View style={{ flex: 1, paddingLeft:5, paddingRight:5 }}>
          <ScrollView style={{ flex: 1 }}>
            <Card style={{ flexDirection: 'row', height: 200, justifyContent:'space-between' }}>
              <View style={{ flex: 1, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{height:70, width:70, borderWidth:1, borderColor:'black'}}>
                  {
                    this.state.foto_base641 && <Image
                      source={{ uri: 'data:image/' + this.state.tipe1 + ';base64,' + this.state.foto_base641 }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  }
                </View>
                <View style={{paddingTop: 10}}>
                  <Button onPress={()=>this._pickImage1()} style={{ width: 90, alignItems:'center', alignContent:'center', justifyContent:'center' }}>
                    <Text style={{textAlign:'center', color:'white'}}>Upload</Text>
                  </Button>
                </View>
                <View style={{paddingTop: 10}}>
                  <Button style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{textAlign:'center', color:'white'}}>Reset</Text>
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
                  <Button onPress={() => this._pickImage2()} style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
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
                  <Button onPress={() => this._pickImage3()} style={{ width: 90, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
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
                  <Input onChangeText={nama_barang => this.setState({ nama_barang })} />
                </Item>
                <Item floatingLabel>
                  <Label>Harga Barang</Label>
                  <Input onChangeText={harga => this.setState({ harga })} />
                </Item>
                <Item floatingLabel>
                  <Label>Kota Penjual</Label>
                  <Input onChangeText={kota_penjual => this.setState({ kota_penjual })} />
                </Item>
                <Item floatingLabel>
                  <Label onChangeText={kategori => this.setState({ kategori })}>Kategori</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Stock</Label>
                  <Input onChangeText={stock => this.setState({ stock })} />
                </Item>
                <Item regular style={{flexDirection:'row', paddingTop:5, paddingLeft:10, paddingRight:10}}>
                  <Text>Available Size : </Text>
                  <View style={{ width: 60 }}>
                    <Input placeholder='Size' onChangeText={sizeMin => this.setState({ sizeMin })}/>
                  </View>
                  <Text> --- </Text>
                  <View style={{ width: 60 }}>
                    <Input placeholder='Size' onChangeText={sizeMax => this.setState({ sizeMax })}/>
                  </View>
                </Item>
                <Textarea rowSpan={3} bordered placeholder="Textarea" onChangeText={keterangan => this.setState({ keterangan })} />
              </Form>
              <View style={{paddingTop:20, paddingBottom:50, paddingLeft:10, paddingRight:10}}>
                <Button block onPress={()=>this._addItem()}>
                  <Text style={{color:'white'}}>Simpan</Text>
                </Button>
              </View>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
