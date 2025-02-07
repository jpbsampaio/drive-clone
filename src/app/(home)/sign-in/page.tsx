import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <div className="mx-4 rounded-lg bg-white py-1 text-black">
        <SignInButton forceRedirectUrl={"/drive"} />
      </div>
      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} Drive Clone. All rights reserved.
      </footer>
    </>
  );
}
