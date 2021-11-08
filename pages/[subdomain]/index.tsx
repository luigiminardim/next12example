import { GetStaticPaths, GetStaticProps } from "next";

type HomeProps = {
  subdomain: string;
};

export default function Home({ subdomain }: HomeProps) {
  return <div>{subdomain}</div>;
}

export const getStaticProps: GetStaticProps<HomeProps, HomeProps> = ({
  params,
}) => {
  return {
    props: {
      subdomain: params?.subdomain!,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
