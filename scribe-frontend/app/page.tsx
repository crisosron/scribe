import { Editor, Sidebar } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <Editor />
    </main>
  )
}
