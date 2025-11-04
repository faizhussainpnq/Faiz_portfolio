import BGimg2 from "../../public/assets/BGimg2.jpg";
import Image from "next/image";


export default function Img() {
  return (
    <div>
        <Image
        src={BGimg2}
        alt="Background"
        fill
        className="object-cover opacity-30"
      />    
    </div>
  )
}
