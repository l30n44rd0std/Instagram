import { useState } from 'react';
import { View, StatusBar, StyleSheet, FlatList } from 'react-native'

import Header from './src/header/index';
import List from './src/List/index';

export default function App() {

  const [ feed, setFeed ] = useState([
    {
      id: '1',
      nome: 'Joseph',
      descricao: 'Mais um dia de trabalho',
      imgPerfil: 'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Youtube.jpg',
      imgPublicacao: 'https://th.bing.com/th/id/OIP.EhFgdU2ozfg7ZqLppSUNagHaEe?pid=ImgDet&rs=1',
      likeada: false,
      likers: 1000
    },
    {
      id: '2',
      nome: 'Maria',
      descricao: 'Praiana <3',
      imgPerfil: 'https://th.bing.com/th/id/R.43fbd965c49839a3cc7319d731043df5?rik=R9xspfntYcsE9A&pid=ImgRaw&r=0',
      imgPublicacao: 'https://th.bing.com/th/id/R.d9f2adf9e5faa8f3678c49170c6e854d?rik=wydktgJxiLBqUA&pid=ImgRaw&r=0',
      likeada: true,
      likers: 2000
    },
    {
      id: '3',
      nome: 'Mario',
      descricao: 'Its me, MARIOOOO!',
      imgPerfil: 'https://th.bing.com/th/id/OIP.Rxh3j682Nn6DOZpgoPZWnQHaGq?pid=ImgDet&rs=1',
      imgPublicacao: 'https://th.bing.com/th/id/R.15e90a9f976febd42e816c1353bb3b95?rik=ayyDp3XBDna%2fHQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f32800000%2fSuper-Mario-bros-super-mario-bros-32846638-1024-768.jpg&ehk=3Fi7R7M46Y2Jwb7coE5MUqhegKp4ONcWYI0uOJFTy3o%3d&risl=&pid=ImgRaw&r=0',
      likeada: true,
      likers: 1500
    },
    {
      id: '5',
      nome: 'Cirilo',
      descricao: 'Eu amo a Maria Joaquina',
      imgPerfil: 'https://th.bing.com/th/id/R.4610142e48f933ba8a8644d53b746ae5?rik=SIY7yPpv2iP0OA&pid=ImgRaw&r=0',
      imgPublicacao: 'https://th.bing.com/th/id/OIP.S2bVbOtXn4XM8fvQIemibAHaGL?pid=ImgDet&rs=1',
      likeada: true,
      likers: 10
    }
    
  ])

  return (
    <View style={styles.container}>
      <StatusBar />

      <Header />

      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=> item.id}
      data = {feed}
      renderItem={ ({item}) => <List data = {item}/>}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
