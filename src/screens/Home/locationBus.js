import React, {useEffect, useRef, useState}from 'react';
import { StatusBar, Image, Text, TouchableHighlight, Button, TouchableWithoutFeedback, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import { MapsAPI } from '../../services/config.js';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components';
import color from '../../assets/color';
// import io from 'socket.io-client';
// import {getMyPositionBus, busLoc}  from './servicesBus.js';

const Locations = (props) => {

    const map = useRef();

    // const [maploc, setMapLoc] = useState({
    //     center:{
    //         latitude:57.78825,
    //         longitude:-122.4322,
    //     },
    //     zoom:18,
    //     pitch:0,
    //     altitude:0,
    //     heading:0
    // });

    const [busLoc, setBusLoc] = useState({
        center:{
            latitude:-22.4611,
            longitude:-44.4403,
        },
        zoom:18,
        pitch:0,
        altitude:0,
        heading:0
    });
    const [result,setResult] = useState([]);


    const socket = io('http://192.168.18.2:4000', {
        // jsonp: false,
        transports: ['websocket'],
    });
    
    // socket.connect();
    
    // socket.on('connect', () => {
    //     console.log('socketId: '+ socket.id);
    // });


    useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
        getMyPositionBus();
    },[]);

    useEffect(()=>{
        // console.log('1');
        socket.emit('busLocInvite',busLoc);
        
    },[busLoc]);

    // while(1 > 0){
    //     socket.emit('busLocInvite',busLoc);
    //     setTimeout(function(){}, 500);
    // }

    const getMyPositionBus = (props) => {
        Geolocation.watchPosition(async (info)=>{
            // console.log("COORDENADAS: ",info.coords);
            const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);

            if(geo.results.length > 0){
               const loc = {
                    name:geo.results[0].formatted_address,
                    center:{
                        latitude:info.coords.latitude,
                        longitude:info.coords.longitude
                    },
                    
                    zoom:18,
                    pitch:0,
                    altitude:0,
                    heading:0
                };
                // setMapLoc(loc);
                setBusLoc(loc);
            }
            // console.log(geo.results[0]);  


            },  
            (error)=>{
                ()=>alert("Erro em encontrar sua localização");
            },
            {
                // timeout:2000,
                enableHighAccuracy:true,
                // maximumAge:1000
            }
        );
    }
        // const handleFromClic = () => {
            // export let locBus = {locFrom};
        

    return(
        
 
        <View style={{backgroundColor:'#fff',flex:1}}>
            <StatusBar></StatusBar>
            <MapView
            ref={map}
            style={{flex:1}}
            provider={'google'}
            camera={busLoc}
            >

               {busLoc.center && 
                <Marker //Ícone do ónibus
                coordinate={busLoc.center} 
                anchor={{x: 0.5, y: 0.4}}
                flat={true}
                // rotation={angleCar}
                >
                    <Image
                        source={require('../../assets/images/icons/bus.png')}
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                </Marker>
               }
                
            </MapView>
            
        </View>
      
      
    );
}

export default Locations;