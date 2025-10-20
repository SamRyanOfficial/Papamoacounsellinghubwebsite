import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold mb-2">Papamoa Counselling Hub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A peaceful coastal space for healing and growth, providing professional counselling services in beautiful Papamoa.
            </p>
            <address className="not-italic text-sm text-muted-foreground">
              <p>Papamoa Beach, Tauranga</p>
              <p>Bay of Plenty, New Zealand</p>
              <p className="mt-2">Email: papamoacounsellinghub@gmail.com</p>
              <p>Phone: 021516330</p>
            </address>
          </div>
          <div className="border-t pt-6 w-full">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Papamoa Counselling Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
