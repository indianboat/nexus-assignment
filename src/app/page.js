"use client";

import ParticleImage, {
  Vector,
  forces,
} from "react-particle-image";

import { useWindowSize } from "rooks";

export default function Home() {

  const particleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y)
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50
    },
    color: ({ x, y, image }) => "#f16522"
  }


  const motionForce = (x, y) => {
    return forces.disturbance(x, y, 5)
  }

  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <>
      <div className="container mx-auto relative w-full h-screen p-8 flex justify-center items-center">
        <ParticleImage
          className="flex w-full top-10 h-fit z-30 overflow-scroll"
          src={"/g-logo.png"}
          scale={0.9}
          entropy={20}
          width={Number(innerWidth - 5)}
          height={Number(innerHeight - 150)}
          maxParticles={4200}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="transparent"
        />

        <div className="absolute flex flex-col p-4 z-40 place-content-center select-none w-fit text-center gap-y-6">
          <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold">EMBRACE THE FUTURE</h1>
          <p className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-normal">Welcome to the age of Action</p>
        </div>
      </div>

      <div className="container mx-auto border p-8">
        hellrld Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio molestiae, laudantium dicta id dolorum perspiciatis similique necessitatibus veniam consequatur hic, maiores facilis nihil laboriosam nobis deserunt, fugit iure? Nesciunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur dolor culpa amet, labore facilis illo veniam doloribus? Cumque voluptate inventore quaerat neque alias omnis iure non eaque earum sapiente, nulla repellendus tempora, dolorem officiis repellat. Nihil labore rerum error aut minima deleniti. Perferendis, saepe facilis dolorem sequi deleniti ut nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit odio eum corporis rerum dicta quibusdam neque aspernatur assumenda. Nulla quas amet pariatur, aliquid tenetur culpa magnam? Omnis ex commodi impedit culpa, aliquam facere neque laboriosam veniam illo tempore placeat laborum quia harum officiis ipsum suscipit provident sed ratione, adipisci praesentium voluptates id nostrum. Nemo quod libero numquam rerum iste vitae temporibus quos voluptates quo, cum earum ducimus, corporis ad similique ratione. Dolorum aliquid, assumenda quos, nisi vel officiis, nam qui obcaecati necessitatibus iste consectetur nostrum ut reprehenderit quis excepturi corrupti suscipit. Asperiores dolor dignissimos quos amet odio velit perferendis veritatis dolorem eum molestiae consequuntur, ut obcaecati minus id, dolores hic consectetur placeat. Enim praesentium, nemo, quia explicabo, iure sapiente voluptatibus amet voluptates quibusdam consectetur provident tempore labore ipsam similique. Iure similique aliquam sit dolorem maiores repellat voluptas! Dolore accusamus officiis optio pariatur sint sunt eveniet sed eum enim assumenda labore expedita perferendis ad, hic voluptatibus non quod. Nisi laborum numquam recusandae similique natus. Ullam consequatur quas animi. Vel minima, sit molestias consequatur id quasi cupiditate ad autem dolor tempora est explicabo sequi tempore corporis deserunt ex qui numquam doloribus. Labore fuga quasi facere sapiente eaque! Ratione consectetur nobis accusamus dignissimos ducimus minus assumenda molestiae obcaecati voluptatem, consequatur veritatis pariatur deserunt rem exercitationem, harum quo recusandae, adipisci fugit provident iure perspiciatis doloribus. Quam error corrupti labore necessitatibus unde dolorum accusantium tenetur hic. Laudantium assumenda deserunt quasi alias officiis voluptatibus ducimus atque, eaque eos vel aliquam. Voluptatibus non fugiat nobis praesentium in voluptatum deserunt ut animi, fugit accusamus voluptate ab tempora sequi voluptas quam. Provident quisquam minus dolores necessitatibus autem exercitationem voluptatem accusamus, fugiat quam nostrum aperiam deserunt vel rerum, quo enim ea magnam nisi! Reiciendis id qui numquam, fugiat esse ipsum, porro illo sapiente aspernatur, consectetur quo ea. Facilis, aspernatur sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quod voluptatem tempore quaerat deserunt aliquam id sit, delectus animi illum distinctio possimus, ullam, voluptatum facere quam sapiente ab. Tenetur laudantium sint, delectus magni, cumque, voluptates unde ea est aspernatur ipsa voluptatem harum hic sapiente! Omnis aut, asperiores illo debitis accusamus voluptatum vel ut necessitatibus numquam eum? Voluptas libero voluptatibus minus, vitae voluptates minima officia doloremque earum, alias cumque ratione maxime eum vero aspernatur officiis tempore omnis est qui assumenda suscipit dolor facere nesciunt. Nisi tenetur eveniet quam obcaecati illum, voluptate distinctio impedit odio accusantium tempora, dolor reprehenderit a. Ipsam aspernatur nam sunt! Deserunt rerum sint fuga cumque voluptas perferendis doloremque mollitia nulla beatae voluptates esse aperiam ad, vel quibusdam veritatis odio voluptatibus minus quaerat suscipit nesciunt consequuntur atque soluta recusandae aspernatur. Soluta numquam veniam maiores tempore odit, ullam eaque quia! Vero recusandae, dignissimos qui quas aliquam expedita ipsa similique iusto fugiat dolores, odit cupiditate aut! Sequi consequuntur nesciunt eum esse. Voluptates iure saepe ducimus, tempora blanditiis vel eius. Facilis molestias modi facere deleniti harum accusantium veniam vel deserunt laboriosam. Eius odio quasi laborum ea esse vitae porro, nobis praesentium eum eveniet rem aliquid officia voluptatibus non maiores distinctio debitis beatae saepe unde tempore a iure dolor? Aliquam similique asperiores recusandae. Eveniet dignissimos corporis, et harum voluptas quasi, quidem suscipit magni ipsam inventore deserunt iusto perspiciatis. Hic facilis at accusamus temporibus voluptates beatae inventore aspernatur ipsam natus. Soluta doloribus at obcaecati consequuntur atque, repellendus aspernatur. Temporibus esse cumque voluptatum minus facilis adipisci aspernatur soluta quis consectetur eaque quibusdam quasi mollitia, saepe, sapiente accusamus, est ea provident atque libero beatae. Dolores consequuntur quam adipisci non eligendi deleniti voluptate, quo fuga aliquid nesciunt magni beatae natus numquam? Eius obcaecati accusantium, quia sed facilis minima repellendus unde sequi odio exercitationem. Quos similique reprehenderit velit.
      </div>

    </>
  )
}
