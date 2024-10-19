export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>Day la layout user</p>
        {children}
    </div>
      
  );
}
