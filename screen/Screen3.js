import { View } from "react-native";

import * as React from 'react';
import { StatusBar, Image, StyleSheet } from "react-native";
import {
  Avatar,
  DataTable,
  Divider,
  Text ,
  FAB, Portal, PaperProvider,
  HelperText, TextInput ,
  IconButton, MD3Colors ,
  List , Menu ,
  ProgressBar ,RadioButton , SegmentedButtons ,Button, Snackbar , Searchbar
} from "react-native-paper";
import { ScrollView } from "react-native";
export default function Screen2() {
    const [value, setValue] = React.useState('first');
    const [state, setState] = React.useState({ open: false });
    const [valueq, setValueq] = React.useState('');
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);
    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  return (
    <PaperProvider>
    <ScrollView contentContainerStyle={styles.container}>
    <Portal>
    <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
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
           
            }
          }}
        />
      </Portal>
      
      <Text style={styles.text}>ProgressBar</Text>
      <View style={styles.containers1}>
      <ProgressBar progress={0.2} color={MD3Colors.error50} />
      <ProgressBar progress={0.9} color={MD3Colors.error50} />
      <ProgressBar progress={0.2} color={MD3Colors.error50} />
      </View>
      <Divider />
      <Text style={styles.text}>RadioButton</Text>
      <View style={styles.containers1}>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="BSIT" value="first" />
      <RadioButton.Item label="BSCS" value="second" />
      <RadioButton.Item label="BSCRIM" value="third" />
      <RadioButton.Item label="BS-ELECT" value="second" />
    </RadioButton.Group>
      </View>
      <Divider />
      <Text style={styles.text}>Searchbar</Text>
      <View style={styles.containers1}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      </View>
      <Divider />
      <Text style={styles.text}>SegmentedButtons</Text>
      <View style={styles.containers}>
      <SegmentedButtons
        value={valueq}
        onValueChange={setValueq}
        buttons={[
          {
            value: 'walk',
            label: 'JAVA',
          },
          {
            value: 'train',
            label: 'C#',
          },
          { value: 'drive', label: 'C++' },
        ]}
      />
      </View>
      <Divider />
      <Text style={styles.text}>Snackbar</Text>
      <View style={styles.containers1}>
      <Button mode="outlined" onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
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
