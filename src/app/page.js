import '@/app/globals.css'
import About from '@/components/About';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className=' bg-white'> 
        <div className="flex flex-1 min-h-screen">
            <Header />
        </div>
      </div>

      {/* <About /> */}
      {/* <Footer /> */}
    </>
   
  );
}
