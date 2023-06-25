"use client";

import { Editor, Sidebar, Clerk } from "@/components";
import { useGlobalContext } from "@/lib/contexts/global-context";

export default function Home() {
  const { isClerkOpen } = useGlobalContext();
  return (
    <main className="flex min-h-screen">
      {isClerkOpen && <Clerk />}
      <Sidebar />
      <Editor />
    </main>
  );
}
