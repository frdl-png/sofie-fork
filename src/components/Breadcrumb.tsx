import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="py-4">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
            )}
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <a
                href={item.href || "#"}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
