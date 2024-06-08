import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 py-8 px-6 md:px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-900 shadow-md">
            <CardHeader>
              <CardTitle>936 87 87 36</CardTitle>
              <CardDescription>Calls Handled</CardDescription> 
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">2,345</div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-md">
            <CardHeader>
              <CardTitle>Average Wait Time</CardTitle>
              <CardDescription>Average time customers wait</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">3 min 27 sec</div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-md">
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
              <CardDescription>Overall customer satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">87%</div>
            </CardContent>
          </Card>
        </div>
        <div className="container mx-auto mt-8">
          <Card className="bg-white dark:bg-gray-900 shadow-md">
            <CardHeader>
              <CardTitle>Leave Feedback</CardTitle>
              <CardDescription>Share your thoughts and suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea id="feedback" placeholder="Enter your feedback" className="min-h-[150px]" />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}