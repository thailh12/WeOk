import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { MapView } from 'expo';

const { Marker } = MapView;
const { width, height } = Dimensions.get('screen');
import container from '../containers/container'
import { Subscribe } from 'unstated'

class MarkerScreen extends React.Component {

  renderMap({ me, following }) {
    return (
      <View style={styles.map}>
        <MapView
          style={{ flex: 1, height: height * 0.8, width }}
          showsMyLocationButton
          initialRegion={{
            latitude: 21.003817,
            longitude: 105.847747,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
        >
          <Marker coordinate={me.latlng}>
            <View style={styles.myMarker}>
              <View style={styles.myMarkerDot} />
            </View>
          </Marker>

          {following.map((people, index) => (
            <Marker
              styles={styles.myMarkerDot}
              key={index}
              coordinate={people.latlng}
              title={people.name}
              description={people.phone}
            />
          ))}
        </MapView>
      </View>
    )
  }

  render() {
    return (
      <Subscribe to={[container]}>
        {
          container => {
            const { me, following } = container.state
            return (
              <View>
                {this.renderMap({ me, following })}
              </View>
            )
          }
        }
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  },
  myMarkerDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#3353FB'
  }
});

export default MarkerScreen;
