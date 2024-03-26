import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card";
import Repo from "@/components/Repo";


export default function Home() {
  return (
    <div>
      <Badge>仓库</Badge>
      <div>
        <div className="p-4">
          <Repo />
        </div>
      </div>
    </div>
  );
}
