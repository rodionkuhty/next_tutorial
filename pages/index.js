import styled from "styled-components";
import Layout from "../components/layout";
const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <Layout title="home page">
    <h3>Home</h3>
  </Layout>
);
