import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './ProductDetail.style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductDetail = ({ route }) => {
  const [focus, setFocus] = useState(0);
  const list = useSelector((state) => state.products.products);
  const product = list.find((product) => product.id === route.params.id);

  const navigation = useNavigation();

  const handleContactTrader = async () => {
    const chatsRef = collection(db, 'chats');
    const currentUser = getAuth().currentUser;
    const productId = product.id;

    const searchValues = [currentUser.email, product.user];

    const q = query(
      chatsRef,
      where('productId', '==', productId),
      where('users', '==', searchValues)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size == 0) {
      const chatRef = await addDoc(collection(db, 'chats'), {
        users: [currentUser.email, product.user],
        productId: productId,
        messages: [],
        productImage: product.images[0].url,
        receiverName: product.userName,
        senderName: currentUser.displayName,
        productName: product.name,
      });

      const chatId = chatRef.id;
      navigation.navigate('ChatPage', {
        chatId: chatId,
        productPhoto: product.images[0].url,
        receiver: product.userName,
      });
    } else {
      var chatId = querySnapshot.docs[0].id;
      navigation.navigate('ChatPage', {
        chatId: chatId,
        productPhoto: product.images[0].url,
        receiver: product.userName,
      });
    }
  };

  var date = new Date(product.createdAt.seconds * 1000);
  var dataMonth = date.getMonth();
  var dataDay = date.getDate();
  var dataYear = date.getFullYear();

  const imagesList = (data) => {
    return (
      <TouchableOpacity
        onPress={() => setFocus(data.index)}
        style={[
          styles.mini_image_container,
          data.index == focus ? { borderColor: '#ED6663' } : { borderColor: '#F2F2F2' },
        ]}>
        <Image style={styles.mini_image} source={{ uri: data.item.url }} />
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
      <View style={styles.icon_container}>
        <TouchableOpacity style={styles.icon_inner_container} onPress={navigation.goBack}>
          <Image style={styles.icon} source={require('../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_inner_container}>
          <Image style={styles.icon} source={require('../../assets/dots.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.titles_container}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.titles_inner_container}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.date}>
            {dataDay}.{dataMonth}.{dataYear}
          </Text>
        </View>
      </View>
      <View style={styles.image_container}>
        {!!product.images[0] ? (
          <Image style={styles.image} source={{ uri: product.images[focus].url }} />
        ) : null}
        <FlatList bounces={false} horizontal={true} data={product.images} renderItem={imagesList} />
      </View>
      <View style={styles.titles_container}>
        <Text style={styles.description_title}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={handleContactTrader} style={styles.message_button}>
          <Text style={styles.message_button_title}>Contact the trader</Text>
          <Image style={styles.icon} source={require('../../assets/messenger.png')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
