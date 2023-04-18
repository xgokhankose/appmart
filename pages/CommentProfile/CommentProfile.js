import { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './CommentProfile.style';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CustomDescriptionInput from '../../components/CustomDescriptionInput/CustomDescriptionInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Rating } from 'react-native-ratings';
import { collection, query, where, getDocs, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const CommentProfile = ({ route }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(2.5);
  const [commentVisible, setCommentVisible] = useState(false);
  const [info, setInfo] = useState();

  const navigation = useNavigation();
  const navigate = () => {
    navigation.goBack();
  };
  const handleSend = () => {
    const commentRef = doc(db, 'commentPermissions', info.docId);


    updateDoc(commentRef, {
      comments: arrayUnion(comment),
    })
      .then(() => {
        console.log('Yorum eklendi.');
      })
      .catch((error) => {
        console.error('Yorum eklenirken bir hata oluştu: ', error);
      });
    setCommentVisible(false);
  };
  const ratingCompleted = (rating) => {
    setRating(rating);
  };
  const renderComment = () => {
    return (
      <View style={styles.commentContainer}>
        <CustomDescriptionInput inputValue={comment} onChangeText={setComment} header={'Comment'} />
        <View style={styles.star}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={32}
            onFinishRating={ratingCompleted}
            startingValue={rating}
            jumpValue={0.5}
            fractions={1}
          />
        </View>
      </View>
    );
  };

  const setCommentVisibility = () => {
    setCommentVisible(true);
  };

  useEffect(() => {
    const usersRef = collection(db, 'commentPermissions');
    const emailQuery = query(usersRef, where('email', '==', route.params.email));
    getDocs(emailQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setInfo({ data: doc.data(), docId: doc.id });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={styles.container}>
        <View style={styles.top_container}>
          <TouchableOpacity onPress={navigate}>
            <Image style={styles.icon} source={require('../../assets/left-arrow.png')} />
          </TouchableOpacity>

          <Image style={styles.icon} source={require('../../assets/dots.png')} />
        </View>
        <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
        <Text style={styles.name}>{route.params.name}</Text>
        {commentVisible && renderComment()}
        <CustomButton
          onPress={!commentVisible ? setCommentVisibility : handleSend}
          title={!commentVisible ? 'Add comment' : 'Send comment'}
          width={'80%'}
        />

        <FlatList style={styles.flatList} data={null} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CommentProfile;
