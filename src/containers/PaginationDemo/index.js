import { View, Text, FlatList,StyleSheet, ActivityIndicator, Dimensions,TouchableOpacity,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import Data from 'library/data.json';
import Icons from 'library/Icons';
const { width } = Dimensions.get('window')

export default function PaginationDemo(props) {
    const [refreshing, setRefreshing] = useState(false)
    const [pageNo, setPageNo] = useState(1)
    const [paginationData,setpaginationData] = useState([])
    const getData = (page) => {
        const dataCopy = [...Data]
        const skip = page - 1 * 20;
        const data = dataCopy.splice(skip, 20)
        setTimeout(() => {
            setpaginationData([...paginationData,...data])
            setRefreshing(false)
        },3000)
    }
    useEffect(() => {
        getData(1)
    }, [])
    const renderFooter = () => {
        if (refreshing && paginationData.length <= Data.length) {
          return <ActivityIndicator size="large" />;
        } else {
          return null;
        }
      };
    
    
    const fetchMore = () => {
        if (refreshing || paginationData.length >= Data.length){
          return null;
        }
        setPageNo(pageNo + 1);
        setRefreshing(true)
        getData(pageNo + 1)
      };
    const renderItem = (item, index) => {
        return(
            <View style={{ backgroundColor: '#dedede', marginVertical: 10, maxWidth: width / 1.07, padding: 5, alignItems: 'center', alignSelf: 'flex-start' }}>
                <Text>{index}</Text>
                {/* <Text>{item.name}</Text> */}
            </View>
        )
      }
  return (
      <View style={{ paddingHorizontal: width/18.75,flex:1 }}>
          <TouchableOpacity
                style={styles.menu}
                onPress={() => props.navigation.openDrawer()}>
                <Image
                    source={Icons.Menu}
                />
            </TouchableOpacity>
        <FlatList
          data={paginationData}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          refreshing={refreshing}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: width / 1.44,
        borderBottomLeftRadius: width / 9.75,
        borderBottomRightRadius: width / 9.75,
        backgroundColor: '#2C8FF2',
        flexDirection: 'row',
    },
    menu: {
        width: width / 21.66,
        height: width / 32.5,
        marginTop: width / 9.75,
        marginLeft: width / 26,
    },
    logo: {
        marginTop: width / 9.75,
        marginLeft: width / 4.33
    }
})