import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

const signIn = () => {
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
			console.error(error);
    } else {
      window.location.href = data.url;
    }
  };

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div>
				<h1 className="text-2xl font-bold">Sign in</h1>
			</div>
			<div className="flex flex-col items-center justify-center">
				<button onClick={handleLogin}>Sign in with Google</button>
			</div>
		</div>
	)
}