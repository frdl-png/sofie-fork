import { Circle } from "lucide-react";

interface ProductDescriptionProps {
  heading?: string;
  paragraphs?: string[];
  features?: string[];
  highlightedWords?: string[];
}

const ProductDescription = ({
  heading = "Product Details",
  paragraphs = [
    "This premium round rug combines elegant design with exceptional comfort. The high-density pile creates a plush, cushioned surface that feels incredibly soft beneath your feet.",
    "Crafted from durable synthetic fibers, this rug is designed to withstand daily use while maintaining its beautiful appearance. The neutral beige tone complements any interior style, from modern minimalist to classic traditional.",
  ],
  features = [
    "High-density, soft pile for maximum comfort",
    "Stain-resistant and easy to clean",
    "Non-slip backing for safety",
    "Suitable for living rooms, bedrooms, and nurseries",
    "Hypoallergenic materials",
  ],
  highlightedWords = ["soft", "comfort", "plush"],
}: ProductDescriptionProps) => {
  // Function to highlight specific words in text (disabled - returns plain text)
  const highlightText = (text: string) => {
    return text;
  };

  return (
    <section className="py-12">
      <div className="h-px bg-separator mb-12" />
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column - Description text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground mb-6">{heading}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {highlightText(paragraph)}
            </p>
          ))}
        </div>

        {/* Right column - Features list */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Key Features
          </h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Circle className="h-2 w-2 mt-2 fill-bullet text-bullet flex-shrink-0" />
                <span className="text-muted-foreground">{highlightText(feature)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-px bg-separator mt-12" />
    </section>
  );
};

export default ProductDescription;
