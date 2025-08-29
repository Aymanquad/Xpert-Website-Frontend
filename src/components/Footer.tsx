export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-10 text-sm text-zinc-400">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© 2025 Xpert Games. All Rights Reserved.</div>
          <nav className="flex items-center gap-6">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}


