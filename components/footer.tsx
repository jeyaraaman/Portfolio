import Image from 'next/image'
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

       <div className="flex items-center gap-3">
  <Image
    src="/logo1.png"
    alt="JK Logo"
    width={50}
    height={50}
    className="object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
  />

  <div>
    <h3 className="font-semibold">
      Jeyaraaman K
    </h3>

    <p className="text-sm text-muted-foreground">
      Python Full Stack Developer
    </p>
  </div>
</div>

        <p className="text-center text-sm text-muted-foreground">
          Designed & Developed by <span className="font-medium text-foreground">Jeyaraaman K</span>
        </p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  )
}