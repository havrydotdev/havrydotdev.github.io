"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/main.md");
  }, [router]);

  return <>Loading...</>;
}
