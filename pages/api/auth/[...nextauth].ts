import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";

const AdminEmails = new Set(
  (process.env.ADMIN_EMAILS ?? "").toLowerCase().split(",")
);

const options: InitOptions = {
  providers: [
    Providers.Yandex({
      clientId: process.env.YANDEX_ID!,
      clientSecret: process.env.YANDEX_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET!,
  callbacks: {
    async signIn(user) {
      const email = user?.email?.toLowerCase();

      return typeof email === "string" && AdminEmails.has(email);
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
