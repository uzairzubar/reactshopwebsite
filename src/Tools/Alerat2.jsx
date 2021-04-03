import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Alerat() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque aut, cumque, dolorem doloremque ea est explicabo facere magni molestiae nulla pariatur quam reiciendis rem saepe sunt veritatis vero, voluptate?
                </Alert>
            </Collapse>
            <Button
                disabled={open}
                variant="outlined"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Re-open
            </Button>
        </div>
    );
}

