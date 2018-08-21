import React,{ Component } from  'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

  
class ProcessCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }
    
    handleClick = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
        this.props.handleClick();
    }

    render() {
        const { numero, interessados, descricao, assunto } = this.props.process;
        const { classes } = this.props;
        const selected  = this.props.selected;
        const gridsNumber = this.props.compact ? 6 : 3;
        const rootClasses = [classes.cardRoot, selected ? classes.selected : ''].join(' ');

        return (
            <Card className={rootClasses} onClick={this.handleClick}>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={8} direction="row" justify="center" alignItems="center">

                        <Grid container item xs={gridsNumber} spacing={8} direction="column" justify="center">
                            <Typography className={classes.gridItemText} color="textSecondary">
                                Número
                            </Typography>
                            <Typography className={classes.gridItemText} component="p">
                                {numero}
                            </Typography>
                        </Grid>

                        <Grid container item xs={gridsNumber} spacing={8} direction="column" justify="center">
                            <Typography className={classes.gridItemText} color="textSecondary">
                                Assunto
                            </Typography>
                            <Typography className={classes.gridItemText} component="p">
                                {assunto}
                            </Typography>
                        </Grid>

                        <Grid container item xs={gridsNumber} spacing={8} direction="column" justify="center">
                            <Typography className={classes.gridItemText} color="textSecondary">
                                Interessado
                            </Typography>
                            <Typography component="p">
                                {interessados[0]}
                            </Typography>
                        </Grid>

                        <Grid container item xs={gridsNumber} spacing={8} direction="column" justify="center">
                            <Typography className={classes.gridItemText} color="textSecondary">
                                Descrição
                            </Typography>
                            <Typography className={classes.gridItemText} component="p">
                                {descricao}
                            </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions className={classes.cardAction}>
                </CardActions>
            </Card>
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

ProcessCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(ProcessCard);
