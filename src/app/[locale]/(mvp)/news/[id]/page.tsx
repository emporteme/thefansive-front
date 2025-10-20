interface ArticleProps {
  params: Promise<{
    id: string
    locale: string
  }>
}

const fetchArticle = async (id: string) => {
  // Mock данные для статьи
  return {
    id,
    title: "Thefansive & Liverpool Collaboration",
    category: "Football News",
    date: "07/10/2025",
    sections: {
      intro: {
        title: "A New Era in Fan Engagement",
        content:
          "We are proud to officially announce our partnership with one of the most iconic football clubs in the world Liverpool FC. This collaboration marks the beginning of a groundbreaking journey to transform how fans connect with the game they love.",
      },
      main: {
        title: "Redefining the Fan Experience",
        content:
          "Thefansive is a next-generation, blockchain-powered platform designed to bring clubs and fans closer than ever before. With Liverpool FC joining our vision, we are setting the stage for a future where fans aren't just spectators they are participants, stakeholders, and contributors to the club's digital ecosystem.",
      },
      partnership: {
        title: "What This Partnership Brings",
        benefits: [
          "Exclusive Digital Experiences: Fans will gain access to unique, interactive Liverpool FC content, events and moments through Thefansive.",
          "Reward & Loyalty System: Engagement will be rewarded. Fans who actively participate in the ecosystem will earn points, benefits, and digital rewards.",
          "NFTs & Token Integration: Through digital collectibles and the STHEFANS token, supporters will be able to own and personalize their experience like never before.",
        ],
      },
      global: {
        title: "Local Access, Global Reach",
        content:
          "Liverpool FC has one of the most passionate global fan bases in sports. This partnership ensures that every supporter no matter where they are in the world has equal access to exclusive experiences, direct engagement, and meaningful rewards through Thefansive.",
      },
      future: {
        title: "Looking Ahead",
        content:
          "This is more than a sponsorship. It's a shared vision to lead the future of sports through innovation, decentralization, and meaningful fan participation. Together, Thefansive and Liverpool FC are committed to pushing boundaries and setting new standards in fan engagement.",
        subtitle: "Stay tuned as we roll out new features, campaigns and community-driven initiatives.",
      },
    },
  }
}

const Article = async ({ params }: ArticleProps) => {
  const { id } = await params
  const article = await fetchArticle(id)

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Header Section */}
        <div className="mb-8 rounded-lg bg-[#E2E8F0]">
          <div className="p-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">{article.title}</h1>
            <div className="flex gap-8">
              <span className="text-base font-bold text-gray-900">{article.category}</span>
              <span className="text-base text-gray-600">{article.date}</span>
            </div>
          </div>

          {/* Hero Image with Triangle Logo */}
          <div className="relative flex h-64 items-center justify-center rounded-b-lg bg-gray-100">
            <div className="flex space-x-2">
              <div className="clip-triangle h-12 w-12 bg-black"></div>
              <div className="clip-triangle h-10 w-10 bg-black"></div>
              <div className="clip-triangle h-8 w-8 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* A New Era in Fan Engagement */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{article.sections.intro.title}</h2>
            <p className="mb-6 leading-relaxed text-gray-700">{article.sections.intro.content}</p>
          </section>

          {/* Redefining the Fan Experience */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{article.sections.main.title}</h2>
            <p className="mb-8 leading-relaxed text-gray-700">{article.sections.main.content}</p>

            {/* Triangle Logo in content */}
            <div className="my-12 flex justify-center">
              <div className="flex space-x-2">
                <div className="clip-triangle h-10 w-10 bg-black"></div>
                <div className="clip-triangle h-8 w-8 bg-black"></div>
                <div className="clip-triangle h-6 w-6 bg-black"></div>
              </div>
            </div>
          </section>

          {/* What This Partnership Brings */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">{article.sections.partnership.title}</h2>
            <ul className="space-y-4">
              {article.sections.partnership.benefits.map((benefit, index) => (
                <li key={index} className="leading-relaxed text-gray-700">
                  <strong className="text-gray-900">{benefit.split(":")[0]}:</strong>
                  {benefit.split(":").slice(1).join(":")}
                </li>
              ))}
            </ul>
          </section>

          {/* Local Access, Global Reach */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{article.sections.global.title}</h2>
            <p className="leading-relaxed text-gray-700">{article.sections.global.content}</p>
          </section>

          {/* Looking Ahead Section with sidebar layout */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className="flex h-full flex-col items-center justify-center rounded-lg bg-gray-50 p-6">
                  <div className="mb-6">
                    <div className="clip-triangle mx-auto h-16 w-16 bg-black"></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{article.sections.future.title}</h2>
                <p className="mb-6 leading-relaxed text-gray-700">{article.sections.future.content}</p>
                <p className="text-gray-600 italic">{article.sections.future.subtitle}</p>
              </div>
            </div>
          </section>
        </article>

        {/* News that will be interesting to you */}
        <section className="border-t bg-slate-100 p-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">News that will be interesting to you</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* First News Item */}
            <div className="overflow-hidden rounded-lg border bg-white">
              <div className="flex h-full w-full gap-[24px] p-6">
                <div className="mb-4 flex h-full w-full items-center justify-center rounded-lg bg-gray-100 p-6">
                  <div className="clip-triangle h-8 w-8 bg-black"></div>
                </div>
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">01/10/2025</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">Thefansive & Liverpool Collaboration</h3>
                  <p className="mb-4 text-sm text-gray-600">Football News</p>
                  <p className="text-sm text-gray-700">
                    We are proud to announce our partnership with one of the most iconic football clubs, Liverpool
                    Football Club. This collaboration brings fans closer to the game they love.
                  </p>
                </div>
              </div>
            </div>

            {/* Second News Item */}
            <div className="overflow-hidden rounded-lg border bg-white">
              <div className="flex h-full w-full gap-[24px] p-6">
                <div className="mb-4 flex h-full w-full items-center justify-center rounded-lg bg-gray-100 p-6">
                  <div className="clip-triangle h-8 w-8 bg-black"></div>
                </div>
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">03/10/2025</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">$THEFANS Token Pre-Sale</h3>
                  <p className="mb-4 text-sm text-gray-600">Crypto News</p>
                  <p className="text-sm text-gray-700">
                    Be part of the future of fan engagement with $THEFANS token. Token presale and secure your spot in
                    the next generation of sports fandom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Article
