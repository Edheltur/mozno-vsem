import { AdminPage } from "components/AdminPage";
import { GetServerSideProps } from "next";

export default AdminPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
