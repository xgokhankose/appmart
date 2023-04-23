import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './Comments.style';
import { Rating } from 'react-native-ratings';

const Comments = ({ item }) => {
  var date = new Date(item.date.seconds * 1000);
  var dataMonth = date.getMonth();
  var dataDay = date.getDate();
  var dataYear = date.getFullYear();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleInnerContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {item.commentBy.name}
          </Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={20}
            onFinishRating={null}
            startingValue={item.rating}
            jumpValue={0.5}
            fractions={1}
            isDisable={false}
            readonly
            style={styles.rating}
            tintColor="#f0f0f0"
          />
        </View>
        <Text style={styles.date}>
          {dataDay}.{dataMonth}.{dataYear}
        </Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.comment}>{item.comment}</Text>
    </View>
  );
};
export default Comments;
