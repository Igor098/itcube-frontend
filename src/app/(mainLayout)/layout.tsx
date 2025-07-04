import { type ReactNode } from 'react';

import Footer from '@/widgets/footer';
import { Header } from '@/widgets/header';

import 'react-datepicker/dist/react-datepicker.css';

interface IProps {
  children: ReactNode;
}

export default function mainLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
