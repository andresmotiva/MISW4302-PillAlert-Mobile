import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View, Slider, Switch } from 'react-native';
import { CheckBox } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';

import CustomButtonPrimary from './CustomButtonPrimary';
import ProfileIconCircle from "./ProfileIconCircle";
import CustomTitleSmall from './CustomTitleSmall';
import CustomInput from './CustomInput';

const CreateAlarm = ({ visible, onClose }) => {
    const [volume, setVolume] = useState(0);
    const [isCheckedVibrar, setIsCheckedVibrar] = useState(false);

    function handleVolumeChange(value) {
        setVolume(value);
    }

    function handleCheckboxChange() {
        setIsCheckedVibrar(!isCheckedVibrar);
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    
    return (
        <Modal visible={visible} transparent>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <TouchableWithoutFeedback onPress={onClose}>
                        <View style={styles.closeButton}>
                            <Ionicons name="ios-arrow-back" size={24} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <CustomTitleSmall placeholder={'Crear Alarma'} />
                        <View style={styles.topBar}>
                        <Text style={styles.text}>Option 1</Text>
                        <View style={styles.switchContainer}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <Text style={styles.text}>Option 2</Text>
                        </View>
                        <View style={styles.topBar}>
                            <Text style={styles.text}>Nombre</Text>
                            <CustomInput placeholder={'Desayuno'} addedStyles={styles.input} />
                        </View>
                        <View style={styles.topBar}>
                            <Text style={styles.text}>Hora</Text>
                            <CustomInput placeholder={'08:00 am'} addedStyles={styles.input} />
                        </View>
                        <Text style={styles.text}>Repetición</Text>
                        <View style={styles.topBar}>
                            <ProfileIconCircle placeholder={"D"} extraStyles={styles.darkDay} />
                            <ProfileIconCircle placeholder={"L"} extraStyles={styles.lightDay} />
                            <ProfileIconCircle placeholder={"M"} extraStyles={styles.lightDay} />
                            <ProfileIconCircle placeholder={"M"} extraStyles={styles.lightDay} />
                            <ProfileIconCircle placeholder={"J"} extraStyles={styles.lightDay} />
                            <ProfileIconCircle placeholder={"V"} extraStyles={styles.lightDay} />
                            <ProfileIconCircle placeholder={"S"} extraStyles={styles.darkDay} />
                        </View>
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
                        <CustomButtonPrimary placeholder={"Guardar"} addedStyles={styles.button} onClick={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
    },
    closeButton: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
        width: 40,
        height: 40,
    },
    input: {
        width: 200,
        height: 30,
        borderRadius: 5,
        borderColor: '#79747E',
        marginTop: 0,
    },
    button: {
        width: 200,
        alignSelf: 'center'
    },
    darkDay: {
        marginVertical: 20,
        backgroundColor: '#79747E',
        minWidth: 40,
        minHeight: 40,
    },
    lightDay: {
        marginVertical: 20,
        backgroundColor: '#D9D9D9',
        minWidth: 40,
        minHeight: 40,
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
        marginBottom: 20,
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
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: "90%",
        margin: 10,
        padding: 20,
    },
});

export default CreateAlarm;
