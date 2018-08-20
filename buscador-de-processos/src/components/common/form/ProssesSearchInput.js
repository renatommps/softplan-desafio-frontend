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
            this.handleClick();
        }
    }

    handleClick = () => {
        console.log("clicou: " + this.state.processInfo.trim());
        this.props.onClick(this.state.processInfo.trim());
        this.context.router.history.push("/processos");
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
                        <IconButton  aria-label="search"  onClick={this.handleClick}>
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
