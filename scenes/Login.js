import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
    Button: {
        titleStyle: {
            color: '#EC2969',
        },
    },
};

class Login extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#FBFCEA',
                color: 'white'
            }}>

                <View style={{
                    flex: 3, flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <Image source={require('../images/logo.jpg')} />
                </View>
                <View style={{
                    flex: 1, flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }} >

                    <Button

                        onPress={() => {
                            alert('You tapped login!');
                        }}
                        titleStyle={{ color: '#EC2969' }}
                        title="Login"
                        type="outline"
                    />
                    <Button

                        onPress={() => {
                            alert('You tapped register!');
                        }}
                        titleStyle={{ color: '#EC2969' }}
                        title="Register"
                        type="outline"
                    />
                </View>
            </View>
        );
    }
}

export default Login;