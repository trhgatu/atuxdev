import { LayoutProps } from "@/src/shared/models";
import { MainLayout } from "@/src/shared/components/layouts/main";

export default function Layout({children}: LayoutProps) {
  return (
    <MainLayout>{children}</MainLayout>
  )
}
