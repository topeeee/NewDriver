import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Modal } from "react-native";
import { Text, Button } from '../../Components';
import { bus, my_location, green_circle, arrow_left, arrow_down } from "../../images";
import SelectPassenger from './SelectPassenger'
import SetPassengerModal from './SetPassengerModal'
import RBSheet from "react-native-raw-bottom-sheet";
import SignUpUser from './SignUpUser'

const OnlineBottomContent = () => {

    const [isShowBusStopsList, setIsShowBusStopsList] = useState(true)
    const [isShowSelectPassenger, setIsShowSelectPassenger] = useState(true)
    const [isShowSetPassenger, setIsShowSetPassenger] = useState(false)
    const [isShowPassengerModal, setIsShowPassengerModal] = useState(false)
    const [isShowSignUpUser, setIsShowSignUpUser] = useState(false)


    const renderBusStopsList = () => {
        return (<View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#000', marginHorizontal: -20, justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                <Text style={{ flex: 2, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>BUS Stops</Text>
                <Text style={{ flex: 1, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Drop</Text>
                <Text style={{ flex: 1, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Pick</Text>
            </View>
            {[1, 1, 1].map(x => (
                <View style={{ flexDirection: 'row', height: 60, borderWidth: 0, alignItems: 'center' }}>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <Text style={{ width: 25, fontSize: 16 }}>01</Text>
                        <Text style={{ fontSize: 16 }}>Akinloye</Text>
                    </View>
                    <Text style={{ flex: 1, fontSize: 14, flex: 1, textAlign: 'center', marginHorizontal: 10, paddingVertical: 7, borderRadius: 5, backgroundColor: '#FF0000', color: '#fff', fontWeight: 'bold', }}>0</Text>
                    <Text onPress={() => { setIsShowSelectPassenger(true); setIsShowPassengerModal(true) }} style={{ flex: 1, fontSize: 14, flex: 1, textAlign: 'center', marginHorizontal: 10, paddingVertical: 7, borderRadius: 5, backgroundColor: '#679C4C', color: '#fff', fontWeight: 'bold', }}>PICK</Text>
                </View>
            ))}
        </View>)
    }

    const renderPickUpDetails = () => {
        return (
            <View style={{ borderWidth: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F7F7', borderRadius: 10, paddingHorizontal: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: 'https://www.pngrepo.com/png/26995/180/avatar.png' }} style={{ width: 50, height: 50, borderRadius: 5 }} />
                        <View style={{ flex: 1, borderWidth: 0, marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 18 }}>Akpenvwoghene </Text>
                            <Text style={{ fontSize: 12 }}>Trip ID : 0001</Text>
                        </View>
                        <Text style={{ fontSize: 20 }}>₦240.00</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#BEC2CE' }}>PICK UP BUS STOP</Text>
                    <Text style={{ fontSize: 18, marginVertical: 5 }}>Bola ilori</Text>
                </View>
                <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#BEC2CE' }}>DROP OFF</Text>
                        <Text style={{ fontSize: 18, marginVertical: 5 }}>Nepa</Text>
                    </View>
                    <Image source={arrow_down} />
                </View>
                <View style={{ width: '50%', alignSelf: 'center', marginVertical: 10 }}>
                    <Button text={'Pick'} />
                </View>
            </View>
        )
    }

    const renderPickUpByPassenger = () => {
        return (
            <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#000', paddingHorizontal: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Image source={arrow_left} />
                </View>
                <View>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Pick up Passenger</Text>
                </View>
                <View />
            </View>
        )
    }

    const showSetPassengerModal = () => {
        setIsShowSelectPassenger(false)
        setIsShowSetPassenger(true)
    }
    const showSignUpUser = () => {
        setIsShowSelectPassenger(false)
        setIsShowSetPassenger(false)
        setIsShowSignUpUser(true)
    }

    const dismiss = () => {
        setTimeout(() => {
            setIsShowSetPassenger(false)
            setIsShowSignUpUser(false)
            setIsShowPassengerModal(false)
        }, 200)
    }
    const renderSelectPassenger = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowPassengerModal}>
                {isShowSelectPassenger && <SelectPassenger showSetPassengerModal={showSetPassengerModal} />}
                {isShowSetPassenger && <SetPassengerModal showSignUpUser={showSignUpUser} />}
                {isShowSignUpUser && <SignUpUser dismiss={dismiss} />}
            </Modal>
        )
    }
    console.log('isShowPassengerModal', isShowSelectPassenger)
    console.log('isShowSetPassenger', isShowSetPassenger)
    console.log('isShowPassengerModal', isShowPassengerModal)
    console.log('isShowSignUpUser', isShowSignUpUser)


    return (
        <View style={{ backgroundColor: '#fff', flex: 1, borderRadius: 20, }}>
            {renderPickUpByPassenger()}
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: '#000', marginVertical: 10, fontSize: 20, fontWeight: 'bold', }}  >Good afternoon, Abayomrunkoje</Text>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Image source={bus} />
                    <Text style={{ color: '#000', fontSize: 16, flex: 1, marginHorizontal: 10 }}>AA79 - AKK</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <Text style={{ fontSize: 16 }}>Zone:</Text>
                    <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 16 }}>01</Text>
                    <Text style={{ marginHorizontal: 10 }}>|</Text>
                    <Text style={{ fontSize: 16 }}>Area:</Text>
                    <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 16 }}>Ikeja</Text>
                </View>
                <Text style={{ fontSize: 16 }}>Rout:</Text>
                <Text style={{ marginVertical: 5, fontSize: 16, flexDirection: 'row' }}>Opebi: <Image source={my_location} /> -------------- <Image source={my_location} /> Oluyole, Ojota</Text>
                <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image source={green_circle} />
                    <Text style={{ fontSize: 14, marginHorizontal: 5 }}>Current Bus Stop : Bola llori</Text>
                    <View style={{ backgroundColor: '#679C4C', paddingHorizontal: 10, paddingVertical: 7, borderRadius: 6 }}>
                        <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>3 Seats Vacant</Text>
                    </View>
                </View>
                {isShowPassengerModal && renderSelectPassenger()}
                {isShowBusStopsList ? renderBusStopsList() : null}
            </View>
        </View>
    )
}
export default OnlineBottomContent