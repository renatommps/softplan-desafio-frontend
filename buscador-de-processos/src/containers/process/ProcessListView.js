import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProcessCard from '../../components/process/ProcessCard'
import ProcessInfo from '../../components/process/ProcessInfo' 
import { getProcessBySearchTerm, selectProcess, submitProcess, deleteProcessById } from './../../actions/process/ProcessActions';
import ProssesSearchInput from '../../components/common/form/ProssesSearchInput';
import ProcessRegisterDialog from '../../components/process/ProcessRegisterDialog';


class ProcessListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogOn: false,
            selectedProcessIndex: null
        };
    }

    handleToogleDialog = () => {
        this.setState(prevState => ({
            dialogOn: !prevState.dialogOn
        }));
    }

    handleSelectProcess = (index, process) => {
        this.setState(prevState => ({
            selectedProcessIndex: prevState.selectedProcessIndex === index ? null : index
        }));
        this.props.selectProcess(process);
    }

    handleDeleteProcess = () => {
        this.props.deleteProcessById(this.props.selectedProcess.id)
        this.props.selectProcess(null);
        this.setState(prevState => ({
            selectedProcessIndex: null
        }));
    }
    
    createProcessList = () => {
        if ( (((this.props || {}).processes || {}).data || {}).constructor !== Array ) {
            return null
        }
        
        return this.props.processes.data.map( (process, index) => {
            return (
                <ProcessCard 
                    key={process.id+ '-' + index}
                    process={process}
                    selected={index === this.state.selectedProcessIndex}
                    handleClick={() => this.handleSelectProcess(index, process)}
                />
            )
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid container item xs={12} direction="row" justify="center" spacing={16}>

                    {/* HEADER - primeira linha*/}
                    <Grid container item xs={12} direction="row" justify="center" spacing={16}>
                        <Grid item xs={1} zeroMinWidth>
                            <Grid item xd={12}>
                                <div className="title">Busca de</div>
                                <div className="title">processos</div>
                            </Grid>
                        </Grid>

                        <Grid item xs={11}>
                            <Grid container item xs={12} direction="row" spacing={16}>
                                <Grid item xs={5}>
                                    <Paper>
                                        <ProssesSearchInput onClick={this.props.getProcessBySearchTerm}/>
                                    </Paper>
                                </Grid>

                                <Grid item xs={7}>
                                    <Paper>
                                        <Link to="#" onClick={this.handleToogleDialog}>
                                            NOVO
                                        </Link>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* BODY - segunda linha*/}
                    <Grid container item xs={12} direction="row" justify="center" spacing={16}>

                        {/* PLACEHOLDER - ajuda no alinhamento das colunas*/}
                        <Grid item xs={1}>
                        </Grid>

                        <Grid item xs={11}>
                            <Grid container item xs={12} direction="row" spacing={16}>
                                <Grid item xs={this.state.selectedProcessIndex !== null ? 5 : 12}>
                                    <Paper>{this.createProcessList()}</Paper>
                                </Grid>

                                {this.state.selectedProcessIndex !== null &&
                                <Grid item xs={7}>
                                    <ProcessInfo
                                        deleteProcess={this.handleDeleteProcess}
                                        process={this.props.selectedProcess}
                                    />
                                </Grid>
                                }
                            </Grid>       
                        </Grid>
                    </Grid>
                </Grid>
                <ProcessRegisterDialog
                    open={this.state.dialogOn}
                    handleClose={this.handleToogleDialog}
                    handleSave={this.props.submitProcess}
                />
            </Grid>
        )
    }
}

const styles = {
    root: {
        flexGrow: 1,
        padding: 25,
    },
    cardContent: {
        padding: 10,
    },
    gridItemText: {
        textAlign: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        minWidth: 0,
    },
    cardAction: {
        padding: 0,
    },
};

function mapStateToProps(state) {
    return {
        processes: state.processes,
        selectedProcess: state.activeProcess
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectProcess: selectProcess,
            submitProcess: submitProcess,
            getProcessBySearchTerm: getProcessBySearchTerm,
            deleteProcessById: deleteProcessById
        }, dispatch)
}

ProcessListView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(
    withStyles(styles)(ProcessListView)
);
