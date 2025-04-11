import { useEffect, useState } from "react";

export default function Loader() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500); // cambia cada 500ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div
          className="animate-spin rounded-full h-50 w-50 border-t-4 border-b-4"
          style={{
            borderColor: "var(--spiner-border)",
          }}
        />
        <span className="mt-2 text-3xl text-gray-500 ">
          Verificando acceso{dots}
        </span>
      </div>
    </div>
  );
}
