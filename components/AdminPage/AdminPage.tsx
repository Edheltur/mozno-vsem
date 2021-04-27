import React from "react";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { Session } from "next-auth";
import { Anchor, Box, Button, Heading, Text } from "grommet";
import Link from "next/link";
import { Spinner } from "components/ui/Spinner";

const handleSignInClick = () => signIn("yandex");
const handleSignOutClick = () => signOut();

const Content = ({ session }: { session?: Session | null }) => {
  return session ? (
    <Box gap="medium">
      <Text>Добро пожаловать, {session.user.name}!</Text>
      <Link passHref href="/admin/orders?count=20">
        <Anchor>Последние 20 заказов</Anchor>
      </Link>
      <Link passHref href="/admin/reports/sold?days=30">
        <Anchor>Продано за 30 дней</Anchor>
      </Link>
      <Link passHref href="/admin/reports/sold?days=7">
        <Anchor>Продано за неделю</Anchor>
      </Link>
      <Link passHref href="/admin/empty-images">
        <Anchor>Список блюд без картинок</Anchor>
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
        <Heading>Админка</Heading>
        {isLoading ? <Spinner /> : <Content session={session} />}
      </Box>
    </>
  );
};

AdminPage.commonPageProps = {
  disableHeader: true,
  disableMenu: true,
  noIndex: true,
};
