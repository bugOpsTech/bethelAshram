import '@/app/globals.css'
import Header from '@/components/Header';
import Landing from './client/Landing';

export default function Home() {
  return (
    <>
      <div className=' bg-red-600'> 
          <Header />
          <main className='z-10'>
            <Landing />
          </main>
      </div>

    </>
   
  );
}
