import styles from "../styles/Home.module.css";
import GeneralPage from "../components/generalPage/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <GeneralPage
        title="Welcome to Sandbox"
        description={<a href="/get-started">Get started</a>}
      />
    </div>
  );
};

export default Home;
