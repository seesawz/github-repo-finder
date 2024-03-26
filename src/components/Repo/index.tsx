'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Folder } from "lucide-react"

const Index: React.FC = () => {

    const handleIn = () => {
        alert("你进入了一个仓库")
    }

    return (
        <Card className="w-52 shadow-md">
            <CardHeader>
                <CardTitle>Poroject Name</CardTitle>
                <CardDescription>desc</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex">
                    <Folder />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div></div>
                <Button>Enter</Button>
            </CardFooter>
        </Card >
    )
}

export default Index
