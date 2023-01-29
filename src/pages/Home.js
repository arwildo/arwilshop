import React from 'react';

import Header from '../partials/Header';
import Projects from '../partials/Projects';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden dark:bg-gray-900">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Projects />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
