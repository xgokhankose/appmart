import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './ProductDetail.style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { Image as ImageCache } from 'react-native-expo-image-cache';

const ProductDetail = ({ route }) => {
  const [focus, setFocus] = useState(0);
  const list = useSelector((state) => state.products.products);
  const product = list.find((product) => product.id === route.params.id);

  const navigation = useNavigation();

  const handleContactTrader = async () => {
    const currentUser = getAuth().currentUser;

    if (product.user == currentUser.email) {
      return;
    }
    const productId = product.id;

    const searchValues1 = [{ senderEmail: currentUser.email }, { receiverEmail: product.user }];
    const searchValues2 = [{ senderEmail: product.user }, { receiverEmail: currentUser.email }];

    const chatsRef = collection(db, 'chats');
    const q = query(
      chatsRef,
      where('productId', '==', productId),
      where('users', 'in', [searchValues1, searchValues2])
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size == 0) {
      const chatRef = await addDoc(collection(db, 'chats'), {
        users: [{ senderEmail: currentUser.email }, { receiverEmail: product.user }],
        productId: productId,
        messages: [],
        productImage: product.images[0].url,
        receiverName: product.userName,
        senderName: currentUser.displayName,
        productName: product.name,
        commentPermission: [
          { name: currentUser.displayName, email: currentUser.email, canAccess: false },
          { name: product.userName, email: product.user, canAccess: false },
        ],
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

  const navigateCommentProfile = () => {
    navigation.navigate('CommentProfilePage', {
      name: product.userName,
      email: product.user,
    });
  };

  var date = new Date(product.createdAt.seconds * 1000);
  var dataMonth = date.getMonth();
  if (dataMonth < 10) {
    dataMonth = '0' + dataMonth;
  }
  var dataDay = date.getDate();
  if (dataDay < 10) {
    dataDay = '0' + dataDay;
  }
  var dataYear = date.getFullYear().toString().substring(2, 4);
  const imagesList = (data) => {
    return (
      <TouchableOpacity
        onPress={() => setFocus(data.index)}
        style={[
          styles.mini_image_container,
          data.index == focus ? { borderColor: '#ED6663' } : { borderColor: '#F2F2F2' },
        ]}>
        <ImageCache style={styles.mini_image} uri={data.item.url} />
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
      <View style={styles.icon_container}>
        <TouchableOpacity style={styles.icon_inner_container} onPress={navigation.goBack}>
          <Image style={styles.icon} source={require('../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateCommentProfile} style={styles.userNameButton}>
          <Text style={styles.userName}>{product.userName} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_inner_container}>
          <Image style={styles.icon} source={require('../../assets/dots.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.titles_container}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.titles_inner_container}>
          <Text style={styles.category}>{product.category}</Text>

          <View style={styles.calendar_container}>
            <Image style={styles.calendar} source={require('../../assets/calendar.png')} />
            <Text style={styles.date}>
              {dataDay}.{dataMonth}.{dataYear}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.image_container}>
        {!!product.images[0] ? (
          <ImageCache style={styles.image} uri={product.images[focus].url} />
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
