import { Dimensions, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

const windowHeight = Dimensions.get('window').height;

type Props = {
  image: ImageSourcePropType;
  name: string;
  price: string;
};

export default function ServiceCard({ image, name, price }: Props) {
  const cardHeight = windowHeight * 0.25 - 100; // or any formula you prefer

  return (
    <ImageBackground
      source={image}
      style={[styles.card, { height: cardHeight }]}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 15,
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    padding: 10,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 2,
  },
  price: {
    color: '#fff',
    fontSize: 12,
  },
});
