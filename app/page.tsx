import { Typography } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { soraSans } from "./styles/fonts";

export default function Home() {
  return (
    <div className={`flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black ${soraSans.className}`}>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <AppRouterCacheProvider>
            <Typography variant="h3" component="h3" gutterBottom>Hello, world!</Typography>
          </AppRouterCacheProvider>
      </main>
    </div>
  );
}
