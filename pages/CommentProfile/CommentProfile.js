import { useState } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './CommentProfile.style';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CommentProfile = () => {
  const [message, setMessage] = useState();
  const navigation = useNavigation();
  const navigate = () => {
    navigation.goBack();
  };
  const handleSend = () => {};
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

        <FlatList style={styles.flatList} data={null} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a comment..."
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.send_button} onPress={handleSend}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CommentProfile;
