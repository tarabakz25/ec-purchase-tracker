import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

const signIn = () => {
    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if (error) {
            console.error(error);
        } else {
            window.location.href = data.url;
        }
    }

    return (
        
    )
}