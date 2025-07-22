import { Appearance, StyleSheet,Platform,SafeAreaView ,ScrollView,FlatList,View,Text,Image
} from "react-native";
import { Colors } from "@/constants/Colors";
import MENU_IMAGES from `@/constants/MenuImages`;

export default function MenuScreen()
    {
        const ColorScheme = Appearance.getColorScheme();
        const theme = ColorScheme === 'dark' ? Colors.dark : Colors.light;
        const styles = createStyles(theme, ColorScheme);
        const Container   =Platform.OS === `web`? ScrollView : SafeAreaView;


        return (
            <Container>
                <FlatList data={MENU_IMAGES}
                keyExtractor={(item) => item.id.toString()}
                renderItem = {({item}) =>(
                    <View>
                        <View>
                            <Tezt></Tezt>
                            <Text></Text>
                        </View>
                        <Image source ={MENU_IMAGES[item.id-1]}></Image>
                    </View>
    
                )}

        
                ></FlatList>
            </Container>
        );
    }

    function createStyles(theme,colorScheme) {
        return StyleSheet.create() 
        

    }
