import React from "react";
import styles from "../../styles/Home.module.css";
import PerfilPage from "../../components/perfilPage/index";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const About = () => {
  return (
    <div className={styles.container}>
      <PerfilPage
        title="Filipe Verrone de Lima"
        description={"Intern Developer FullStack"}
      >
        <Grid container alignItems="center" justify="center">
          <Grid item style={{ width: "100%" }}>
            <img src="public/images/" alt="perfil" />
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <Typography variant="body1" style={{ color: "#659cde" }}>
              Hi! My name is Filipe, and I'm brazilian.
            </Typography>
          </Grid>
        </Grid>
      </PerfilPage>
    </div>
  );
};

export default About;
