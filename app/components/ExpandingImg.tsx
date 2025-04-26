'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

function ExpandingImg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      width: '100vw',
      height: '80vh', // Adjust final height as needed
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-50% center",
        end: "1% 50%",
        scrub: 1,
        markers: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <>
      <div className='body w-full h-[100vh] relative'>
        <div ref={containerRef} className="absolute flex items-center justify-center top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[inherit] h-[15rem]">
          <img ref={imageRef} className="w-1/2 h-1/2 object-cover" src="assets/features/tent.jpg" alt="" />
        </div>
      </div>
      <p className="mt-[24rem] w-full h-full bg-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas magni quibusdam, eius quisquam vitae tempore? Totam quod quae earum maxime unde possimus, laboriosam fugit libero quia nihil facilis eos cumque suscipit sunt rem explicabo enim! Voluptatem laboriosam tempore quaerat voluptates aliquam sequi perferendis optio esse facilis hic saepe, consequatur ea laudantium doloribus ratione, perspiciatis eveniet ex. Obcaecati a debitis minus et impedit eum autem officiis? Praesentium et voluptates totam quam delectus quia, officia minus alias recusandae consequatur. Ducimus at in aspernatur nulla similique repudiandae quidem molestias nostrum modi natus dolores fuga ut voluptates alias nam laudantium, cum ipsam quam, dolore placeat eos beatae culpa voluptas! At modi debitis quae, cupiditate quidem nulla laudantium dolores. Molestiae porro rem, accusantium nihil unde nisi pariatur impedit eos tempora cumque repellat ut, magni soluta natus totam corporis qui nobis delectus quibusdam aliquam? Sint, maxime neque nam ipsam doloribus, recusandae sequi cumque culpa ad necessitatibus qui ratione atque consequatur adipisci! Eos provident adipisci magnam voluptates, sint nobis. Culpa sit repellendus nostrum ex ab. Temporibus quo commodi quis distinctio doloremque quibusdam, provident atque, nesciunt obcaecati aliquid sit officiis beatae ipsa unde id, voluptas iure dolores fugit dolor. Tempore velit et, beatae voluptates similique sed consectetur perspiciatis omnis possimus quos culpa ut quasi rem perferendis reiciendis doloremque quia odio quam recusandae, enim incidunt! Aut accusantium est aliquam cupiditate odit sed iusto pariatur eius perspiciatis, sit suscipit, voluptate dolores error autem! Veniam repellat, autem laborum illo incidunt tenetur provident voluptates corporis illum veritatis quod neque. Qui illo doloremque necessitatibus voluptatibus, eius aperiam vitae vero exercitationem quasi, nemo velit itaque odit incidunt illum. Nobis repellat obcaecati, provident est harum id hic, impedit corrupti consequatur dignissimos debitis optio eligendi iusto pariatur praesentium recusandae distinctio quia exercitationem porro a quaerat alias? Tempora laudantium earum exercitationem ratione quidem sequi molestiae officia nam rerum repudiandae modi enim quasi aliquid ad deserunt, magnam iste vel ipsum dolores eligendi pariatur animi quas? Maxime delectus quas labore asperiores assumenda, recusandae voluptate expedita facilis rerum a deleniti dignissimos repudiandae dolorum at est molestias ex necessitatibus odio iure cupiditate magni. Impedit praesentium, saepe, dolorem odit ad sunt aperiam sapiente sit harum alias laborum voluptatibus dignissimos eveniet earum cum. Voluptas animi quisquam, error ad vel molestias neque, explicabo voluptatum minima ea sequi voluptate vero aliquid doloribus itaque eligendi adipisci obcaecati sit? Dignissimos, esse. Ea dolore dicta eveniet aut provident perspiciatis maxime dignissimos nemo ab molestias non atque delectus itaque consequuntur, totam quas error placeat natus recusandae? Consequuntur aspernatur a magnam quisquam quidem, aperiam, dignissimos totam maiores animi, asperiores repellat debitis aut eius mollitia! Molestiae aspernatur ipsa magni? Vero voluptatum voluptatibus iste accusantium totam beatae ratione delectus, quod doloribus amet. Libero, eius totam illo, est similique sit accusantium provident fugit fugiat nihil asperiores optio vitae distinctio officia aliquid deleniti dicta? Atque corrupti laborum provident deserunt ea? Id eaque illo veniam reprehenderit, dolor autem at molestiae iure voluptatum, nemo exercitationem nesciunt placeat tempore voluptatibus labore ex tenetur provident! Deleniti officiis dolorum temporibus totam provident deserunt omnis quod quasi, consequuntur optio!</p>
    </>
  )
}

export default ExpandingImg