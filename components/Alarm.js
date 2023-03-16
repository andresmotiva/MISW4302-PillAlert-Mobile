import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, TouchableWithoutFeedback, Modal, Text, TouchableOpacity, TextInput, Slider } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

import CustomButtonWhite from "./CustomButtonWhite";
import CustomButtonPrimary from "./CustomButtonPrimary";
import CustomInput from "./CustomInput";
import CustomTitle from "./CustomTitle";
import CustomTitleSmall from "./CustomTitleSmall";
import ProfileIconCircle from "./ProfileIconCircle";
import ResetPasswordModal from "../screens/ResetPasswordModal";

const Alarm = ({ name, dateArray, time, timeDetail, count }) => {
   const logo = require("../assets/logo.png");
   const [displayOpen, setDisplayOpen] = useState(false);
   const [deleted, setDeleted] = useState(false);
   const [selectedOption, setSelectedOption] = useState("");
   const [showPicker, setShowPicker] = useState(false);
   const [volume, setVolume] = useState(0);
   const [isCheckedVibrar, setIsCheckedVibrar] = useState(false);

   function handleCheckboxChange() {
      setIsCheckedVibrar(!isCheckedVibrar);
   }

   function handleVolumeChange(value) {
      setVolume(value);
   }

   function handleOptionChange(option) {
      setSelectedOption(option);
      setShowPicker(false);
   }

   function handleInputPress() {
      setShowPicker(true);
   }

   const gradientColors = {
      0: "#CD7E74",
      1: "#A6DFBA",
   };

   if (deleted) {
      return null;
   }

   return (
      <View style={styles.container}>
         <TouchableWithoutFeedback onPress={() => setDisplayOpen((open) => !open)}>
            <View>
               <View style={styles.topBar}>
                  <View style={styles.topBarTitle}>
                     <Text style={styles.text}>{name}</Text>
                  </View>
                  <View style={styles.topBarIcons}>
                     <Ionicons name="ios-time-outline" size={24} color="black" />
                     {displayOpen ? <Ionicons name="ios-chevron-up" size={24} color="black" /> : <Ionicons name="ios-chevron-down" size={24} color="black" />}
                  </View>
               </View>
               <View style={styles.Alarm}>
                  <Text style={styles.textAlarm}>{time}</Text>
               </View>
               <View style={styles.topBar}>
                  {dateArray && <Text style={styles.text}>{dateArray.join(", ")}</Text>}
                  {timeDetail && <Text style={styles.text}>{timeDetail}</Text>}
                  {count && <Text style={styles.text}>{count}</Text>}
               </View>
            </View>
         </TouchableWithoutFeedback>
         {displayOpen && (
            <>
               <View style={styles.topBar}>
                  <ProfileIconCircle placeholder={"D"} extraStyles={styles.darkDay} />
                  <ProfileIconCircle placeholder={"L"} extraStyles={styles.lightDay} />
                  <ProfileIconCircle placeholder={"M"} extraStyles={styles.lightDay} />
                  <ProfileIconCircle placeholder={"M"} extraStyles={styles.lightDay} />
                  <ProfileIconCircle placeholder={"J"} extraStyles={styles.lightDay} />
                  <ProfileIconCircle placeholder={"V"} extraStyles={styles.lightDay} />
                  <ProfileIconCircle placeholder={"S"} extraStyles={styles.darkDay} />
               </View>
                   <View style={{ borderBottomColor: '#49454F', borderBottomWidth: 1, marginVertical: 10, marginBottom: 30 }} />
               <View style={styles.topBar}>
                  <Text style={styles.text}>Tono</Text>
                  <View style={styles.tonoInput}>
                     <Text style={styles.text}>Ding Dong</Text>
                     <Ionicons name="ios-chevron-down" size={24} color="black" />
                  </View>
               </View>
               <View style={styles.topBar}>
                  <Text style={styles.text}>Volumen</Text>
                  <Slider minimumValue={0} maximumValue={100} value={volume} onValueChange={handleVolumeChange} step={1} thumbTintColor="#49454F" minimumTrackTintColor="#A6DFBA" maximumTrackTintColor="#CD7E74" style={styles.volumeInput} trackStyle={{ borderRadius: 10 }} />
               </View>
               <View style={styles.topBar}>
                  <View style={styles.topBar}>
                     <Text style={styles.text}>Vibrar</Text>
                     <CheckBox checked={isCheckedVibrar} onPress={handleCheckboxChange} checkedIcon="check-square" uncheckedIcon="square-o" checkedColor="#49454F" />
                  </View>
                  <View style={[styles.topBar, styles.topBarRight]}>
                     <Text style={styles.text}>Color</Text>
                     <CheckBox checked={isCheckedVibrar} onPress={handleCheckboxChange} checkedIcon="check-square" uncheckedIcon="square-o" checkedColor="#49454F" />
                  </View>
               </View>
               <View style={styles.topBar}>
                  <CustomButtonPrimary placeholder={"Eliminar"} addedStyles={styles.button} onClick={() => setDeleted(true)} />
                  <CustomButtonPrimary placeholder={"Guardar"} addedStyles={styles.button} onClick={() => setDisplayOpen(false)} />
               </View>
            </>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
    darkDay: {
        marginVertical: 20,
        backgroundColor: '#79747E',
        minWidth: 40,
        minHeight: 40,
    },
    lightDay: {
        marginVertical: 20,
        backgroundColor: '#FFFFFF',
        minWidth: 40,
        minHeight: 40,
    },
   container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#D9D9D9",
      borderRadius: 14,
      minWidth: "90%",
      margin: 10,
      padding: 20,
   },
   // TEXT
   text: {
      fontSize: 16,
   },
   textAlarm: {
      fontSize: 40,
      alignSelf: "center",
      justifyContent: "center",
   },
   Alarm: {
      alignSelf: "center",
      paddingVertical: 10,
   },
   volumeInput: {
      height: 40,
      minWidth: 150,
   },
   tonoInput: {
      height: 40,
      minWidth: 150,
      paddingHorizontal: 10,
      borderColor: "#49454F",
      borderWidth: 1,
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
      alignItems: "center",
   },
   // TOPBAR
   topBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
   },
   topBarRight: {
      alignSelf: "flex-end",
   },
   topBarTitle: {
      alignSelf: "flex-end",
      alignContent: "flex-end",
      justifyContent: "flex-end",
      alignItems: "flex-end",
   },
   topBarIcons: {
      display: "flex",
      flexDirection: "row",
      alignContent: "flex-end",
      alignSelf: "flex-end",
      height: "auto",
   },
});

export default Alarm;
