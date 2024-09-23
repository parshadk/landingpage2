import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import InviteModal from './inviteModal'
import { EyeIcon, Plus, PlusCircle, PowerIcon } from 'lucide-react'

const data = [
  { date: '2021-02-03', users: 0 },
  { date: '2021-02-04', users: 0 },
  { date: '2021-02-05', users: 0 },
  { date: '2021-02-06', users: 0 },
  { date: '2021-02-07', users: 0 },
  { date: '2021-02-08', users: 0 },
  { date: '2021-02-09', users: 1 },
];

const blogPosts = [
    { title: 'Blended Learning: What It Is, Why It Matters & How to Apply', days: 7 },
    { title: 'Join the Course Sales Bootcamp [Free Live Workshops]', days: 12 },
    { title: '12 Steps to Creating Awesome Live Classes in 2021', days: 20 },
    { title: 'Guy Kawasaki on the Future of Business in the Midst of a Pandemic', days: 22 },
    { title: 'What is Educational Marketing & How to Use it to Grow with Examples', days: 23 },
  ];


export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-start gap-3 space-y-2 flex-wrap">
        <h2 className="text-3xl font-bold tracking-tight md:block">Dashboard</h2>
        <Button className="hidden md:flex md:flex-row gap-2 bg-transparent text-black   hover:bg-gray-300"><Plus/> <p className='hidden lg:flex'>Create a course</p></Button>
        <Button className="hidden md:flex md:flex-row gap-2 bg-transparent text-black  hover:bg-gray-300"><EyeIcon/><p className='hidden lg:flex'>Preview home page</p></Button>
        <Button className="hidden md:flex md:flex-row gap-2 bg-transparent text-black  hover:bg-gray-300"><EyeIcon/><p className='hidden lg:flex'>Preview after login page</p></Button>
        <Button className="hidden md:flex md:flex-row gap-2 bg-transparent text-black  hover:bg-gray-300"><PowerIcon/><p className='hidden lg:flex'>View welcome screen</p></Button>
        <div className='flex flex-row gap-2 flex-end'>
           <Button onClick={() => setIsModalOpen(true)}>Invite</Button>
        </div>
        
      </div>
      <Tabs defaultValue="new-signups" className="space-y-4">
        <TabsList className='bg-gray-300 rounded-lg flex flex-row flex-wrap m-2 gap-2'>
          <TabsTrigger value="new-signups" className='bg-gray-300 rounded-lg'>New signups</TabsTrigger>
          <TabsTrigger value="revenue" className='bg-gray-300 rounded-lg'>Revenue</TabsTrigger>
          <TabsTrigger value="product-sales" className='bg-gray-300 rounded-lg' >Product sales</TabsTrigger>
          <TabsTrigger value="active-learners" className='bg-gray-300 rounded-lg'>Active learners</TabsTrigger>
        </TabsList>
        <TabsContent value="new-signups" className="space-y-4 bg-gray-300 p-4 rounded-lg">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>New signups</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        New user: John Doe
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2 minutes ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">All users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">30 days sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0 min</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0 min</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Course Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0 </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-lg shadow p-4 md:p-6 m-1 flex flex-col gap-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">New users</h3>
            <button className="text-blue-500">see all</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">😊</span>
            </div>
            <div>
              <div className="font-semibold">hubx</div>
              <div className="text-sm text-gray-500">24 minutes</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">😊</span>
            </div>
            <div>
              <div className="font-semibold">hubx</div>
              <div className="text-sm text-gray-500">24 minutes</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 md:p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">How to sell courses blog</h3>
            <button className="text-blue-500">see all</button>
          </div>
          {blogPosts.map((post, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <div className="flex items-center space-x-2">
                <PlusCircle className="text-gray-400 flex-shrink-0" />
                <span className="text-sm md:text-base">{post.title}</span>
              </div>
              <span className="text-sm text-gray-500 ml-2">{post.days} days ago</span>
            </div>
          ))}
        </div>
      </div>
          
        </TabsContent>
      </Tabs>
      <InviteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}