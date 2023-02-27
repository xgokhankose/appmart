import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./Dropdown.style";

const Dropwdown = ({ header, selected, list, selectedOnPress }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [filteredList,setFilteredList]=useState(list)
  const [searchInput,setSearchInput]=useState("")

  const listMap = () => {
    return filteredList.map((item, i) => (
      <TouchableOpacity style={styles.dropdown_item} onPress={() => {selectedOnPress(item.category); setDropdownIsOpen(false)}}>
        <Text style={styles.dropdown_item_text}>{item.category}</Text>
      </TouchableOpacity>
    ));
  };

  const dropdownControl = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  useEffect(() => {setFilteredList(list.filter((item)=>item.category.includes(searchInput)))},[searchInput])
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}Choose category </Text>
      <View style={styles.selected}>
        <TextInput
          placeholder="Search product category..."
          style={styles.dropdown_input}
          onChangeText={setSearchInput}
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
        <ScrollView style={styles.dropdown_container}>{listMap()}</ScrollView>
      ) : (
        ""
      )}
    </View>
  );
};
export default Dropwdown;
