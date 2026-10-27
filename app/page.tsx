import { Typography } from "@mui/material";
import { soraSans } from "./styles/fonts";

export default function Home() {
  return (
    <div className={`flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black ${soraSans.className}`}>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Typography variant="h3" component="h3" gutterBottom>Hello, world!</Typography>
      </main>
    </div>
  );
}
