import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Input,
  Item,
  Textarea,
  Label,
  Card,
  Form
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

export default class BuktiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id_pembelian: this.props.navigation.getParam('id_pembelian'),
      id_barang: this.props.navigation.getParam('id_barang'),
      nama_barang: this.props.navigation.getParam('nama_barang'),
      nama_pembeli: this.props.navigation.getParam('nama_pembeli'),
      harga: this.props.navigation.getParam('harga'),
      foto_barang:this.props.navigation.getParam('foto_barang'),
      tipe_foto: this.props.navigation.getParam('tipe_foto'),
      alamat: this.props.navigation.getParam('alamat'),
      pesan: this.props.navigation.getParam('pesan'),
      status_pembelian: this.props.navigation.getParam('status_pembelian'),

      no_rek: '',
      nama_rek: '',
      bank_rek: '',

      data:[]
    };
  }
  _getRekening=()=>{
    const {id_pembelian, } = this.state;
    fetch ('http://simlabtiug.xyz/api_sepatu/getRek.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        id_pembelian: id_pembelian,
      }),
    })
      .then (response => response.json ())
      .then (responseJson => {
        this.setState ({
          data: responseJson,
        });
      });
  }

  componentDidMount(){
    this._getRekening();
  }

  _submit=()=>{
    const {id_pembelian,id_barang} = this.state;
    console.log(id_pembelian);
    console.log(id_barang);
    fetch ('http://simlabtiug.xyz/api_sepatu/changeStatus.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        id_pembelian: id_pembelian,
        id_barang: id_barang
      }),
    })
      .then (response => response.json ())
      .then (responseJson => {
        if(responseJson == 'Bukti di acc'){
          alert('Berhasil');
          this.props.navigation.navigate('Home');
        }else{
          alert('Terjadi kesalahan');
        }
      });
  }
  render() {
    var {height, width} = Dimensions.get ('window');

    return (
        <View style={{flex:1, paddingTop:30, marginTop:30}}>
        <View
          style={{
            height: 70,
            width: width,
            flex: 0.07,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <TouchableOpacity
            style={{flex: 0.1, paddingLeft: 10}}
            onPress={()=>this.props.navigation.goBack()}
          >
            <Icon name="ios-arrow-back" size={32} color="black" />
          </TouchableOpacity>
          <View style={{flex: 0.8}}>
            <Text style={{color: 'black', fontSize: 18}}>Terima Pembayaran</Text>
          </View>
        </View>
        <View style={{marginTop:10, paddingBottom:5, marginBottom:5, paddingTop:10, padding:10}}>
          <Card style={{height:300}}>
            <View style={{padding:10}}>
              <Text>Informasi Barang</Text>
            </View>
            <View style={{height:200, flexDirection:'row', paddingTop:10 }}>
              <View style={{flex:1.3, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:'70%',height:'90%', borderWidth:1, borderColor:'blue'}}>
                  {
                    this.state.foto_barang? <Image
                      source={{ uri: 'data:image/' + this.state.tipe + ';base64,' + this.state.foto_barang }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    /> : null
                  }
                </View>
              </View>
              <View style={{flex:1,justifyContent:'space-around', alignContent:'center'}}>
                <Text>Transaksi : {this.state.id_pembelian}</Text>
                <Text>Nama Barang : {this.state.nama_barang} </Text>
                <Text>Harga : {this.state.harga} </Text>
                <Text>Nama : {this.state.nama_pembeli}</Text>
              </View>
            </View>
          </Card>
          <Card style={{height:300, paddingTop:10}}>
            <View style={{padding:10}}>
              <Text>Informasi Rekening</Text>
            </View>
            <View style={{height:200, flexDirection:'row', paddingTop:10 }}>
              <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:'85%',height:'85%', borderWidth:1, borderColor:'blue', alignContent:'center', justifyContent:'center', alignItems:'center'}}>
                  {
                    this.state.data.map((items,i)=>{
                    return(
                      <Image
                        key={i}
                        source={{ uri: 'data:image/' + items.tipe_foto + ';base64,' + items.foto_bukti }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                      />
                    )
                  })
                  }
                </View>
              </View>
              <View style={{flex:1,justifyContent:'space-around', alignContent:'center',}}>
                {
                  this.state.data.map((items,i)=>{
                    return(
                      <View key={i} style={{justifyContent:'space-around', alignContent:'space-around'}}>
                        <Text>No Rek : {items.no_rekening}</Text>
                        <Text>Nama Bank : {items.bank_penerima}</Text>
                        <Text>Nama Rek : {items.nama_rekening}</Text>
                      </View>
                    )
                  })
                }             
                <View style={{paddingTop:15, width:'100%', justifyContent:'center', alignItems:'center', alignContent:'center',alignSelf:'center'}}>
                  <Button onPress={()=>this._submit()} style={{width:'90%', justifyContent:'center', alignContent:'center'}}>
                    <Text style={{color:'white'}}>Submit</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </View>
    );
  }
}
