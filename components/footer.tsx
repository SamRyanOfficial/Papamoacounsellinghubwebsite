import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Papamoa Counselling Hub</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A peaceful coastal space for healing and growth, providing professional counselling services in beautiful Papamoa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="mt-2 not-italic text-sm text-muted-foreground">
              <p>Papamoa Beach, Tauranga</p>
              <p>Bay of Plenty, New Zealand</p>
              <p className="mt-2">Email: papamoacounsellinghub@gmail.com</p>
              <p>Phone: 021516330</p>
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
