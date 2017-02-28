import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },
    displayText: {
        color: '#ffffff',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#3e606f'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91aa9d'
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Style;
