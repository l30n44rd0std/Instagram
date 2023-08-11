import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function List(props) {
  function carregarImagem(likeada) {
    return likeada
      ? require("../img/like-instagram.png")
      : require("../img/like-unline-instagram.png");
  }
  function mostrarlikes(likers) {
    if (likers === 0) {
      return "";
    } else if (likers === 1) {
      return likers + " curtida";
    } else {
      return likers + " curtidas";
    }
  }

  return (
    <View style={styles.list}>
      <View style={styles.viewPerfil}>
        <Image
          source={{ uri: props.data.imgPerfil }}
          style={styles.imgPerfil}
        />

        <TouchableOpacity>
          <Text style={styles.textPerfil}>{props.data.nome}</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: props.data.imgPublicacao }}
        style={styles.imagemFeed}
      />

      <View style={styles.viewLike}>
        <TouchableOpacity>
          <Image
            source={carregarImagem(props.data.likeada)}
            style={styles.like}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../img/comment-instagram.png")}
            style={styles.like}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../img/direct-instagram.png")}
            style={styles.like}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.numLikes}>{mostrarlikes(props.data.likers)}</Text>

        <Text style={styles.textDescricao}>
            <Text style={styles.textPerfil}>{props.data.nome}</Text>
        {' '}
        {props.data.descricao}
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingLeft: 12,
  },
  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "#121212",
    marginRight: 10
  },
  textPerfil: {
    marginLeft: 15,
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
  },
  imagemFeed: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    marginTop: -5,
  },
  viewLike: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    paddingTop: 7,
    paddingLeft: 12,
    alignItems: "center",
  },
  like: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  numLikes: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textDescricao: {
    fontSize: 15,
    paddingLeft: 10,
    marginTop: 3,
    marginBottom: 3,
    paddingRight: 10
  },
  textPerfil: {
    fontSize: 15,
    fontWeight: 'bold'
  },
});
