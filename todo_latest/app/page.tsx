import connectToDB from "@/lib/db";
import { connect } from "http2";
import Image from "next/image";

export default async function Home() {
  const conn = await connectToDB();
  console.log("Mongodb connected:", conn.connection.readyState === 1);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 font-sans dark:bg-black">
      <div className="text-center">
        <h2 className="text3xl text-lime-400">Hello bsdiwale</h2>
      </div>
    </div>
  );
}
