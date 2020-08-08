import { DishPage } from "components/DishPage";
import { items } from "common/data/menu";
import { GetStaticPaths, GetStaticProps } from "next";

export default DishPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const props = typeof params?.id === "string" ? { id: params.id } : {};
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: items.map(({ id }) => {
    return {
      params: { id },
    };
  }),
  fallback: false,
});
