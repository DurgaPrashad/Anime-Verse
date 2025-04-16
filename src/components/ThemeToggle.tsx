
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={theme === "dark" ? "Switch to Shonen (Light) Theme" : "Switch to Seinen (Dark) Theme"}
      className="hover:bg-muted/50 relative group overflow-hidden rounded-full"
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <React.Fragment>
            <Moon className="h-5 w-5 animate-pulse-soft" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-future">
              セイネン / Seinen (Dark)
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Sun className="h-5 w-5 animate-pulse-soft" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-future">
              少年 / Shonen (Light)
            </span>
          </React.Fragment>
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
      
      {/* Enhanced background glow effect */}
      <div className="absolute inset-0 rounded-full blur-md transition-all duration-500 opacity-0 group-hover:opacity-100">
        <div className={`absolute inset-0 rounded-full ${theme === "dark" ? "bg-primary" : "bg-secondary"} opacity-30`}></div>
        <div className={`absolute inset-0 rounded-full ${theme === "dark" ? "bg-secondary" : "bg-primary"} opacity-20 animate-spin-slow`}></div>
      </div>
    </Button>
  );
}
