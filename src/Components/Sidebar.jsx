import emma from '../assets/users/Emma.jpg';
import { suggestedUsers } from '../Data/Index';

export default function Sidebar() {
  return (
    <section className="max-w-[307px] mx-auto py-6">
      <div className="flex justify-between items-center mt-4">
        {/* info div */}
        <div className="flex items-center space-x-2">
          <div className="bg-black p-[2px] rounded-full">
            <img
              src={emma}
              className="rounded-full w-14 h-14 object-cover cursor-pointer"
              alt=""
            />
          </div>

          <div className="text-sm">
            <h5 className="font-bold text-md">egold3_</h5>
            <p className="tracking-tighter text-[12px] font-medium">Unknown</p>
          </div>
        </div>

        <div className="cursor-pointer text-sm text-blue-600">switch</div>
      </div>

      <div className="flex justify-between text-sm font-medium py-3">
        <h2 className="text-neutral-500">Suggested for you</h2>
        <p className="cursor-pointer text-[12px]">See All</p>
      </div>

      <div className="space-y-3">
        {suggestedUsers.map((user, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              {/* info div */}
              <div className="flex items-center space-x-2">
                <div className="bg-black p-[2px] rounded-full">
                  <img
                    src={user.img}
                    className="rounded-full w-12 h-12 object-cover cursor-pointer"
                    alt=""
                  />
                </div>

                <div className="text-sm">
                  <h5 className="font-bold text-md">{user.username}</h5>
                  <p className="tracking-tighter text-[12px] font-medium text-neutral-500">
                    {user.subtitle}
                  </p>
                </div>
              </div>

              <div className="cursor-pointer text-[12px] text-blue-600">
                Follow
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
