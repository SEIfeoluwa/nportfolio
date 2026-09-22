"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (e.g. insecure context); no-op.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="ledger-label shrink-0 rounded-sm border border-rule-strong bg-paper-elevated px-2.5 py-1 text-[11px] text-ink-muted hover:text-accent"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
