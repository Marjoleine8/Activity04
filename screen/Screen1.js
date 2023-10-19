import { View } from "react-native";

import * as React from 'react';
import { StatusBar, Image, StyleSheet } from "react-native";
import {
  Avatar,
  Badge,
  Banner,
  Button,
  Card,
  IconButton,
  Checkbox,
  Chip,
  Divider,
  Text ,
  FAB, Portal, PaperProvider
} from "react-native-paper";
import { ScrollView } from "react-native";
export default function Screen1() {

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;

  const [visible, setVisible] = React.useState(false);

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      name: "Cupcake",
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: "Eclair",
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: "Frozen yogurt",
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <PaperProvider>
    <ScrollView contentContainerStyle={styles.container}>
    <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Fix it",
            onPress: () => setVisible(false),
          },
          {
            label: "Learn more",
            onPress: () => setVisible(false),
          },
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4",
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}
      >
        There was a problem processing a transaction on your credit card.
      </Banner>
      <StatusBar backgroundColor="#f3eef5" barStyle="dark-content" />
      <Text style={styles.text}>Avatar</Text>
      <View style={styles.containers}>
        <Avatar.Icon size={50} icon="heart" />
        <Avatar.Image size={50} source={require("../assets/favicon.png")} />
        <Avatar.Text size={50} label="BISU" />
      </View>
      <Divider />
      <Text style={styles.text}>Badge</Text>
      <View style={styles.containers}>
        <Badge>12</Badge>
        <Badge>40</Badge>
        <Badge>20</Badge>
      </View>
      <Divider />
      <Text style={styles.text}>Banner</Text>
      <View style={styles.containers}>
        <Button icon="home" mode="outlined" onPress={() => setVisible(true)}>
         Show Banner
        </Button>
        
      </View>
      <Divider />
      <Text style={styles.text}>Card</Text>
      <View style={styles.containers1}>
        <Card.Title
          title="Record"
          subtitle="02/30/23"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => (
            <IconButton {...props} icon="heart" onPress={() => {}} />
          )}
        />
        <Card.Title
          title="Received"
          subtitle="02/30/23"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
        />
      </View>
      <Divider />
      <Text style={styles.text}>Checkbox</Text>
      <View style={styles.containers}>
        <Checkbox.Item label="$10" status="unchecked" />
        <Checkbox.Item label="$50" status="checked" />
        <Checkbox.Item label="$80" status="unchecked" />
      </View>
      <Divider />
      <Text style={styles.text}>Chip</Text>
      <View style={styles.containers}>
        <Chip icon="information"   mode="outlined" onPress={() => console.log("Pressed")}>
          Info
        </Chip>
        <Chip
          icon="heart"
        
          onPress={() => console.log("Pressed")}
        >
          Follow
        </Chip>
        <Chip icon="home"   mode="outlined" onPress={() => console.log("Pressed")}>
          Home
        </Chip>
      </View>
     
    </ScrollView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 5,
    flexGrow: 1,
    gap: 10,
  
    
  },
  containers: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  containers1: {
    backgroundColor: "#fff",
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
   textAlign: 'center',
   backgroundColor: '#21005d'
  },
});
