import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@env";
import UserRegistration from "./src/UserRegistration";

export default function App() {
  return <UserRegistration />;
  // const [student, setStudent] = useState([]);
  // useEffect(() => {
  //   async function getAllStudent() {
  //     try {
  //       const student = await axios.get("http://10.0.2.2:8000/api/student");
  //       console.log(student.data);
  //       setStudent(student.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAllStudent();
  // }, []);
  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={student}
  //       renderItem={({item}) => (
  //         <Text style={{fontSize:28,padding:20}}>
  //           {item.stuname}, {item.email}
  //         </Text>
  //       )}
  //     />
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
