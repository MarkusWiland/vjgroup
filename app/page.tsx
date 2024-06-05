import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex h-full w-full">
        <div className="relative w-1/2 h-screen">
          <img 
            src="/consulting.jpg" 
            alt="Consulting Background" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 hover:opacity-100"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/consulting">
              <Card className="relative bg-transparent text-white">
                <CardHeader>
                  <CardTitle>ViJo Consulting</CardTitle>
                  <CardDescription>Consulting Consulting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Consulting Consulting</p>
                </CardContent>
                <CardFooter>
                  <p>Consulting Consulting</p>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
        <div className="relative w-1/2 h-screen">
          <img 
            src="/horse.jpg" 
            alt="Sporthorses Background" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 hover:opacity-0"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/sporthorses">
              <Card className="relative bg-transparent text-white">
                <CardHeader>
                  <CardTitle>ViJo Sportshorses</CardTitle>
                  <CardDescription>Sportshorses Sportshorses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Sportshorses Sportshorses</p>
                </CardContent>
                <CardFooter>
                  <p>Sportshorses Sportshorses</p>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
