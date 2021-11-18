import * as React from 'react';
import MyPage from '../screens/Mypage'
import UserInformation from '../screens/UserInformation'
import NickName from '../screens/NickName'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MyPageNavigation(){

    return (
        <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
            <Stack.Screen name="Mypage" component={MyPage} />
            <Stack.Screen name="UserInformation" component={UserInformation} />
            <Stack.Screen name="NickName" component={NickName}/>
        </Stack.Navigator>
    )
}