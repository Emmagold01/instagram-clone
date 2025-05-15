import Stories from './Stories';
import Content from './Content';

export default function Home() {
  return (
    <section className="w-full max-w-[650px] md:ml-22 lg:ml-43 xl:ml-65 pt-[70px] pb-[60px] md:pt-0 md:pb-0">
      <Stories />
      <Content />
    </section>
  );
}
