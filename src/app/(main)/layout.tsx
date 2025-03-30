import { LayoutProps } from "@/shared/models";
import { MainLayout } from "@/shared/components/layouts";

export default function Layout({children}: LayoutProps) {
  return (
    <MainLayout>{children}</MainLayout>
  )
}
