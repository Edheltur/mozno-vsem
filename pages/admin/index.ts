import { AdminPage, IProps } from "components/AdminPage";
import { GetServerSideProps } from "next";

export default AdminPage;

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  return { props: {} };
};
