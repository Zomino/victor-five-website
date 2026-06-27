"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

import CalSkeleton from "./components/CalSkeleton";

const NAMESPACE = "intro";

export default function CalEmbed({ calLink }: Readonly<{ calLink: string }>) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCalApi({ namespace: NAMESPACE }).then((cal) => {
      cal("ui", { layout: "month_view" });
      cal("on", { action: "linkReady", callback: () => setLoaded(true) });
    });

    const timeout = setTimeout(() => setLoaded(true), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!loaded && <CalSkeleton />}
      <div style={{ height: loaded ? "auto" : 0, overflow: "hidden" }}>
        <Cal
          namespace={NAMESPACE}
          calLink={calLink}
          style={{ width: "100%" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </>
  );
}
