"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/lib/supabase";

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, []);

  return (
    <div>
      <Avatar>
        {!loading && user ? (
          <AvatarImage
            src={user.user_metadata?.avatar_url || user.user_metadata?.picture}
            alt={user.email}
          />
        ) : (
          <AvatarImage src="https://github.com/shadcn.png" />
        )}
        <AvatarFallback>
          {user?.email?.charAt(0).toUpperCase() || "CN"}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
