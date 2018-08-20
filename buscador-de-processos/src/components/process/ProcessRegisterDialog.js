import React,{ Component } from  'react'
import PropTypes from "prop-types";
import { reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import _ from 'lodash'


const initialState = {
    descricao: "",
    assunto: "",
    interessados: [],
    novoInteressado: ""
};

class ProcessRegisterDialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSave(_.omit(this.state,'novoInteressado'));
        this.props.handleClose();
    }

    renderSubjectField = () => (
        <TextField
            margin="dense"
            id="assunto"
            label="Assunto"
            type="text"
            fullWidth
        />
    );

    renderInterestedField = () => (
        <TextField
            margin="dense"
            id="interessados"
            label="interessados"
            type="text"
            fullWidth
            multiline
            rowsMax="4"
            InputProps={{
                readOnly: true,
                disableUnderline: true
            }}
        />
    );

    renderNewInterestedField = () => (
        <TextField
            margin="dense"
            id="descricao"
            label="Novo interessado"
            type="text"
            fullWidth
        />
    );

    renderDescriptiondField = () => (
        <TextField
            margin="dense"
            id="descricao"
            label="Descrição"
            type="text"
            fullWidth
        />
    );
    handleAddNewInterested = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            interessados: [...prevState.interessados, prevState.novoInteressado],
            novoInteressado: ""
        }))
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        }) 
    }

    render() {
        const { classes, open, handleClose } = this.props;
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
            >
                <DialogTitle id="form-dialog-title" disableTypography className={classes.dialogTitle}>
                    <h2>Cadastro de processo</h2>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <Grid container>
                            <Grid 
                                item xs={12} sm container
                                direction="column"
                                justify="center"
                                alignItems="flex-start"
                                spacing={8}
                                className={classes.grid}
                            >
                                <Grid item xs={6}>
                                    <TextField
                                        margin="dense"
                                        id="assunto"
                                        label="Assunto"
                                        type="text"
                                        fullWidth
                                        onChange={this.handleInput}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="dense"
                                        id="interessados"
                                        label="Interessados"
                                        type="text"
                                        fullWidth
                                        value={this.state.interessados.toString()}
                                        multiline
                                        rowsMax="4"
                                        InputProps={{
                                            readOnly: true,
                                            disableUnderline: true
                                        }}
                                        onChange={this.handleInput}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="dense"
                                        id="novoInteressado"
                                        label="Novo interessado"
                                        type="text"
                                        fullWidth
                                        onChange={this.handleInput}
                                    />
                                    <Button onClick={this.handleAddNewInterested} 
                                        variant="contained" className={classes.button}>
                                        ADICIONAR
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="dense"
                                        id="descricao"
                                        label="Descrição"
                                        type="text"
                                        fullWidth
                                        onChange={this.handleInput}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            SALVAR
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        width: "100%",
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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

ProcessRegisterDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
    reduxForm({
        form: 'processForm' // a unique identifier for this form
    })(ProcessRegisterDialog)
)