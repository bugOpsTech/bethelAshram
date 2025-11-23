import Image from "next/image";
import facilities from "@/data/faclities";
import Donation from "@/components/Donation";

export default function BGarden() {
  return (
    <div className="w-full min-h-screen bg-blue-300">
      {/* hero */}
      <section className="relative w-full min-h-[80vh] bg-[url('/assets/bgardenBg.jpg')] bg-cover bg-center shadow-2xl shadow-white">
        <div className="flex flex-col text-center px-40 pt-30 pb-1">
          <h1 className="text-6xl text-white">Mission Bethel Garden</h1>
          <p className="text-white text-2xl">
            A Humble effort to protect and provide loving care to the isolated
            and elderly in society.{" "}
          </p>
        </div>
        <div className="flex flex-col text-center justify-end items-center">
          <Image
            src={"/assets/logo.png"}
            alt="bethel Logo"
            width={130}
            height={130}
          />
          <h2 className="text-white text-xl">Bethel Garden</h2>
          <h1 className="text-white text-3xl">Bass Trust No: 161/94/94</h1>
          <h2 className="text-white text-2xl">Since - 1934</h2>
        </div>
      </section>
      {/* herobox */}
      <section className="absolute w-full flex justify-center -mt-10 px-4 ">
        <div className="w-full max-w-6xl bg-white shadow-xl rounded-xl p-8 flex flex-col md:flex-row gap-6 md:gap-4">
          {/* card 1 */}
          <div className="flex-1 text-center px-4">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold text-lg">Make Donation</h3>
            <p className=" text-gray-600 text-sm mt-2">
              Your small help creates big changes in the lives of the needy.
            </p>
          </div>
          {/* card 2 */}
          <div className="flex-1 text-center px-4 border-l border-r border-pink-600">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-semibold text-lg">Strengthen a Community</h3>
            <p className=" text-gray-600 text-sm mt-2">
              Your support helps us reach more abandoned elders and provide
              essential care.
            </p>
          </div>
          {/* card 3 */}
          <div className="flex-1 text-center px-4">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-semibold text-lg">
              Be the Reason Someone Smiles
            </h3>
            <p className=" text-gray-600 text-sm mt-2">
              Join us as a volunteer and become a part of someone's healing
              journey.
            </p>
          </div>
        </div>
      </section>
      {/* about */}
      <section className="relative w-full pt-50 pb-10">
        <div className="w-full max-w-10xl flex flex-col lg:flex-row">
          <div className="w-full flex flex-col justify-center items-start ps-15 ">
            <h1 className="text-2xl">What is Bethel Garden ? </h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              laudantium enim harum natus iusto non molestias recusandae
              adipisci veniam aut minima, laborum eos quaerat corrupti eius
              magni tempore! Iste, eius? Laborum aut architecto expedita aperiam
              harum, molestiae quasi repellendus vitae animi corporis incidunt
              quisquam rerum, rem quae? Autem quisquam voluptas maxime natus
              dignissimos aliquid ad, omnis exercitationem beatae minima fugit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              tempore dolorem dolore. Nam ipsum voluptatem provident, tenetur
              nobis obcaecati hic maxime. Et autem ipsam cupiditate magni
              laudantium distinctio numquam eos. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsum, laudantium autem repudiandae
              cupiditate tempore at natus atque temporibus ipsam expedita
              veritatis necessitatibus. Dolorem quidem ex alias, ut dolore enim
              aliquid? Optio dolore, ipsam, maiores iusto nostrum enim harum hic
              voluptatibus odio consequuntur corrupti qui natus deserunt ex
              culpa adipisci repellendus mollitia quidem eveniet veritatis nam
              voluptatum? Placeat animi fugiat ab.
            </p>
            <span className="text-xl bg-blue-600 text-white px-2 py-1 mt-2 rounded-xl hover:text-blue-600 hover:bg-black cursor-pointer">
              Donate Now
            </span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/assets/bethelgarden.jpg"}
              alt="bethel gardern"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
      {/* facilities */}
      <section className="w-full min-h-screen bg-white flex flex-col items-center">
        <h2 className="text-xl uppercase mt-2">Bethel Garden</h2>
        <h1 className="text-3xl mt-1 mb-6">Our Facilities</h1>
        <div className="w-full max-w-7xl bg-white shadow-lg shadow-pink-300 rounded-xl overflow-hidden mb-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item, index) => (
              <div key={index} className="p-6 flex flex-col items-center text-center">
                <Image src={item.icon} alt="icon" width={60} height={60} />
                <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* donation */}
      <Donation />
    </div>
  );
}
