import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      buttons: {
        flexGrow: 1,
      },
      button: {
        padding: theme.spacing(1),
        textAlign: 'center',
        borderRadius: 3,
        [theme.breakpoints.up('md')]:{
          width:150,
        }
      },

    }),
);

export {useStyles}
