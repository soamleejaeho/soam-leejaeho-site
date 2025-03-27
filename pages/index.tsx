
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Soam Lee Jaeho | Korean Oriental Painter</title>
      </Head>
      <header className="text-center py-10 border-b">
        <h1 className="text-4xl font-bold">Soam Lee Jaeho</h1>
        <p className="text-lg mt-2">Korean Oriental Painter</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 grid gap-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About the Artist</h2>
          <p className="mb-2">Born in 1927, Soam Lee Jaeho was a renowned Korean Oriental painter.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(3).keys()].map((i) => {
              const num = i + 1;
              return (
                <div key={num} className="border rounded overflow-hidden shadow-sm">
                  <img src={`/art${num}.jpg`} alt={`Artwork ${num}`} className="w-full h-auto object-cover" />
                  <div className="p-2 text-sm text-center text-gray-600">Untitled</div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
