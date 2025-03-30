import { LayoutProps } from "@/shared/models"
import Header from "@/shared/components/layouts/main/header"
import Footer from "@/shared/components/layouts/main/footer"
import BackToTop from "@/shared/components/back-to-top"

export function MainLayout({ children }: LayoutProps) {
    return (
        <div className="h-screen">
            <Header />
            <main className="flex-grow" style={{ marginTop: "var(--header-height)" }}>
                {children}
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}