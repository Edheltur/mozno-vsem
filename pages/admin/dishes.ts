import { DishesAdminPage } from "components/DishesAdminPage";
import { GetServerSideProps } from "next";

export default DishesAdminPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};
