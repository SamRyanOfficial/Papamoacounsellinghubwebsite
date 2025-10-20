import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Papamoa Counselling Hub</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A peaceful coastal space for healing and growth, providing professional counselling services and room
              rentals in beautiful Papamoa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-muted-foreground hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:underline">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="mt-2 not-italic text-sm text-muted-foreground">
              <p>Papamoa Beach, Tauranga</p>
              <p>Bay of Plenty, New Zealand</p>
              <p className="mt-2">Email: info@papamoahub.co.nz</p>
              <p>Phone: 07 572 4567</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Papamoa Counselling Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
