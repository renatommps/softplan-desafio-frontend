import React,{ Component } from  'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class ProcessInfo extends Component {
    
    render() {
        if (!this.props.process) {
            return (null);
        }
        
        const { numero, entrada, interessados, descricao, assunto } = this.props.process;
        const { classes, onClose } = this.props;

        return (
            <Paper className={classes.paper} elevation={1}>
                <Grid container spacing={16} direction="column">

                    {/* HEADER */}
                    <Grid container item xs={12} spacing={8} direction="row" justify="space-between">

                        {/* IMAGEM */}
                        <Grid container item xs={2} spacing={8}>
                            <div className={classes.square}/>
                        </Grid>

                        {/* CONTEUDO */}
                        <Grid container item xs={10} spacing={8} direction="row">

                            {/* PRIMEIRA LINHA */}
                            <Grid container item xs={12} spacing={0} direction="row" justify="space-between">
                                {/* PRIMEIRA COLUNA DA PRIMRA LINHA */}
                                <Grid container item xs={6} spacing={0} direction="column">
                                    <Typography className={classes.gridItemText} color="textSecondary">
                                        Processo
                                    </Typography>
                                    <Typography className={classes.gridItemText} component="p">
                                        {numero}
                                    </Typography>
                                </Grid>
                                {/* SEGUNDA COLUNA DA PRIMRA LINHA */}
                                <Grid container item xs={5} spacing={0} direction="column">
                                    <Typography className={classes.gridItemText} color="textSecondary">
                                        Data
                                    </Typography>
                                    <Typography className={classes.gridItemText} component="p">
                                        {entrada}
                                    </Typography>
                                </Grid>
                                {/* TERCEIRA COLUNA DA PRIMRA LINHA */}
                                <Grid container item xs={1} spacing={0} direction="row" justify="flex-start">
                                    <Grid container item xs={12} justify="flex-start">
                                        <IconButton onClick={onClose} className={classes.closeButton}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* SEGUNDA LINHA */}
                            <Grid container item xs={12} spacing={0} direction="column" justify="space-between">
                                <Typography className={classes.gridItemText} color="textSecondary">
                                    Assunto
                                </Typography>
                                <Typography className={classes.gridItemText} component="p">
                                    {assunto}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* INTERESSADOS */}
                    <Grid container item xs={12} spacing={8} direction="column" justify="space-between">
                        <Typography className={classes.gridItemText} color="textSecondary">
                            Interessados
                        </Typography>
                        <Typography component="p">
                            {interessados[0]}
                        </Typography>
                    </Grid>

                    {/* DESCRICAO */}
                    <Grid container item xs={12} spacing={8} direction="column" justify="space-between">
                        <Typography className={classes.gridItemText} color="textSecondary">
                            Descrição
                        </Typography>
                        <Typography component="p" className={classes.textWithParagraphy}>
                            {descricao}
                        </Typography>
                    </Grid>

                    {/* BOTOES */}
                    <Grid container item xs={12} spacing={16} direction="row" justify="flex-end">
                        <Grid item>
                            <Button variant="outlined" className={"app-box-shadow button-label black-54"} onClick={this.props.deleteProcess}>
                                REMOVER
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" disabled className={"app-box-shadow button-label black-54"}>
                                EDITAR
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
        )
    }
}

const styles = {
    paper: {
        padding: 16
    },
    textWithParagraphy: {
        whiteSpace: "pre-line",
    },
    square: {
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
        height: 0,
        background: "#9E9E9E",
        "&::before": {
            position: "absolute",
            content: "''",
            width: "100%",
            height: "1px",
            bottom: "50%",
            backgroundColor: "white",
            transform: "rotate(45deg)",
        },
        "&::after": {
            position: "absolute",
            content: "''",
            width: "100%",
            height: "1px",
            bottom: "50%",
            backgroundColor: "white",
            transform: "rotate(-45deg)",
        },
    },
    crossLines: {
        position: "absolute",
        width: "100%",
        paddingBottom: "100%",
        border: "1px solid white",
        height: 0,
        background: "rgba(0, 0, 0, 0.0)",
    },
    cardRoot: {
        padding: 0,
    },
    cardContent: {
        padding: 10,
    },
    gridItem: {
        padding: 5,
    },
    gridItemText: {
        textAlign: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        minWidth: 0,
        padding: 0,
    },
    selected: {
        borderColor: '#005b95',
        borderStyle: 'solid',
        borderWidth: '2px',
    },
    cardAction: {
        padding: 0,
    }
};

ProcessInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProcessInfo);
