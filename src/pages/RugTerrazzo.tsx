import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import rugTerrazzo from "@/assets/rug-terrazzo.jpg";

const RugTerrazzo = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Rugs & Carpets", href: "/products/rugs" },
        { label: "Premium Soft Round Rug - Terrazzo" },
    ];

    return (
        <div className="min-h-screen bg-page">
            <Navbar />

            <main className="container py-4">
                <Breadcrumb items={breadcrumbItems} />

                {/* Product section */}
                <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 py-6">
                    {/* Left - Gallery */}
                    <div className="lg:sticky lg:top-36 lg:self-start">
                        <ProductGallery images={[rugTerrazzo]} />
                    </div>

                    {/* Right - Product Info */}
                    <div>
                        <ProductInfo
                            sku="RUG-SOFT-001-TZ"
                            title="Premium Soft Round Rug"
                            description="A beautifully crafted round rug that brings warmth and comfort to any space. The plush, high-density fibers create a luxuriously soft surface that feels gentle and warm underfoot."
                        />
                    </div>
                </section>

                {/* Product Description */}
                <ProductDescription />
            </main>

            {/* Footer spacer */}
            <div className="h-24 bg-page" />
        </div>
    );
};

export default RugTerrazzo;
