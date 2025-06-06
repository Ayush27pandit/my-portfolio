function BLogCta() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto bg-zinc-900 rounded-2xl p-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 text-white">
          <span>Read my blog</span>
          <a
            href="https://dev.to/itsayushpandit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded">
              <span className="font-bold">dev.to</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BLogCta;
