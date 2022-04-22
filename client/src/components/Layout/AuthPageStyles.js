import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    authSwitcher: {
      position: "fixed",
      top: "2rem",
      right: "3rem",
      gap: "3rem",
      "@media (max-width: 786px)": {
        top: "2rem",
        right: "2rem",
        gap: "2rem",
      }
    },
    greyText: {
      fontSize: theme.typography.fontSize,
      color: theme.palette.secondary.main
    },
    headingText: {
      textAlign: "left",
      fontSize: "26px",
      fontWeight: "600",
      width: "100%"
    },
    linkButton: {
      background: "#FFFFFF",
      boxShadow: "0px 5px 8px rgb(74 106 149 / 20%)",
      borderRadius: "5px",
      textDecoration: "none",
      minWidth: '100px',
      fontSize: theme.typography.fontSize,
      color: theme.palette.primary.main,
      padding: '1rem 3.25rem',
      "@media (max-width: 786px)": {
        padding: '1rem 1.25rem',
      }
    },
    linkText: {
      textDecoration: "none",
    },
    fullWidth: {
      width: '100%',
    },
    form: {
      width: '75%',
      maxWidth: '23.75rem'
    },
    formGrid: {
      gap: '1rem'
    },
    formButton: {
      fontSize: '16px',
      background: theme.palette.primary.main,
      color: '#fff',
      padding: '.75rem 0',
      width: '10rem',
      marginTop: '2rem'
    },
    forgotButton: {
        position: "absolute",
        right: "5px",
        bottom: '1px',
        color: theme.palette.primary.main,
        '&:hover': {
          background: 'transparent',
        }
      }
  }));

  export default useStyles;