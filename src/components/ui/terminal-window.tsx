
import React from "react";

interface TerminalWindowProps {
  children: React.ReactNode;
}

export function TerminalWindow({ children }: TerminalWindowProps) {
  return (
    <div className="terminal-window w-full">
      <div className="terminal-header">
        <div className="dot-red"></div>
        <div className="dot-yellow"></div>
        <div className="dot-green"></div>
        <div className="ml-2 text-xs text-muted-foreground">terminal</div>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  );
}

export function TerminalLine({ 
  prompt = "$", 
  children 
}: { 
  prompt?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <span className="text-terminal-prompt mr-2">{prompt}</span>
      <span>{children}</span>
    </div>
  );
}

export function TerminalOutput({ 
  type = "info", 
  children 
}: { 
  type?: "info" | "success" | "error"; 
  children: React.ReactNode;
}) {
  const getTextColorClass = () => {
    switch (type) {
      case "success":
        return "text-terminal-green";
      case "error":
        return "text-terminal-red";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className={`ml-4 ${getTextColorClass()}`}>
      {type === "info" && <span>[info] </span>}
      {type === "success" && <span>[success] </span>}
      {type === "error" && <span>[error] </span>}
      {children}
    </div>
  );
}
