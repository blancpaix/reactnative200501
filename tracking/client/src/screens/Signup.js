import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const Signup = ({ navigation }) => {
    const { state, clearMessage, signup } = useContext(AuthContext);

    return (
        <SafeAreaView style={st.container} >
            <AuthForm 
                headerText="Tracking 가입"
                errorMessage={state.errorMessage}
                submitBtnText="회원가입"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="이미 회원이면 로그인 ㄱㄱ 여기 누르셈"
            />
        </SafeAreaView>
    )
};

Signup.navigationOptions = () => {
    return {
        headerShown : false
    }
};

const st = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center'
    }
});

export default Signup;