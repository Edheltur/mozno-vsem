import React from "react";
import Head from "next/head";
import { signIn, signOut, useSession, Session } from "next-auth/client";
import { Anchor, Box, Button, Text } from "grommet";
import Link from "next/link";
import { Spinner } from "components/ui/Spinner";

const handleSignInClick = () => signIn("yandex");
const handleSignOutClick = () => signOut();

const Content = ({ session }: { session?: Session | null }) => {
  return session ? (
    <Box gap="medium">
      <Text>Добро пожаловать, {session.user.name}!</Text>
      <Link passHref href="/admin/orders">
        <Anchor>Список заказов</Anchor>
      </Link>
      <Button primary label="Выйти" onClick={handleSignOutClick} />
    </Box>
  ) : (
    <Button primary label="Авторизоваться" onClick={handleSignInClick} />
  );
};
export const AdminPage = () => {
  const [session, isLoading] = useSession();
  return (
    <>
      <Head>
        <title>Админка</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Box margin={{ top: "medium" }}>
        {isLoading ? <Spinner /> : <Content session={session} />}
      </Box>
    </>
  );
};

AdminPage.commonPageProps = { disableHeader: true, disableMenu: true };
