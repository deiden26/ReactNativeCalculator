import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

// Define the input buttons to display in the calculator
const inputButtons = [
    ['AC', '/', '*', 'DEL'],
    ['7', '8', '9', '%'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '( )', '=']
];

class ReactCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayText: ''
        };
    }
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.displayText}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }

    /**
     * For each row in 'inputButtons', create a row View and create an input button for each
     * input in the row
     */
    _renderInputButtons() {
        var views = [];

        for (var r = 0; r < inputButtons.length; r++) {
            var row = inputButtons[r];

            var inputRow = [];
            for (var i = 0; i < row.length; i++) {
                var input = row[i];
                inputRow.push(
                    <InputButton
                        value={input}
                        highlight={this.state.selectedSymbol === input}
                        onPress={this._onInputButtonPressed.bind(this, input)}
                        key={r + '-' + i}
                    />
                );
            }

            views.push(<View style={Style.inputRow} key={'row-' + r}>{inputRow}</View>);
        }

        return views;
    }

    _onInputButtonPressed(input) {
        var displayText = this.state.displayText
        if (displayText === 'ERROR') {
            displayText = '';
        }
        switch(input) {
            case 'AC':
                displayText = '';
                break;
            case 'DEL':
                displayText = displayText.substring(0, displayText.length -1);
                break;
            case '=':
                try {
                    displayText = eval(displayText);
                    if (displayText === Infinity ||
                        displayText === -Infinity ||
                        isNaN(displayText)
                    ) {
                        displayText = 'ERROR';
                    }
                }
                catch (error) {
                    displayText = 'ERROR';
                }
                break;
            case "( )":
                var lastInput = displayText.substring(displayText.length - 1);
                var openParenCount = displayText.split('(').length - 1;
                var closedParanCount = displayText.split(')').length - 1;
                if (openParenCount <= closedParanCount ||
                    (
                        lastInput !== '.' &&
                        lastInput !== ')' &&
                        isNaN(parseInt(lastInput))
                    )
                ) {
                    displayText = displayText + '(';
                } else {
                    displayText = displayText + ')';
                }
                break;
            default:
                displayText = displayText + input;
        }

        this.setState({
            displayText: displayText
        });
    }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
