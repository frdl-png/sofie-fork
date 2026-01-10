import { useState, useRef } from "react";
import { ZoomIn, X } from "lucide-react";
import rugMain from "@/assets/rug-main.jpg";

interface ProductGalleryProps {
  images?: string[];
}

const ProductGallery = ({ images = [rugMain] }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !isZoomed) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
    setZoomPosition({ x: 50, y: 50 });
  };

  return (
    <div className="space-y-4">
      {/* Main image container */}
      <div
        ref={imageRef}
        className="relative bg-product rounded-lg overflow-hidden cursor-zoom-in group"
        onClick={handleZoomToggle}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isZoomed && setIsZoomed(false)}
      >
        {/* Zoom indicator */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-nav-accent text-accent-foreground text-xs font-semibold rounded">
            <ZoomIn className="h-3 w-3" />
            ZOOM
          </span>
        </div>

        {/* Image */}
        <div
          className="aspect-square transition-transform duration-300"
          style={
            isZoomed
              ? {
                  transform: "scale(2)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : {}
          }
        >
          <img
            src={images[selectedIndex]}
            alt="Product image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Zoom overlay indicator */}
        {isZoomed && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-foreground/80 text-background text-xs rounded">
                <X className="h-3 w-3" /> Click to close
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? "border-bullet ring-2 ring-bullet/20"
                  : "border-transparent hover:border-separator"
              }`}
            >
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Thumbnail navigation dots (for single image) */}
      {images.length === 1 && (
        <div className="flex justify-center gap-2 py-2">
          <div className="flex flex-col gap-2">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === 0 ? "bg-bullet" : "bg-separator hover:bg-bullet/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
