import { LayoutProps } from "@/src/shared/models"
import Header from "@/src/shared/components/layouts/main/header"
import Footer from "@/src/shared/components/layouts/main/footer"

export function MainLayout({ children }: LayoutProps) {
    return (
        <div className="h-screen">
            <Header />
            <main className="flex-grow" style={{ marginTop: "var(--header-height)" }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}