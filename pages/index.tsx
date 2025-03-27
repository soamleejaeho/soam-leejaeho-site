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
      <main className="max-w-4xl mx-auto px-4 py-10 grid gap-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About the Artist</h2>
          <p className="mb-2">Born in Chungcheongbuk-do, Korea on April 18, 1927, Soam Lee Jaeho was a prominent Oriental painter whose works were celebrated both domestically and internationally.</p>
          <p className="mb-2">Lee held numerous solo exhibitions and participated in international events in Tokyo, Osaka, and more.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <p>Artwork images will be displayed here.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exhibitions & Career</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>1953~79: National Art Exhibition - 17 times selected</li>
            <li>1957~93: 13 Solo Exhibitions</li>
            <li>1981~1986: Multiple Tokyo invitations</li>
            <li>1988: Seoul Olympic Memorial Exhibition</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>For inquiries, please contact the site administrator.</p>
        </section>
      </main>
    </div>
  )
}
