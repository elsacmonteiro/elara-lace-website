import React, { useState } from 'react';
import { Search, Menu, X, ShoppingBag, User, Heart } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import svgPaths from "./imports/svg-tpg7b4xf1a";
import imgRectangle from "./assets/99d6159aa51de80dda7567f1e8ca5a33ee9bb595.png";
import imgRectangle1 from "./assets/9e64b469402ca6a40ac6d4d4709e9052f8b6e24d.png";
import imgRectangle3 from "./assets/33b29e6fad9784859a8647063a4611ee97a84271.png";
import imgRectangle4 from "./assets/9b5646a7c277647294da72996a28a08ad8b365e7.png";
import imgRectangle5 from "./assets/058ca64e316e09a72f759f7a4f9b04c4a1caf1b0.png";
import imgRectangle6 from "./assets/b8f21538251027b79dacffc71a0b2e87548c220a.png";
import imgRectangle7 from "./assets/1a3432d91f782191ed7cbd883befb7bf532a0db0.png";
import imgRectangle8 from "./assets/e145a070f29a56c1528e48fb47cb8614829f753a.png";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Red Lace",
    price: 50,
    image: imgRectangle5,
    description: "A bold expression of elegance, where passion meets refinement in every delicate lace detail.",
    category: "lingerie"
  },
  {
    id: 2,
    name: "Pink Romance",
    price: 55,
    image: imgRectangle6,
    description: "Timeless sophistication — designed to embrace your power with graceful confidence.",
    category: "lingerie"
  },
  {
    id: 3,
    name: "Red Set",
    price: 65,
    image: imgRectangle3,
    description: "The epitome of elegance and mystery in luxurious black lace.",
    category: "premium"
  },
  {
    id: 4,
    name: "Delicate Green",
    price: 45,
    image: imgRectangle4,
    description: "Soft romance meets modern femininity in this beautiful design.",
    category: "romantic"
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fffcf4]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fffcf4]/95 backdrop-blur-md border-b border-[#4d1616]/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#4d1616] tracking-wide">
                Elara <span className="font-light italic">Lace</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[#4d1616] hover:text-[#8b2a2a] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-[#4d1616] hover:text-[#8b2a2a] transition-colors">About</button>
              <button onClick={() => scrollToSection('store')} className="text-[#4d1616] hover:text-[#8b2a2a] transition-colors">Store</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#4d1616] hover:text-[#8b2a2a] transition-colors">Contact</button>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4d1616]/60" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 w-64 border-[#4d1616]/20 focus:border-[#4d1616] bg-white/80"
                />
              </div>
              <Button size="icon" variant="ghost" className="text-[#4d1616] hover:text-[#8b2a2a]">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-[#4d1616] hover:text-[#8b2a2a]">
                <ShoppingBag className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-[#4d1616] hover:text-[#8b2a2a]">
                <User className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-[#4d1616]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#4d1616]/10">
              <div className="flex flex-col space-y-4 mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4d1616]/60" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 border-[#4d1616]/20 focus:border-[#4d1616] bg-white/80"
                  />
                </div>
                <button onClick={() => scrollToSection('home')} className="text-left text-[#4d1616] hover:text-[#8b2a2a] transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[#4d1616] hover:text-[#8b2a2a] transition-colors">About</button>
                <button onClick={() => scrollToSection('store')} className="text-left text-[#4d1616] hover:text-[#8b2a2a] transition-colors">Store</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[#4d1616] hover:text-[#8b2a2a] transition-colors">Contact</button>
                <div className="flex space-x-4 pt-2">
                  <Button size="icon" variant="ghost" className="text-[#4d1616] hover:text-[#8b2a2a]">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-[#4d1616] hover:text-[#8b2a2a]">
                    <ShoppingBag className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-[#4d1616] hover:text-[#8b2a2a]">
                    <User className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${imgRectangle}')` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
              Elara <span className="font-light italic text-white/90">Lace</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-shadow tracking-wide font-light">Established 2024</p>
          <Button 
            size="lg" 
            className="bg-[#4d1616] hover:bg-[#8b2a2a] text-white px-8 py-3 text-lg"
            onClick={() => scrollToSection('store')}
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#4d1616] mb-6 tracking-wide">
                <span className="font-bold">Elara</span> <span className="font-light italic">Lace</span>, EST 2024
              </h2>
              <div className="space-y-4 text-[#4d1616] text-lg">
                <p>
                  At <em className="font-semibold not-italic text-[#4d1616]">Elara Lace</em>, we believe lingerie is more than just a garment — it's a form of self-expression. 
                  Designed for modern, sophisticated women, our brand celebrates <strong>elegance</strong>, <strong>comfort</strong>, 
                  and <strong>sensuality</strong> in every detail.
                </p>
                <p>
                  Inspired by contemporary femininity, <em className="font-semibold not-italic text-[#4d1616]">Elara Lace</em> was created to offer intimate pieces that enhance 
                  natural beauty with grace and confidence. Our collections are crafted with <strong>high-quality materials</strong>, 
                  <strong>refined lace</strong>, and meticulous <strong>attention to detail</strong> — so every woman feels 
                  empowered, comfortable, and radiant, every single day.
                </p>
                <p>
                  Tailored for the urban woman with a dynamic lifestyle, the <em className="font-semibold not-italic text-[#4d1616]">Elara Lace</em> experience is entirely online, 
                  combining luxury with convenience, privacy, and trust.
                </p>
                <div className="pt-4">
                  <p className="font-bold italic">More than lingerie.</p>
                  <p className="font-bold italic">We are the art of sophisticated femininity.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url('${imgRectangle3}')` }}
              />
              <div 
                className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url('${imgRectangle4}')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="store" className="py-20 bg-[#fffcf4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4d1616] mb-4">Our Collection</h2>
            <p className="text-lg text-[#4d1616]/80 max-w-2xl mx-auto">
              Discover our carefully curated selection of luxury lingerie, designed to celebrate your unique beauty
            </p>
          </div>

          {searchQuery && (
            <div className="mb-8">
              <p className="text-[#4d1616]">
                {filteredProducts.length > 0 
                  ? `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} for "${searchQuery}"`
                  : `No products found for "${searchQuery}"`
                }
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-[#4d1616]/10 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-[#4d1616] group-hover:text-[#8b2a2a] transition-colors">
                      {product.name}
                    </h3>
                    <Badge variant="secondary" className="bg-[#4d1616]/10 text-[#4d1616]">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="text-[#4d1616]/70 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#4d1616]">€{product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-[#4d1616] hover:bg-[#8b2a2a] text-white"
                    >
                      Add to Cart
                    </Button>
                  </div>
                  <p className="text-xs text-[#4d1616]/60 mt-2">Free shipping</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-[#4d1616]/60 mb-4">Try searching with different keywords</p>
              <Button 
                variant="outline" 
                onClick={() => handleSearch('')}
                className="border-[#4d1616] text-[#4d1616] hover:bg-[#4d1616] hover:text-white"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url('${imgRectangle5}')` }}
              />
              <div className="space-y-4">
                <div 
                  className="h-44 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url('${imgRectangle5}')` }}
                />
                <div 
                  className="h-44 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url('${imgRectangle5}')` }}
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-[#4d1616]">Featured: Red Lace</h3>
              <p className="text-lg text-[#4d1616]/80">
                A bold expression of elegance, where passion meets refinement in every delicate lace detail.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-bold text-[#4d1616]">Bust:</span>
                  <span className="text-[#4d1616]">80 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#4d1616]">Waist:</span>
                  <span className="text-[#4d1616]">65 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#4d1616]">Hips:</span>
                  <span className="text-[#4d1616]">80 cm</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-[#4d1616]">€50.00</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Free shipping</Badge>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-[#4d1616] hover:bg-[#8b2a2a] text-white"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#fffcf4] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url('${imgRectangle7}')` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4d1616] mb-8">Get in Touch</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-6 border-[#4d1616]/10">
              <h3 className="font-bold text-[#4d1616] mb-2">Phone</h3>
              <p className="text-[#4d1616]/80">+ 351 229 999 999</p>
            </Card>
            <Card className="p-6 border-[#4d1616]/10">
              <h3 className="font-bold text-[#4d1616] mb-2">Email</h3>
              <p className="text-[#4d1616]/80">hello@elaralace.com</p>
            </Card>
            <Card className="p-6 border-[#4d1616]/10">
              <h3 className="font-bold text-[#4d1616] mb-2">Social Media</h3>
              <p className="text-[#4d1616]/80">@elaralace</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4d1616] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white tracking-wide">
                  Elara <span className="font-light italic">Lace</span>
                </span>
              </div>
              <p className="text-white/80 text-sm">
                The art of sophisticated femininity. More than lingerie.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('home')} className="block text-white/80 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-white/80 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('store')} className="block text-white/80 hover:text-white transition-colors">Store</button>
                <button onClick={() => scrollToSection('contact')} className="block text-white/80 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Size Guide</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Shipping Info</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Returns</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-white/80 text-sm mb-4">Subscribe for exclusive offers and updates</p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button size="sm" variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Elara Lace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}