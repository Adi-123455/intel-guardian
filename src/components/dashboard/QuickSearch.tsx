import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const QuickSearch = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="search"
        placeholder="Search cases, wallets, or usernames..."
        className="pl-10 bg-background/50 border-muted"
      />
    </div>
  );
};