import LayoutWrapper from "@/Utils/LayoutWrapper";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LayoutWrapper>
        <main className="min-h-dvh">{children}</main>
      </LayoutWrapper>
    </>
  );
}
