import { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./Dropdown.style";

const Dropwdown = ({ header, selected, list, selectedOnPress }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [filteredList,setFilteredList]=useState(list)

  const listMap = () => {
    console.log(selected);
    return filteredList.map((item, i) => (
      <TouchableOpacity onPress={() => {selectedOnPress(item.category); setDropdownIsOpen(false)}}>
        <Text>{item.category}</Text>
      </TouchableOpacity>
    ));
  };

  const dropdownControl = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };
  console.log(dropdownIsOpen);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}Choose category</Text>
      <View style={styles.selected}>
        <TextInput
          placeholder="Select product category"
          style={styles.selectedText}
        >
          {selected}
        </TextInput>
        <TouchableOpacity
          onPress={dropdownControl}
          style={styles.dropdown_button}
        >
          {dropdownIsOpen ? (
            <Image
              source={require("../../assets/up-arrow.png")}
              style={styles.dropdown_up_icon}
            />
          ) : (
            <Image
              source={require("../../assets/down-arrow.png")}
              style={styles.dropdown_icon}
            />
          )}
        </TouchableOpacity>
      </View>
      {dropdownIsOpen ? (
        <ScrollView style={styles.dropdown}>{listMap()}</ScrollView>
      ) : (
        ""
      )}
    </View>
  );
};
export default Dropwdown;
