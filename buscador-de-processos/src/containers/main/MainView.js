import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getProcessBySearchTerm, submitProcess } from './../../actions/process/ProcessActions';
import ProssesSearchInput from '../../components/common/form/ProssesSearchInput';
import ProcessRegisterDialog from '../../components/process/ProcessRegisterDialog';


class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {DialogOn: false};
    }

    static contextTypes = {
        router: PropTypes.object
    }
    
    handleToogleDialog = () => {
        this.setState(prevState => ({
            DialogOn: !prevState.DialogOn
        }));
    }

    handleProcessSearchTerm = (process) => {
        this.props.getProcessBySearchTerm(process);
        this.context.router.history.push("/processos");
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={24}
                    className={classes.grid}
                >
                    <Grid item xs={12} sm={6}>
                        <div className="headline blue">Busca de Processos</div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProssesSearchInput onClick={this.handleProcessSearchTerm}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <span>Você pode criar um novo processo </span>
                            <Link to="#" style={styles.bottom} onClick={this.handleToogleDialog}>
                                Clicando aqui
                            </Link>
                        </div>
                    </Grid>
                </Grid>
                <ProcessRegisterDialog
                    open={this.state.DialogOn}
                    handleClose={this.handleToogleDialog}
                    handleSave={this.props.submitProcess}
                />
            </Grid>
        )
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        position: "absolute",
        bottom: 0,
        top: 0,
        margin: "auto",
    },
    grid: {
        position: "relative",
        top: "-15%",
        bottom: 0,
        margin: "auto",
    },
    bottom: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#005b95",
        textDecoration: "underline",
    },
});

MainView.propTypes = {
    classes: PropTypes.object.isRequired,
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getProcessBySearchTerm: getProcessBySearchTerm,
            submitProcess: submitProcess
        }, dispatch)
}

export default connect(null, matchDispatchToProps)(withStyles(styles)(MainView));
