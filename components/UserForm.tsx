import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth } from "@/auth";

export async function UserForm() {
  const user = await auth();
  const userName = user?.user?.name?.split(" ")[0];
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row text-black">
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline" type="submit">
          Hi, {userName}{" "}
          <span className="text-green-500">
            <Check size={15} />
          </span>
        </Button>
        {user?.user?.image && (
          <Button size="icon-sm" aria-label="Submit" variant="outline">
            <Image
              src={user.user.image}
              alt="Google_logo"
              width={300}
              height={300}
              className="object-contain w-4 rounded-full"
            />
          </Button>
        )}
      </div>
    </div>
  );
}
