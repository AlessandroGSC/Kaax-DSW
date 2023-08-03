import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';
import Config from 'react-native-config';
import { URL_API } from '../utils/enviroments';
export const PostUserApi = async (data) => {
    try {
        const response = await axios.post(URL_API, data)
        return response;
    } catch (error) {
        console.log("error en la api",error)
        return {response: null, error: error.message}
    }
}