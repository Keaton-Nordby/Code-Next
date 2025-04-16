import { SignUpButton, SignedIn, SignedOut, SignOutButton, UserButton  } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton/>
      </SignedOut>

      <UserButton/>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      
    </div>
  );
}
