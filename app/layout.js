import './globals.css'

export const metadata = {
  title: 'Elegance Web Studios - Expert Web Design for Event Planning Businesses',
  description: 'Transform your event planning business with expert web design services from Elegance Web Studios. Create an online presence that captivates and converts.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
