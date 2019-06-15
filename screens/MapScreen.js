import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { MapView } from 'expo';
import { FontAwesome, Foundation } from '@expo/vector-icons';

const { Marker } = MapView;
import TodoList from '../components/TodoList'
const { width, height } = Dimensions.get('screen');
import container from '../containers/container'
import { Subscribe } from 'unstated'

class Campings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabCurrent: 'warning'
    };
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
        </View>
          {this.renderTabs()}
      </View>
    )
  }

  renderMap({ me }) {
    return (
      <View style={styles.map}>
        <MapView
          style={{ flex: 1, height: height * 0.8, width }}
          showsMyLocationButton
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        >
          <Marker coordinate={me.latlng}>
            <View style={styles.myMarker}>
              <View style={styles.myMarkerDot} />
            </View>
          </Marker>

          {/* {mapSpots.map(marker => (
            <Marker
              key={`marker-${marker.id}`}
              coordinate={marker.latlng}
            >
              {campingMarker(marker)}
            </Marker>
          ))} */}
        </MapView>
      </View>
    )
  }

  renderContent({ me }) {
    if(this.state.tabCurrent === 'warning') {
      return (
        <Text>Warning</Text>
      )
    } else if (this.state.tabCurrent === 'todo') {
      return (
        <View style={styles.wrapTodo}>
          <TodoList />
        </View>
      )
    } else if (this.state.tabCurrent === 'safezone') {
      return (
        <View>
          { this.renderMap({ me }) }
        </View>
      )
    }
  }

  handleTabWarning() {
    this.setState({
      tabCurrent: 'warning'
    })
  }

  handleTabTodo() {
    this.setState({
      tabCurrent: 'todo'
    })
  }

  handleTabSafeZone() {
    this.setState({
      tabCurrent: 'safezone'
    })
  }

  renderTabs() {
    return (
      <View style={styles.tabs}>
        <View
          style={[
            styles.tab,
            this.state.tabCurrent === 'warning' ? styles.activeTab : null
          ]}
        >
          <Text
            style={[
              styles.tabTitle,
              this.state.tabCurrent === 'warning' ? styles.activeTabTitle : null
            ]}
            onPress={() => this.handleTabWarning()}
          >
            Warning
          </Text>
        </View>
        <View
          style={[
            styles.tab,
            this.state.tabCurrent === 'todo' ? styles.activeTab : null
          ]}
        >
          <Text
            style={[
              styles.tabTitle,
              this.state.tabCurrent === 'todo' ? styles.activeTabTitle : null
            ]}
            onPress={() => this.handleTabTodo()}
          >
            To Do List
          </Text>
        </View>
        <View
          style={[
            styles.tab,
            this.state.tabCurrent === 'safezone' ? styles.activeTab : null
          ]}
        >
          <Text
            style={[
              styles.tabTitle,
              this.state.tabCurrent === 'safezone' ? styles.activeTabTitle : null
            ]}
            onPress={() => this.handleTabSafeZone()}
          >
            Safe Zone
          </Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Subscribe to={[container]}>
        {
          container => {
            const { me } = container.state
            return (
              <SafeAreaView style={styles.container}>
                {this.renderHeader()}
                <ScrollView style={styles.container}>
                  {this.renderContent({ me })}
                </ScrollView>
              </SafeAreaView>
            )
          }
        }
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapTodo: {
    paddingHorizontal: 10,
  },
  headerContainer: {
    top: 0,
    height: height * 0.085,
    width: width,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.15,
    paddingHorizontal: 10,
  },
  location: {
    height: 24,
    width: 24,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7657',
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  rvMarker: {
    backgroundColor: '#FFBA5A',
  },
  tentMarker: {
    backgroundColor: '#FF7657',
  },
  settings: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    flex: 1,
    paddingHorizontal: 14,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tab: {
    paddingHorizontal: 14,
    marginHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  activeTab: {
    borderBottomColor: '#FF7657',
  },
  activeTabTitle: {
    color: '#FF7657',
  },
  map: {
    flex: 1,
  },
  camping: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#A5A5A5',
    borderBottomWidth: 0.5,
    padding: 20,
  },
  campingDetails: {
    flex: 2,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  campingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
  },
  campingImage: {
    width: width * 0.30,
    height: width * 0.25,
    borderRadius: 6,
  },
  myMarker: {
    zIndex: 2,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 83, 251, 0.2)'
  },
  myMarkerDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#3353FB'
  }
});

export default Campings;
