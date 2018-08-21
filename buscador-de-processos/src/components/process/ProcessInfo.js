import React,{ Component } from  'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class ProcessInfo extends Component {
    
    handleProcessSearchTerm = (process) => {
        this.props.getProcessBySearchTerm(process);
        this.context.router.history.push("/processos");
    }
    
    render() {
        if (!this.props.process) {
            return (null);
        }
        
        const { numero, entrada, interessados, descricao, assunto } = this.props.process;
        const { classes } = this.props;

        return (
            <Paper>
                <Grid container spacing={8} direction="column">

                    {/* HEADER */}
                    <Grid container item xs={12} spacing={8} direction="row">

                        {/* IMAGEM */}
                        <Grid container item xs={2} spacing={8}>
                            <div>IMAGEM</div>
                        </Grid>

                        {/* CONTEUDO */}
                        <Grid container item xs={10} spacing={8} direction="row">

                            {/* PRIMEIRA LINHA */}
                            <Grid container item xs={12} spacing={8} direction="row">
                                {/* PRIMEIRA COLUNA DA PRIMRA LINHA */}
                                <Grid container item xs={6} spacing={8} direction="column">
                                    <Typography className={classes.gridItemText} color="textSecondary">
                                        Processo
                                    </Typography>
                                    <Typography className={classes.gridItemText} component="p">
                                        {numero}
                                    </Typography>
                                </Grid>
                                {/* SEGUNDA COLUNA DA PRIMRA LINHA */}
                                <Grid container item xs={5} spacing={8} direction="column">
                                    <Typography className={classes.gridItemText} color="textSecondary">
                                        Data
                                    </Typography>
                                    <Typography className={classes.gridItemText} component="p">
                                        {entrada}
                                    </Typography>
                                </Grid>
                                {/* TERCEIRA COLUNA DA PRIMRA LINHA */}
                                <Grid container item xs={1} spacing={8} direction="column">
                                    <div>XIS</div>
                                </Grid>
                            </Grid>

                            {/* SEGUNDA LINHA */}
                            <Grid container item xs={12} spacing={8} direction="row">
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
                    <Grid container item xs={12} spacing={8} direction="column">
                        <Typography className={classes.gridItemText} color="textSecondary">
                            Interessados
                        </Typography>
                        <Typography component="p">
                            {interessados[0]}
                        </Typography>
                    </Grid>

                    {/* DESCRICAO */}
                    <Grid container item xs={12} spacing={8} direction="column">
                        <Typography className={classes.gridItemText} color="textSecondary">
                            Descrição
                        </Typography>
                        <Typography className={classes.gridItemText} component="p">
                            {descricao}
                        </Typography>
                    </Grid>

                    {/* BOTOES */}
                    <Grid container item xs={12} spacing={8} direction="row">
                        <Paper>
                            <Link to="#" onClick={this.props.deleteProcess}>
                                REMOVER
                            </Link>
                        </Paper>
                        <Paper>
                            <Link to="#">
                                EDITAR
                            </Link>
                        </Paper>
                    </Grid>

                </Grid>
            </Paper>
        )
    }
}

const styles = {
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
    },
    selected: {
        borderColor: '#005b95',
        borderStyle: 'solid',
        borderWidth: '2px',
    },
    cardAction: {
        padding: 0,
    },
};

ProcessInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProcessInfo);
