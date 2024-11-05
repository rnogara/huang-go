import ContactForm from "./ContactForm";
import Video from "./Video"

export default function Conatct() {
  return (
    <section id="contact" className="h-svh w-full">
      <div className="relative h-full w-full flex flex-col">
        <Video />
        <div className="h-24 bg-gradient-to-b from-white to-transparent" />
        <ContactForm />
      </div>
    </section>
  );
}