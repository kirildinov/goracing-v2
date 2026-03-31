"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Facebook } from "lucide-react";
import { services } from "@/data/services";
import { BUSINESS } from "@/data/business";

const navItems = [
  { label: "Acasă", path: "/" },
  { label: "Servicii", path: "/servicii", hasDropdown: true },
  { label: "KTM", path: "/ktm" },
  { label: "Magazin", path: "/magazin" },
  { label: "Despre Noi", path: "/despre-noi" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
      <div className="container-content flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="GoRacing - Service Moto București"
            className="h-12 md:h-14 w-auto"
            width={310}
            height={95}
            loading="eager"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
              onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
            >
              <Link
                href={item.path}
                className={`px-4 py-2 text-sm font-heading font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-secondary-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
              {item.hasDropdown && servicesOpen && (
                <div className="absolute top-full left-0 bg-secondary border border-go-dark-lighter rounded-md shadow-lg py-2 min-w-[260px] z-50">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicii/${s.slug}`}
                      className="block px-4 py-2 text-sm text-secondary-foreground hover:text-primary hover:bg-go-dark-lighter transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href={BUSINESS.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary transition-colors ml-2"
            aria-label="Facebook GoRacing"
          >
            <Facebook className="h-5 w-5" />
          </a>

          <a
            href={`tel:${BUSINESS.phone}`}
            className="btn-primary ml-4 text-sm py-2 px-4"
          >
            <Phone className="h-4 w-4" />
            Sună: {BUSINESS.phoneFormatted}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="text-primary"
            aria-label="Sună acum"
          >
            <Phone className="h-6 w-6" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-secondary-foreground"
            aria-label={mobileOpen ? "Închide meniu" : "Deschide meniu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-secondary border-t border-go-dark-lighter">
          <div className="container-content py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => !item.hasDropdown && setMobileOpen(false)}
                  className={`block py-3 px-2 text-base font-heading font-medium ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-secondary-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicii/${s.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 px-2 text-sm text-secondary-foreground hover:text-primary"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
