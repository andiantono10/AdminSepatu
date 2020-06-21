import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import {Card, CardItem, Button, Label} from 'native-base';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    };
  }

  _getItems=()=>{
    fetch('http://simlabtiug.xyz/api_sepatu/getItem.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
      })
    }).then((response) => response.json())
      .then((responseJson => {
        this.setState({
          data:responseJson
        })
      }))
  }

  componentDidMount(){
    this._getItems();
  }


  render() {
    return (
        <View style={{flex:1, paddingLeft:5, paddingRight:5}}>
        <ScrollView style={{flex:1}}>
        {
          this.state.data.map((items, i)=>{
            return(
              <Card style={{ paddingTop: 5 }} key={i}>
                <View style={{ flex: 1, height: 120, width: '100%', flexDirection: 'row' }}>
                  <View style={{ flex: 1.5, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black' }}>
                      {
                        items.foto1? <Image
                          source={{ uri: 'data:image/' + items.tipe1 + ';base64,' + items.foto1 }}
                          style={{ width: '100%', height: '100%' }}
                          resizeMode="contain"
                        /> : null
                      }
                    </View>
                  </View>
                  <View style={{ flex: 2, borderWidth: 0, borderColor: 'black', justifyContent: 'space-around', paddingLeft: 10, }}>
                    <Text>
                      {items.nama_barang}
                </Text>
                    <Text>
                      {"Rp."+items.harga}
                </Text>
                    <Text>
                      {"Stock : "+items.stock}
                </Text>
                    <Text>
                      {"Size : "+items.sizeMin + "---"+items.sizeMax}
                </Text>
                  </View>
                  <View style={{ flex: 1.2, borderWidth: 0, borderColor: 'black', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
                    <Button onPress={() => this.props.navigation.navigate('Detail',{
                      id_barang: items.id_barang,
                      nama_barang:items.nama_barang,
                      foto1 : items.foto1,
                      tipe1: items.tipe1,
                      foto2: items.foto2,
                      tipe2: items.tipe2,
                      foto3: items.foto3,
                      tipe3: items.tipe3,
                      harga: items.harga,
                      kota_penjual:items.kota_penjual,
                      kategori:items.kategori,
                      stock:items.stock,
                      sizeMin:items.sizeMin,
                      sizeMax:items.sizeMax,
                      keterangan:items.keterangan
                    })} primary style={{ height: 50, width: 70, alignContent: 'center', justifyContent: 'center' }}>
                      <Text style={{ color: 'white' }}> View </Text>
                    </Button>
                  </View>
                </View>
              </Card>
            )
          })
        }
          
        </ScrollView>
      </View>
    );
  }
}
