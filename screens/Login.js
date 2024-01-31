import {View , Text , StyleSheet, Image, TextInput, ActivityIndicator, Button , KeyboardAvoidingView, Touchable, TouchableOpacity} from 'react-native'
import React, {useState , useEffect} from 'react' 
import { FIREBASE_AUTH } from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';



const Login = ()=> {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    const navigation = useNavigation();



    const signIn = async () => {
        setLoading (true)
        try {
        const response = await signInWithEmailAndPassword(auth, email, pass);
        console.log (response);
        } catch (error) {
        console.log (error);
        alert('Sign in failed: ' + error.message);
        } finally {
        setLoading (false) ;
        }
    }

    const signUp = async () => {
        setLoading (true)
        try {
        const response = await createUserWithEmailAndPassword(auth, email, pass);
        console.log (response);
        alert('Check your emails!');
        } catch (error) {
        console.log (error);
        alert('Sign in failed: ' + error.message);
        } finally {
        setLoading (false) ;
        }
    }


    return(
        <View style={styles.container}>
            <Image style={styles.imageS}  source={require('C:\\Users\\DELL\\OneDrive\\Documents\\REACT-NATIVE\\Fitness-App\\assets\\logo.png')}/>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput style={styles.input}
                value={email}
                placeholder="Email"
                autoCapitalize='none'
                onChangeText={(text) => setEmail(text)}
                >
                </TextInput>

                <TextInput style={styles.input}
                value={pass}
                placeholder="Password"
                autoCapitalize='none'
                onChangeText={(text) => setPass(text)}
                secureTextEntry={true}
                >
                </TextInput>

                {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                    <TouchableOpacity style={styles.btn} onPress={signIn}>
                        <Text style={styles.txt}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={signIn}>
                        <Text style={styles.txt}>Creat Account</Text>
                    </TouchableOpacity>
                    </>
                )}

            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal:20,
      },

      input:{
        marginVertical:4,
        height:50,
        borderWidth:1,
        borderRadius:4,
        padding:10,
        backgroundColor:'#fff',
      }, 

      btn: {
        width:200,
        height:40,
        borderRadius:30,
        marginTop:15,
        backgroundColor: "#efb09a",
        justifyContent:'center',
        alignItems:'center',
        marginLeft:90,
      },

      imageS: {
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
      },

      txt: {
        fontWeight:'700',
      }
})