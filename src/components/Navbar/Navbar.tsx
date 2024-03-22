import { AlignJustify, FolderClosed, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ReactElement } from "react";
import Link from "next/link";

const components: { title: string; href: string; description: string; icon: ReactElement }[] = [
  {
    title: '仓库',
    icon: <FolderClosed />,
    href: '/',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: '收藏',
    icon: <Star />,
    href: '/star',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: '分类',
    icon: <AlignJustify />,
    href: '/classify',
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
]

const colors: { color: string, title: string }[] = [
  { color: 'red', title: '红色' },
  { color: 'orange', title: '橙色' },
  { color: 'yellow', title: '黄色' },
  { color: 'green', title: '绿色' },
  { color: 'blue', title: '蓝色' },
  { color: 'purple', title: '紫色' },
  { color: 'pink', title: '粉色' },
]
export default function Navbar() {
  return (
    <div className="border-r-[1px] @apply:border-[--border]">
      <div className="h-12  flex flex-col justify-between">
        <Input className="w-52" placeholder="Search"></Input>
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
      </div>
      {components.map((component) => {
        return (
          <div className="mt-4" key={component.href}>
            <Link href={component.href}>
              <Button className="w-52 justify-between" variant={component.title === '仓库' ? 'default' : 'outline'}>
                <div className="flex items-center">
                  {component.icon}
                  <p>&nbsp;&nbsp;{component.title}</p>
                </div>
                <div>128</div>
              </Button>
            </Link>
          </div>
        )
      })}
      <div data-orientation="horizontal" role="none" className="mt-8 shrink-0 bg-border h-[1px] w-full"></div>
      <div className="mt-4">
        <div className="flex flex-col mt-2">
          {colors.map((color) => {
            return (
              <div className="mr-2 mb-2" key={color.color}>
                <Link href={color.color}>
                  <Button variant="outline" color={color.color} className="w-52 justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color.color }}> </div>
                      <div className="ml-2">
                        {color.title}
                      </div>
                    </div>
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
