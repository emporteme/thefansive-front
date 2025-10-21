import { Button, CachedImage } from "@/shared/components/ui"

const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-14 flex max-w-[320px] justify-center">
        <CachedImage
          src="/images/fallbacks/empty-cart-image.webp"
          alt="cart banner"
          width={320}
          height={320}
          className="h-auto w-full"
        />
      </div>
      <h2 className="mb-6 text-2xl font-bold sm:text-4xl">There are no items in your cart</h2>
      <p className="text-md mb-12 font-semibold sm:text-xl">
        Be more than a fan, visit your club’s page and show your true support
      </p>
      <Button size="xl" className="justify-center sm:min-w-[374px]">
        Choose your team
      </Button>
    </div>
  )
}

export default EmptyCart
