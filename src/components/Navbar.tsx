import { Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  const categories = [
    "Products",
    "Living Room",
    "New Arrivals",
    "Inspiration",
    "Sale",
    "Offers",
  ];

  return (
    <header className="sticky top-0 z-50 bg-nav border-b border-nav-border">
      {/* Top bar */}
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-xl font-bold tracking-tight text-foreground">
            HOMESTYLE
          </span>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-10 pr-4 py-2 text-sm bg-secondary border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm font-medium text-foreground">
            €0.00
          </span>
          <button className="relative p-2 hover:bg-secondary rounded-md transition-colors">
            <ShoppingCart className="h-5 w-5 text-foreground" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-primary text-primary-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="p-2 hover:bg-secondary rounded-md transition-colors">
            <User className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="bg-nav border-t border-nav-border">
        <div className="container">
          <ul className="flex items-center gap-8 overflow-x-auto py-3 text-sm">
            {categories.map((category, index) => (
              <li key={category}>
                <button
                  className={`whitespace-nowrap font-medium transition-colors hover:text-primary ${
                    index === 0
                      ? "text-foreground border-b-2 border-nav-accent pb-2 -mb-[13px]"
                      : "text-muted-foreground"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
