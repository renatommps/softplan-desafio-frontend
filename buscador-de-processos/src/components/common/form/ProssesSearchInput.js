import React, { Component } from 'react';
import Input from "@material-ui/core/Input";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from 'prop-types'


const initialState = {
    processInfo: ""
};

class ProssesSearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }
    
    static contextTypes = {
        router: PropTypes.object
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.onClick(this.state.processInfo);
        }
    }

    handleInput = (event) => {
        this.setState({
            processInfo: event.target.value
        }) 
    }

    render() {
        return (
            <Input
                style={styles}
                id="input-with-icon-adornment"
                placeholder="Pesquise por uma informação do processo"
                disableUnderline={true}
                autoFocus={true}
                onInput={this.handleInput}
                onKeyPress={this.handleKeyPress}
                fullWidth={true}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton  aria-label="search"  onClick={() => this.props.onClick(this.state.processInfo)}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        )
    }
}

const styles = {
    border: '1px solid #ced4da'
}

export default ProssesSearchInput
