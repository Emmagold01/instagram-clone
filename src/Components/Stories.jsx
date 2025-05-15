import { stories } from '../Data/Index';

export default function Stories() {
  return (
    <div className="flex overflow-x-auto space-x-4 py-6 px-3 max-w-full hide-scrollbar font-roboto">
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0">
          <div className="bg-gradient-to-tr from-orange-500 via-red-500 to-purple-600 p-[2px] rounded-full">
            <div className="bg-black p-[2px] rounded-full">
              <img
                src={story.img}
                className="rounded-full w-14 h-14 object-cover cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <h2 className="text-sm mt-1">{story.username}</h2>
        </div>
      ))}
    </div>
  );
}
