import Layout from "../src/Layout/Layout";
import { Metadata } from "../src/Metadata/Metadata";
import PageHome from "../src/Pages/PageHome/PageHome";

const Page = () => {
  return (
    <Layout>
      <Metadata title="Anthony JEAMME" description="Développeur React/NextJS" />
      <PageHome />
    </Layout>
  );
};

export default Page;
