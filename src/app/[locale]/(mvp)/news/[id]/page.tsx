import Image from "next/image"

interface ArticleProps {
  params: {
    id: string
    locale: string
  }
}

const fetchArticle = async (id: string) => {
  // Mock данные для статьи
  return {
    id,
    title: "News title, no more than two lines",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: "/images/dev/news-placeholder.png",
    date: "07/10/2025",
  }
}

const Article = async ({ params }: ArticleProps) => {
  const { id } = await params
  const article = await fetchArticle(id)

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="mb-8 text-3xl leading-tight font-bold text-gray-900">{article.title}</h1>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg border">
          <Image src={article.image} alt={article.title} fill className="h-full w-full object-cover" />
        </div>

        <div className="prose max-w-none">
          <div className="text-base leading-relaxed whitespace-pre-line text-gray-700">{article.content}</div>
        </div>

        <div className="relative mt-8 mb-8 aspect-video w-full overflow-hidden rounded-lg border">
          <Image src={article.image} alt={article.title} fill className="h-full w-full object-cover" />
        </div>

        <div className="prose max-w-none">
          <div className="text-base leading-relaxed whitespace-pre-line text-gray-700">{article.content}</div>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">News that will be interesting to you</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border bg-gray-200">
                <Image
                  src="/images/dev/news-placeholder.png"
                  alt="Related article"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">News title, no more than two lines</h3>
                <p className="mt-1 text-xs text-gray-600">
                  Sample text specially stretched over 2 lines to show how the real news will look...
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border bg-gray-200">
                <Image
                  src="/images/dev/news-placeholder.png"
                  alt="Related article"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">News title, no more than two lines</h3>
                <p className="mt-1 text-xs text-gray-600">
                  Sample text specially stretched over 2 lines to show how the real news will look...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
