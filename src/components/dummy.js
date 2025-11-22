<section className="w-full bg-[url('/assets/founderBg.jpg')] bg-cover bg-center py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl text-center text-white font-semibold mb-8">Our Founders</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{ name: "Sr. Saramma (1901 - 1998)", img: "/assets/founder1.jpg" }, { name: "Ms. East (1901 - 1998)", img: "/assets/founder2.jpg" }].map((f, i) => (
              <div key={i} className="bg-black/40 rounded-xl p-6 flex flex-col items-center text-center text-white">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image src={f.img} alt={f.name} width={300} height={300} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold">{f.name}</h3>
                <p className="mt-3 text-sm leading-relaxed">Short founder bio — keep it 2–3 lines on mobile; expand on the profile page.</p>
                <Link href="/founders" className="mt-4 px-4 py-2 bg-blue-600 rounded-full text-white">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>