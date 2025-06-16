import {motion} from "framer-motion";

export default function FlowStep({number, title, text}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: Number(number) * 0.1}}
      className="relative flex flex-col items-center text-center max-w-[250px]"
    >
      <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg mb-4">
        {number}
      </div>
      <h3 className="">{title}</h3>
      <p className="opacity-90">{text}</p>
    </motion.div>
  );
}
