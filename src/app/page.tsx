import Footer from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Куб | Главная',
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-[32px] font-bold leading-[40px]">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#0077B9] to-[#00B4D8] bg-clip-text text-transparent">
              ITCube
            </span>
          </h1>
        </main>
      </div>
      <Footer />
    </>
  );
}
