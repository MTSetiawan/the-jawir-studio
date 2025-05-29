import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-red-900 to-black fixed top-0 w-full z-50 shadow-lg shadow-red-900/20 border-b border-red-800/30">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo1.jpg"
            alt="Game Logo"
            className="h-10 w-auto drop-shadow-lg drop-shadow-red-600/50 hover:scale-105 transition-transform duration-300"
            width={200}
            height={200}
          />
        </div>

        {/* NAVIGATION LINKS */}
        <div className="space-x-6 text-sm uppercase tracking-wider">
          <a
            href="#about"
            className="hover:text-red-400 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-red-500/50"
          >
            About
          </a>
          <a
            href="#trailer"
            className="hover:text-red-400 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-red-500/50"
          >
            Trailer
          </a>
          <a
            href="#screenshots"
            className="hover:text-red-400 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-red-500/50"
          >
            Screenshots
          </a>
          <a
            href="#contact"
            className="hover:text-red-400 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-red-500/50"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 overflow-hidden"
        id="hero"
      >
        {/* ANIMATED BACKGROUND OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-black/80 to-black animate-pulse"></div>

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center opacity-30 mix-blend-multiply"
          aria-hidden="true"
        >
          <Image
            src="/background.jpg"
            alt="..."
            className="z-10 opacity-50"
            width={200}
            height={200}
          />
        </div>

        {/* RED GLOW EFFECTS */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <Image
            src="/logo.png"
            alt="Game Logo"
            className="w-40 mx-auto drop-shadow-2xl drop-shadow-red-600/50 hover:scale-105 transition-transform duration-500"
            width={200}
            height={200}
          />
          <p className="text-lg text-red-100 max-w-xl leading-relaxed tracking-wide drop-shadow-lg text-center">
            Setiap lantai menyimpan rahasia. dan ibumu telah menunggumu
          </p>
          <div className="mt-8">
            <Link
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-8 py-3 rounded-lg font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 border border-red-500/50"
              href="https://drive.google.com/file/d/1o_gmmOeMcRC6NHiXwMoIDSK16NDLAmRm/view?usp=drive_link"
            >
              Play Now
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 px-6 text-center bg-gradient-to-b from-black to-red-950/20 border-t border-red-800/30"
      >
        <h2 className="text-4xl font-bold mb-8 text-red-400 drop-shadow-lg tracking-wide">
          About the Game
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-950/20 p-8 rounded-lg border border-red-800/30 shadow-xl shadow-red-900/20 backdrop-blur-sm">
            <p className="text-gray-200 leading-relaxed text-lg">
              Seorang pemuda yang sedang menjaga ibunya di rumah sakit tidak
              sengaja terjebak di lantai 8 rumah sakit itu yang kosong dan
              terkenal angker, disana dia harus memecahkan misteri yang ada di
              dalamnya agar dapat sampai ke lantai 4 dan harus melewati lantai
              diatas 4 yang kosong juga, mampukah dia bisa kembali dengan
              selamat serta dapat mengatasi semua gangguan dari makhluk halus
              penunggu setiap ruangan yang ada di setiap lantai tersebut?
            </p>
          </div>
        </div>
      </section>

      {/* TRAILER */}
      <section
        id="trailer"
        className="py-20 px-6 text-center bg-gradient-to-b from-red-950/20 to-black"
      >
        <h2 className="text-4xl font-bold mb-8 text-red-400 drop-shadow-lg tracking-wide">
          Game Trailer
        </h2>
        <div className="aspect-video max-w-4xl mx-auto">
          <div className="relative">
            <iframe
              className="w-full h-full rounded-lg shadow-2xl shadow-red-900/40 border border-red-800/30"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Game Trailer"
              allowFullScreen
            ></iframe>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg blur opacity-75"></div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section
        id="screenshots"
        className="py-20 px-6 bg-gradient-to-b from-black to-red-950/20 border-t border-red-800/30"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-red-400 drop-shadow-lg tracking-wide">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-lg">
            <Image
              src="/screenshot1.png"
              alt="Screenshot 1"
              className="rounded-lg shadow-xl shadow-red-900/30 border border-red-800/30 transition-transform duration-500 group-hover:scale-110"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <Image
              src="/screenshot2.png"
              alt="Screenshot 2"
              className="rounded-lg shadow-xl shadow-red-900/30 border border-red-800/30 transition-transform duration-500 group-hover:scale-110"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <Image
              src="/screenshot3.png"
              alt="Screenshot 3"
              className="rounded-lg shadow-xl shadow-red-900/30 border border-red-800/30 transition-transform duration-500 group-hover:scale-110"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-gradient-to-b from-red-950/20 to-black"
      >
        <h2 className="text-4xl font-bold mb-8 text-red-400 drop-shadow-lg tracking-wide">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-red-950/20 p-8 rounded-lg border border-red-800/30 shadow-xl shadow-red-900/20 backdrop-blur-sm space-y-4">
            <p className="text-red-200 text-lg">📧 yourgame@email.com</p>
            <p className="text-red-200 text-lg">
              💬 Join us on{" "}
              <a
                href="https://discord.gg/yourgame"
                className="text-red-400 hover:text-red-300 underline decoration-red-500/50 hover:decoration-red-400 transition-colors duration-300"
              >
                Discord
              </a>{" "}
              or{" "}
              <a
                href="https://twitter.com/yourgame"
                className="text-red-400 hover:text-red-300 underline decoration-red-500/50 hover:decoration-red-400 transition-colors duration-300"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-red-300/70 bg-gradient-to-r from-red-950/40 via-black to-red-950/40 border-t border-red-800/30">
        <div className="max-w-4xl mx-auto">
          &copy; {new Date().getFullYear()} The Jawir Studio. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
