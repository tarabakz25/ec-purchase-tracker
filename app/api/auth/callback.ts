import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (code) {
    const { error} = await supabase.auth.exchangeCodeForSession(code as string)
    if (error) {
      console.error(error);
    }

    res.redirect("/");
  }

  res.status(400).send("No code provided");
}