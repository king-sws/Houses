import { HomeIcon, Mail, MailIcon, MessageCircle, MoveRight, PhoneCall, User} from 'lucide-react'

const infoData = [{
  icon : <MailIcon size={20} />,
  text : 'HomeLand@gmail.com'
},
{
  icon : <PhoneCall size={20} />,
  text : '+1 234 567 890'
},
{
  icon : <HomeIcon size={20} />,
  text : 'Street Mohammed V, SF, MR'
},
]

const Contant = () => {
  return (
    <section id="contact" className='min-h-screen mt-[1rem] ' >
      <div className="containe w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-y-2">
              <div className="flex flex-row  items-start ">
              <p className='text-purple-500 text-[17px] font-medium text-start ' >Say Hello 🎉</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className='text-[60px] max-w-[25rem] font-bold leading-[5rem] mt-3 text-slate-900' >We are here to help you.</p>
              <p className='text-slate-500 text-[16px] max-w-[19rem] ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis dolores. </p>
            </div>
          </div>
          <div className="my-10">
            <img src="/house-banner.png" alt="" width={500} />
          </div>
        </div>
        <div className="grid mb-[5rem]  grid-cols-1 lg:grid-cols-2  items-center">
          <div className="mb-5">
            {infoData.map((item , i)=>(
              <div key={i} className="flex flex-row mb-5 gap-4">
                  <p className='text-blue-700 font-bold ' > {item.icon} </p>
                  <p className='font-medium text-slate-600' > {item.text} </p>
              </div>
            ))}
          </div>
          <div className="">
            <div className="w-full flex flex-col gap-5 ">
              <div className="flex relative items-center text-black border-[2px] rounded-xl ">
                <input type="text" placeholder='Name' className='p-3 px-5  w-full rounded-xl text-black border-none outline-purple-500 ' />
                <div className="absolute right-4 ">
                  <User className='' />
                </div>
              </div>
              <div className="flex relative items-center  text-black border-[2px] rounded-xl ">
                <input type="email" placeholder='Email' className='p-3 px-5 w-full rounded-xl text-black border-none outline-purple-500  ' />
                <div className="absolute right-4">
                  <Mail />
                </div>
              </div>
              <div className="flex relative text-black border-[2px] rounded-xl">
                <textarea className="p-3 px-5 w-full rounded-xl text-black border-none outline-purple-500 " placeholder="Type Your Message Here" />
                <div className="absolute right-4 top-3 " >
                  <MessageCircle />
                </div>
              </div>
            </div>  
            <div className="mt-4 flex gap-x-3">
              <button className='rounded-xl bg-purple-500 hover:bg-purple-400 gap-3 p-3 text-white flex justify-center items-center font-medium  ' >Let&rsquo;s Take <MoveRight /> </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contant