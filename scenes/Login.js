import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Login extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'steelblue',
                color: 'white'
            }}>

                <View style={{
                    flex: 1, flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <Button

                        onPress={() => {
                            alert('You tapped login!');
                        }}
                        title="Login"
                        color="#FFFFFF"
                    />
                    <Button

                        onPress={() => {
                            alert('You tapped register!');
                        }}
                        title="Register"
                        color="#FFFFFF"
                    />
                </View>
            </View>
        );
    }
}

export default Login;