import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, CardItem, Button, Label } from 'native-base';

export default class PembelianScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        ada: false
    };
  }
  _getListPembelian=()=>{
    fetch ('http://simlabtiug.com/api_sepatu/getTransaksi.php', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify ({}),
})
  .then (response => response.json ())
  .then (responseJson => {
    if(responseJson=="Tidak"){
      this.setState({
        ada: false,
        data:[]
      })
    }else{
      this.setState ({
        data: responseJson,
        ada: true
      });
    }
    
  });

  }

  componentDidMount(){
    this._getListPembelian();
  }

  componentDidUpdate(){
    this._getListPembelian();
  }

  render() {
    return (
      <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
        <ScrollView style={{ flex: 1 }}>
        {
          this.state.ada == true ? (
            this.state.data.map((items,i)=>{
            if(items.status_pembelian == '0'){
              status = 'Bukti Transfer di tolak'
            }else if(items.status_pembelian == '1'){
              status = 'Perlu persetujuan'
            }else if(items.status_pembelian == '2'){
              status = 'Barang sudah di setujui'
            }else if(items.status_pembelian=='3'){
              status = 'Barang telah di terima'
            }
            return(
              <Card key={i} style={{ paddingTop: 5 }}>
                <View style={{ flex: 1, height: 120, width: '100%', flexDirection: 'row', paddingBottom:10 }}>
                  <View style={{ flex: 1.5, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black' }}>
                      {
                        items.foto_barang? <Image
                          source={{ uri: 'data:image/' + items.tipe + ';base64,' + items.foto_barang }}
                          style={{ width: '100%', height: '100%' }}
                          resizeMode="contain"
                        /> : null
                      }
                    </View>
                  </View>
                  <View style={{ flex: 2, borderWidth: 0, borderColor: 'black', justifyContent: 'space-around', paddingLeft: 10, }}>
                    <Text>
                      No : {items.id_pembelian}
                    </Text>
                    <Text>
                      {items.nama_barang}
                    </Text>
                    <Text>
                      {items.nama_pembeli}
                    </Text>
                    <Text>
                      Status : {status}
                    </Text>
                  </View>
                  <View style={{ flex: 1.2, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
                      {
                        items.status_pembelian=='1'?(
                          <Button onPress={()=>this.props.navigation.navigate('Bukti',{
                            id_pembelian: items.id_pembelian,
                            id_barang: items.id_barang,
                            nama_barang: items.nama_barang,
                            harga: items.harga,
                            nama_pembeli: items.nama_pembeli,
                            foto_barang: items.foto_barang,
                            tipe : items.tipe,
                            status_pembelian: items.status_pembelian,
                            alamat: items.alamat,
                            pesan: items.pesan
                          })} primary style={{ height: 50, width: 70, alignContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white' }}> View </Text>
                          </Button>
                        ):null
                      }
                  </View>
                </View>
              </Card>
            )
          })
          ):(<View style={{paddingTop:10, alignItems:'center'}}>
            <Text>Tidak ada data</Text>
          </View>)
        }
        </ScrollView>
      </View>
    );
  }
}
