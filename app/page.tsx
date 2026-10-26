import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black ${sora.className}`}>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <AppRouterCacheProvider>
            <p>Hello, world!</p>
          </AppRouterCacheProvider>
      </main>
    </div>
  );
}
