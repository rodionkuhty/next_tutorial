import Layout from "../components/layout";
import { Spring } from "react-spring";
export default () => {
  return (
    <Layout title="about page">
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <h3>About Page</h3>
          </div>
        )}
      </Spring>
    </Layout>
  );
};
