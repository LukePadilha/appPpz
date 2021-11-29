import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Linking, Pressable, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';


export default function App(){
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


  return(
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content'/>
 
      <ScrollView>
      <View style={styles.header}>
        <Image
        source={require('./assets/ppzdourado.jpg')}
        style={{width: 80, height: 80, marginLeft: 155}}
        />    
        <Pressable
          onPress={()=>{ 
            Linking.openURL('https://ppztv.com.br/')
          }}    
        >
          <Ionicons name='globe-outline' size={30} color={'#b89f17'} style={{marginRight: 15, marginTop: 25}}/>
        </Pressable>   
      </View>
 
      <View>   
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://5c483b9d1019c.streamlock.net:443/8058/8058/playlist.m3u8',
          }}
          resizeMode="contain"
          useNativeControls 
          shouldPlay
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
     
      <View>
        <Pressable 
          style={styles.socialMediaBtn}
          onPress={()=>{
            Linking.openURL('https://www.facebook.com/Rede-ppz-116826630173474/')
          }}
        >
        <Ionicons name='logo-facebook' size={35} color='#b89f17' />
        </Pressable>
      </View>
 
      <View>
        <Pressable 
          style={styles.socialMediaBtn}
          onPress={()=>{
            Linking.openURL('https://www.instagram.com/ppztvoficial/')
          }}
        >
        <Ionicons name='logo-instagram' size={35} color='#b89f17' />
        </Pressable>
      </View>
 
      <View>  
        <Pressable 
          style={styles.socialMediaBtn}
          onPress={()=>{
            Linking.openURL('https://www.youtube.com/channel/UCuLNFjg4VJL8_y-fVujZB4w')
          }}  
        >
        <Ionicons name='logo-youtube' size={35} color='#b89f17' />
        </Pressable>
      </View>
 
      <View>  
        <Pressable 
          style={styles.socialMediaBtn}
          onPress={()=>{
            Linking.openURL('https://twitter.com/PPZTV6')
          }}  
        >
        <Ionicons name='logo-twitter' size={35} color='#b89f17' />
        </Pressable>
      </View>
   
      </ScrollView>
    </SafeAreaView>
    
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 2,
    backgroundColor: "#161616",
  },
  header: {
    backgroundColor:'#000',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70
  },
  video: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 16/9,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 15,  
  },
  socialMediaBtn: {
    backgroundColor: '#000',
    marginTop: 25,
    marginLeft: 10,
    alignItems: 'center',
    padding: 15,
    paddingBottom: 20,
    height: 70,
    width: '95%',
    borderRadius: 40,
    elevation: 1,
}
})      
    
