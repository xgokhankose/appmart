import { useState } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './CommentProfile.style';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CustomDescriptionInput from '../../components/CustomDescriptionInput/CustomDescriptionInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Rating } from 'react-native-ratings';

const CommentProfile = () => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(2.5);
  const [commentVisible, setCommentVisible] = useState(false);

  const navigation = useNavigation();
  const navigate = () => {
    navigation.goBack();
  };
  const handleSend = () => {
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
        {/*   <Stars
            half={true}
            default={2.5}
            update={(val) => {
              this.setState({ stars: val });
            }}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={require('../../assets/star')}
            emptyStar={require('../../assets/emptyStar')}
            halfStar={require('../../assets/halfStar')}
          /> */}
        </View>
      </View>
    );
  };

  const setCommentVisibility = () => {
    setCommentVisible(true);
  };

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
        <Text style={styles.name}>Gokhan Kose</Text>
        {commentVisible && renderComment()}
        <CustomButton
          onPress={!commentVisible ? setCommentVisibility : handleSend}
          title={!commentVisible ? 'Add comment' : 'Send comment'}
          width={'80%'}
        />

        <FlatList style={styles.flatList} data={null} />

        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a comment..."
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.send_button} onPress={handleSend}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CommentProfile;
