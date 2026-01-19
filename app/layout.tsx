import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*<body>{children}</body>*/}
      <body className={`${inter.className} antialiased`}>
        <div>
          <p>构建时间: {new Date().getTime()}</p>
          <p>请求时间: {Date.now()}</p>
        </div>
        {children}
      </body>
    </html>
  );
}
