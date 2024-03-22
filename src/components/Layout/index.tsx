import { ReactPropTypes } from "react";
import Navbar from "../Navbar/Navbar";
import { Card } from "../ui/card";
export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Card className="m-12 mt-20 rounded p-2 h-min-[80vh] h-[80vh] min-w-[800px] flex shadow-lg">
            <Navbar></Navbar>
            <div className="p-4">{children}</div>
        </Card>
    );
}
