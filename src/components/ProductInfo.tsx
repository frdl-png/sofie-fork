import { useState } from "react";
import { Check, Plus, Minus, Truck, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
  sku?: string;
  title?: string;
  description?: string;
  price?: number;
  sizes?: string[];
  inStock?: boolean;
}

const ProductInfo = ({
  sku = "RUG-SOFT-001",
  title = "Premium Soft Round Rug",
  description = "A beautifully crafted round rug that brings warmth and comfort to any space. The plush, high-density fibers create a luxuriously soft surface that feels gentle underfoot.",
  price = 189,
  sizes = ["120 cm", "160 cm", "200 cm"],
  inStock = true,
}: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="space-y-6">
      {/* SKU */}
      <p className="text-xs text-muted-foreground uppercase tracking-wider">
        {sku}
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
        {title}
      </h1>

      {/* Description */}
      <div className="prose prose-sm text-muted-foreground">
        <p>{description}</p>
        <button className="text-foreground underline underline-offset-4 hover:text-primary transition-colors text-sm font-medium">
          Read more
        </button>
      </div>

      {/* Separator */}
      <div className="h-px bg-separator" />

      {/* Size selector */}
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          Choose Size
        </p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size, index) => (
            <button
              key={size}
              onClick={() => setSelectedSize(index)}
              className={`px-5 py-2.5 text-sm font-medium rounded-md border transition-all ${
                selectedSize === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-separator" />

      {/* Price and Add to Cart */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Price */}
        <p className="text-3xl font-bold text-foreground">€{price}</p>

        {/* Quantity selector */}
        <div className="flex items-center border border-border rounded-md">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="p-2.5 hover:bg-secondary transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center font-medium">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="p-2.5 hover:bg-secondary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Add to Cart button */}
        <Button
          size="lg"
          className="flex-1 min-w-[180px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          ADD TO CART
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Stock status */}
      <div className="flex items-center gap-2">
        {inStock ? (
          <>
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-success">
              <Check className="h-3 w-3 text-success-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">In Stock</span>
          </>
        ) : (
          <span className="text-sm font-medium text-destructive">
            Out of Stock
          </span>
        )}
        <span className="text-sm text-muted-foreground ml-2">
          See payment and delivery conditions
        </span>
      </div>

      {/* Separator */}
      <div className="h-px bg-separator" />

      {/* Info banners */}
      <div className="grid gap-3">
        <div className="flex items-start gap-3 p-4 bg-banner rounded-lg border border-banner-border">
          <Truck className="h-5 w-5 text-bullet flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Free Delivery</p>
            <p className="text-xs text-muted-foreground">
              On orders over €100. Delivery within 3-5 business days.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-banner rounded-lg border border-banner-border">
          <Shield className="h-5 w-5 text-bullet flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">2 Year Warranty</p>
            <p className="text-xs text-muted-foreground">
              Full coverage against manufacturing defects.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-banner rounded-lg border border-banner-border">
          <Leaf className="h-5 w-5 text-bullet flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">
              Sustainable Materials
            </p>
            <p className="text-xs text-muted-foreground">
              Made with eco-friendly and recyclable materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
