import * as React from 'react'
import { Text, View, Button, Image} from 'react-native'
import auth from '@react-native-firebase/auth'
import styled from '@emotion/native';


export default function MyPagePage (){
    const user = auth().currentUser;
    return (
        <View>
            <Text>{user?.displayName}</Text>
            <Text>{user?.email}</Text>
            <Photo source={{
          uri: user?.photoURL,
        }}/>
            
            <View>
                <Button title="logout" onPress={() => auth().signOut()}/>
            </View>
        </View>
    )
}

const Photo = styled(Image)`
 width: 100px;
 height: 100px;
 border-radius: 50px;
`