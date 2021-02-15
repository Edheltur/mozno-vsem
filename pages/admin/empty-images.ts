import { EmptyImagesPage } from "components/EmptyImagesPage";
import { GetServerSideProps } from "next";

export default EmptyImagesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};
