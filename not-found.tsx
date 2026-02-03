export const NotFound = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://media.daily.dev/image/upload/s--Rxdm7vdJ--/f_auto/v1708328512/404_z4xiwg"
            alt="404 Not Found"
            className="max-w-[400px] md:max-w-[500px] h-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-12">
          Why are you here?
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg mb-8">
          You're not supposed to be here.
        </p>

        {/* Go Home Button */}
        <Link
          href="/"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
