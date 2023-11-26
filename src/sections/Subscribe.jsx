import Button  from "../components/Button"
const Subscribe = () => {

  return (
    <section id="contact-us" className="max-container flex jus items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for
      <span className=" text-coral-red">Updates</span></h3>
      <div className=" lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@slick.com" className="input"/>
        <Button  label="Sign Up" fullWidth/>
      </div>
    </section>
  )
}

export default Subscribe
