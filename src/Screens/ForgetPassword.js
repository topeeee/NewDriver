import React from 'react';
import { View, StyleSheet} from 'react-native';
import { forget_password } from '../images/index';
import Text from '../Components/Text';
import SimpleHeader from '../Components/Headers/SimpleHeader';
import LargeHeader from '../Components/Headers/LargeHeader';
import Button from '../Components/Button/Button';
import Input from '../Components/Input';


const ForgetPassword = () => {
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{ marginHorizontal: 25 }}>
                <SimpleHeader />
                <LargeHeader titleImageSource={forget_password} heading={'Forget Password'} />
                <Text style={{ marginVertical: 10, fontSize: 16 }}>{`Please enter your email below to receive your password reset instructions.`}</Text>
                <Input label={'Email Address'} value={'jacksparrow@gmail.com'} style={{ marginVertical: 5 }} />
                <Button text={'RESET PASSWARD'} style={{ marginVertical: 5 }} />
                <Text style={{ textAlign: 'center', marginVertical: 5, color: '#7A869A' }}>{`Back to login`}</Text>
            </View>
        </View >
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
})
