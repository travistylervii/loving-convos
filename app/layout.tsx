import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
