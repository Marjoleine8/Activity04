import { View } from "react-native";

import * as React from 'react';
import { StatusBar, Image, StyleSheet } from "react-native";
import {
  DataTable,
  Divider,
  Text ,
  FAB, Portal, PaperProvider,
  HelperText, TextInput ,
  IconButton, MD3Colors ,
  List , Menu 
} from "react-native-paper";
import { ScrollView } from "react-native";
export default function Screen2() {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);
 
   const hasErrors = () => {
     return !text.includes('@');
   };
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
      
      <Text style={styles.text}>DataTable</Text>
      <View style={styles.containers}>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
      </View>
      <Divider />
      <Text style={styles.text}>Divider</Text>
      <View style={styles.containers1}>
      <Text>APPLE</Text>
    <Divider />
    <Text>BANANA</Text>
    <Divider />
    <Text>GUAVA</Text>
    <Divider />
    <Text>STRAWBERRY</Text>
   
      </View>
      <Divider />
      <Text style={styles.text}>HelperText</Text>
      <View style={styles.containers1}>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
      </View>
      <Divider />
      <Text style={styles.text}>IconButton</Text>
      <View style={styles.containers}>
      <IconButton
    icon="home"
    iconColor={MD3Colors.error10}
    size={20}
    onPress={() => console.log('Pressed')}
  />
   <IconButton
    icon="home"
    mode="outlined"
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
   <IconButton
    icon="home"
    iconColor={MD3Colors.error10}
    size={20}
    onPress={() => console.log('Pressed')}
  />
      </View>
      <Divider />
      <Text style={styles.text}>List</Text>
      <View style={styles.containers1}>
      <List.Item
    title="Received"
    description="09/20/23"
    left={props => <List.Icon {...props} icon="folder" />}
    right={props => <List.Icon {...props} icon="heart" />}
  />
      </View>
      <Divider />
      <Text style={styles.text}>Menu</Text>
      <View style={styles.containers1}>
      <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
    <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
    <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
    <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
    <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
      </View>
    </ScrollView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 5,
    gap: 10
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
