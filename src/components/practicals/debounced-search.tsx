import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function DebouncedSearch() {
  const [search, setSearch] = useState("");
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Debounced Search</h1>
      <div className="flex gap-2">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>Search</Button>
      </div>
    </section>
  );
}
