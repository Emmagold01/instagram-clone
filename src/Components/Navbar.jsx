import { navbar } from '../Data/Index';
import { Icon } from '@iconify/react';
import { mobNav } from '../Data/Index';
import { mobLogo } from '../Data/Index';

export default function Navbar() {
  return (
    <section>
      {/* medium and up navbar */}
      <nav className="hidden fixed top-0 left-0 w-20 xl:w-60 h-screen px-4 border-r border-neutral-700 md:flex flex-col">
        {/* Logo */}
        <div className="pt-6 pb-3">
          <Icon
            icon="simple-icons:instagram"
            className="text-2xl mx-auto xl:hidden"
          />
          <h1 className="hidden xl:block font-lobster text-2xl">Instagram</h1>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col justify-between flex-1 mt-9">
          {/* Top Nav */}
          <div className="flex flex-col space-y-6">
            {navbar.slice(0, 9).map((nav) => (
              <a href={nav.href} key={nav.label}>
                <h2 className="flex items-center justify-center xl:justify-start gap-2 text-base">
                  {nav.img ? (
                    <img
                      src={nav.img}
                      alt=""
                      className="rounded-full h-5 w-5"
                    />
                  ) : (
                    <span className="text-xl">{nav.icon}</span>
                  )}
                  <span
                    className={`hidden xl:inline ${
                      nav.active ? 'font-bold' : ''
                    }`}
                  >
                    {nav.label}
                  </span>
                </h2>
              </a>
            ))}
          </div>

          {/* Bottom Nav */}
          <div className="flex flex-col space-y-6 pb-4">
            {navbar.slice(9).map((nav) => {
              const hideOnTablet = ['Meta AI', 'AI Studio', 'Threads'].includes(
                nav.label
              );

              return (
                <div
                  key={nav.label}
                  className={hideOnTablet ? 'hidden lg:block' : ''}
                >
                  <a href={nav.href}>
                    <h2 className="flex items-center justify-center xl:justify-start gap-2 text-base">
                      <span className="text-xl">{nav.icon}</span>
                      <span className="hidden xl:inline">{nav.label}</span>
                    </h2>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav className="relative md:hidden">
        {/* top nav */}
        <div className="fixed top-0 left-0 right-0 w-full border-b border-neutral-500 bg-black z-50 ">
          <div className="flex justify-between items-center px-3 py-5">
            <div className="font-lobster text-2xl">Instgram</div>
            <div className="flex space-x-2 text-2xl">
              {mobLogo.map((mob, index) => (
                <div key={index}>{mob.icon}</div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom nav */}
        <div className="fixed bottom-0 left-0 w-full border-t border-neutral-500 bg-black z-50">
          <div className="flex justify-between items-center px-6 py-5">
            {mobNav.map((mob, index) => (
              <div key={index}>
                {mob.img ? (
                  <img src={mob.img} className="rounded-full h-8 w-8" alt="" />
                ) : (
                  <span className="text-2xl cursor-pointer">{mob.icon}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
}
