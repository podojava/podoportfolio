import './globals.css';

export const metadata = {
  title: '포트폴리오',
  description: '포트폴리오 웹사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
