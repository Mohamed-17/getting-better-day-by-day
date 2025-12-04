import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "@/auth";

export async function SignInButton() {
  return (
    <form
      className="flex flex-col items-start gap-8 sm:flex-row text-black"
      action={async () => {
        "use server";
        await signIn("google", { callbackUrl: "/" });
      }}
    >
      <div className="flex items-start gap-2">
        <Button
          size="sm"
          variant="outline"
          type="submit"
          className="cursor-pointer"
        >
          Sign In with Google
        </Button>
        <Button
          size="icon-sm"
          aria-label="Submit"
          variant="outline"
          className="cursor-pointer"
        >
          <Image
            src={"/google.png"}
            alt="Google_logo"
            width={200}
            height={200}
            className="object-contain w-3.5"
          />
        </Button>
      </div>
    </form>
  );
}
