import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Menu, Settings} from 'react-native-feather';
import {CardViewWithImage} from 'react-native-simple-card-view';

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor="orange"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <ImageBackground
          source={require('./assets/cat.jpg')}
          style={styles.bgImage}
          imageStyle={{borderBottomRightRadius: 65}}
        ></ImageBackground>
        <Menu stroke="white" width={32} height={32} style={styles.menu} />
        <Settings
          stroke="white"
          width={32}
          height={32}
          style={styles.settings}
        />
        <Text style={styles.hello}>Hello stranger, hope you are well</Text>
      </View>
      <View style={styles.infoArea}>
        <View style={styles.areaA}>
          <Text>Kittens</Text>
        </View>

        <View style={styles.areaB}>
          <FlatList
            horizontal={true}
            data={mediaArray}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <CardViewWithImage
                    width={300}
                    content={item.description}
                    source={{uri: item.thumbnails.w160}}
                    title={item.title}
                    imageWidth={100}
                    imageHeight={100}
                    roundedImage={false}
                    imageMargin={{top: 10}}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    height: '100%',
    paddingTop: 0,
  },
  header: {
    height: 270,
    backgroundColor: 'yellow',
  },
  bgImage: {
    width: '100%',
    height: 270,
  },
  menu: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  settings: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  hello: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  infoArea: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
  },
  areaA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  areaB: {
    flex: 8,
    backgroundColor: 'orange',
    padding: 20,
  },
});